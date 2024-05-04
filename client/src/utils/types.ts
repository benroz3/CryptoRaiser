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
