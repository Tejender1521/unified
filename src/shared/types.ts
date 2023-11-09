export enum SelectedPage {
  Home = "home",
  Welcome = "welcome",
  Conferences = "conferences",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
  Visa = "visa"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
