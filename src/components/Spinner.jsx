import React from "react";
import loading from "../Infinity-1s-200px.gif";
const Spinner = () => {
  return (
    <>
      <div className="text-center">
        <img src={loading} alt="my-gif" />
      </div>
    </>
  );
};
export default Spinner;
