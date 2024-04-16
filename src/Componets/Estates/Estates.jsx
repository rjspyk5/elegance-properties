import React, { useEffect, useState } from "react";
import { SectionHeadings } from "./../../SharedComponets/SectionHeadings";
import axios from "axios";
import { EstateCard } from "./EstateCard/EstateCard";

export const Estates = () => {
  const [estatesData, setestatesData] = useState([]);
  useEffect(() => {
    axios.get("/Properties.json").then((res) => setestatesData(res.data));
  }, []);

  return (
    <div>
      <SectionHeadings
        heading="Exclusive Estates"
        subheading="Step into a world of luxury and sophistication with our premier properties collection. From iconic beachfront escapes to secluded island retreats, each estate exudes timeless elegance ,choose the luxury that suits you."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {estatesData &&
          estatesData.map((el) => <EstateCard estate={el} key={el.id} />)}
      </div>
    </div>
  );
};
