export interface StateType {
  campaign: FormType;
}

export interface FormType {
  name: string;
  title: string;
  description: string;
  target: string;
  deadline: string;
  image: string;
}

export interface CampaignType {
  owner: string;
  title: string;
  description: string;
  target: string;
  deadline: Date;
  amountCollected: string;
  image: string;
}
