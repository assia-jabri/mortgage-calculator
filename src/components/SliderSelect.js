import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent min={0} max={50} defaultValue={20} />
      <SliderComponent min={100} max={200} defaultValue={150} />
      <SliderComponent min={0} max={10} defaultValue={3} />
    </>
  );
};

export default SliderSelect;
