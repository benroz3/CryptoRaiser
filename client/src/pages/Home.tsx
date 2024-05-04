import { useState, useEffect } from "react";
import { PageTransition, DisplayCampaigns } from "../components";
import { useStateContext } from "../utils/Context";
import { CampaignType } from "../utils/types";

interface Props {
  searchFilter: string;
}

const Home = ({ searchFilter }: Props) => {
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState<CampaignType[]>([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  const filterCampaignsByTitle = (campaigns: CampaignType[], searchFilter: string) => {
    return campaigns.filter(campaign =>
      campaign.title.toLowerCase().includes(searchFilter.toLowerCase())
    );
  };

  const filteredCampaigns = searchFilter
    ? filterCampaignsByTitle(campaigns, searchFilter)
    : campaigns;

  return (
    <PageTransition>
      <DisplayCampaigns
        title="All Campaigns"
        campaigns={filteredCampaigns}
        loading={loading}
      />
    </PageTransition>
  );
};

export default Home;
