export interface ButtonProps {
  title: string;
  type: "button" | "submit";
  variant: string;
  icon?: string;
  full?: boolean;
  onClick?: () => void;
}

export interface CampProps {
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

export interface FeatureItem {
  title: string;
  icon: string;
  description: string;
}

export interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}
