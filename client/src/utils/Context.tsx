import { useContext, createContext } from "react";
import {
  useContract,
  useContractWrite,
  SmartContract,
  useAddress,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { CampaignType, FormType } from "./types";

const StateContext = createContext({
  address: '',
  contract: {} as SmartContract,
  createCampaign: (form: FormType): void => {},
  getCampaigns: (): Promise<CampaignType[]> => {
    return Promise.resolve([]);
  }
});

export const StateContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { contract: contractResult } = useContract(
    import.meta.env.VITE_THIRD_WEB_CONTRACT_CODE
  );
  const contract = contractResult as SmartContract;
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress() ?? ''

  const publishCampaign = async (form: FormType) => {
    try {
      const data = await createCampaign({
        args: [
          address,
          form.title,
          form.description,
          form.target,
          new Date(form.deadline).getTime(),
          form.image,
        ],
      });

      console.log("contract call success", data);
    } catch (error) {}
  };

    const getCampaigns = async () => {
      const campaigns = await contract.call('getCampaigns');

      const parsedCampaigns = campaigns.map((campaign:CampaignType, index:number) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(campaign.target.toString()),
        deadline: parseInt(campaign.deadline.toString()),
        amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
        image: campaign.image,
        pId: index
      }));

      return parsedCampaigns;
    }

  //   const getUserCampaigns = async () => {
  //     const allCampaigns = await getCampaigns();

  //     const filteredCampaigns = allCampaigns.filter((campaign) => campaign.owner === address);

  //     return filteredCampaigns;
  //   }

  //   const donate = async (pId, amount) => {
  //     const data = await contract.call('donateToCampaign', [pId], { value: ethers.utils.parseEther(amount)});

  //     return data;
  //   }

  //   const getDonations = async (pId) => {
  //     const donations = await contract.call('getDonators', [pId]);
  //     const numberOfDonations = donations[0].length;

  //     const parsedDonations = [];

  //     for(let i = 0; i < numberOfDonations; i++) {
  //       parsedDonations.push({
  //         donator: donations[0][i],
  //         donation: ethers.utils.formatEther(donations[1][i].toString())
  //       })
  //     }

  //     return parsedDonations;
  //   }

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        createCampaign: publishCampaign,
        getCampaigns,
        // getUserCampaigns,
        // donate,
        // getDonations
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
