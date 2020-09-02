import React from "react";
import { MobileButton } from "../styles/MobileButton";

interface MobileFilterProps {
  sortByTime(): void;
}

export const MobileFilter: React.FC<MobileFilterProps> = ({ sortByTime }) => {
  return <MobileButton onClick={sortByTime}>Sort by time</MobileButton>;
};
