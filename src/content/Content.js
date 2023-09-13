import "./content.scss";

import React from "react";
import Slots from "../slot/Slots";

function Content(props) {
  return (
    <div className="main-data-container">
      <Slots />
    </div>
  );
}

export default Content;
