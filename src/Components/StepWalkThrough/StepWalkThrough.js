import React from "react";

import "./stepwalkthrough.scss";
import StepLeftContent from "./StepLeftContent";
import StepOverview from "./StepOverview";
function StepWalkThrough() {
  return (
    <div className="stepwalkthrough">
      <StepLeftContent />
      <StepOverview />
    </div>
  );
}

export default StepWalkThrough;
