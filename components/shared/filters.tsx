import React from "react";
import { Title } from "./title";
import { Filtercheckbox } from ".";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <Filtercheckbox text="можно собирать" value="1" />
        <Filtercheckbox text="новинки" value="2" />
      </div>
    </div>
  );
};
