import React from "react";
import Landing from "./Landing/Landing";
import NonEngineering from "./NonEngineering/NonEngineering";
import Shadowing from "./Shadowing/Shadowing";
import Factory from "./Factory/Factory";

function Student_Programs() {
  return (
    <div className="Student_Programs">
      <Landing />
      <NonEngineering />
      <Shadowing />
      <Factory />
    </div>
  );
}
export default Student_Programs;
