import "./footer.scss";

import React, { useContext } from "react";

import Context from "../context/UserContext";

function Footer(props) {
  const { data, setData } = useContext(Context);
  const addSlots = () => {
    setData((prevState) => {
      const newSlot = `slot${prevState?.length + 1}`;
      let finalData = [
        ...prevState,
        { [newSlot]: { timeOccupied: 30, task: [] } },
      ];
      localStorage.setItem("dataLocal", JSON.stringify(finalData));
      return finalData;
      // { [`count${count}`]: { title: "abc", desc: "abcd", index: 0 } }
    });
  };
  const getd = data?.reduce((total, d) => {
    debugger;
  }, 0);
  return (
    <footer className="footer">
      <div className="addSlot">
        <button onClick={addSlots} disabled={false}>
          <i className="plus"></i>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
