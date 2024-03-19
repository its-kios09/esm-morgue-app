import React from "react";
import { MorgueHeader } from "../morgue-header/morgue-header.component";

const MorgueComponent: React.FC = () => {
  return (
    <div className={`omrs-main-content`}>
      <MorgueHeader title={"Morgue"} />
    </div>
  );
};

export default MorgueComponent;
