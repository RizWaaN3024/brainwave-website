import React from "react";
import { pricing } from "../constants";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div>
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
