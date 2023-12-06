export interface ButtonProps {
  title: string;
  type: "button" | "submit";
  variant: string;
  icon?: string;
}

export interface CampProps {
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}
