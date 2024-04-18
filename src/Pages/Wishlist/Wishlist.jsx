import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { getData } from "../../assets/Localstorage";
import { AuthContext } from "../../Provider/Provider";
import { Iteam } from "./Iteam";

export const Wishlist = () => {
  const alldata = useLoaderData();
  const { user } = useContext(AuthContext);
  const [orderedData, setorderedData] = useState([]);
  useEffect(() => {
    const data = getData(user.email);
    const filteredData = data.map((el) =>
      alldata.data.find((e) => e.id === el)
    );
    setorderedData(filteredData);
    console.log(filteredData);
  }, [alldata]);

  return (
    <div>
      <Helmet>
        <title>Elegance | Wishlist </title>
      </Helmet>
      <h1 className="text-center font-bold text-3xl my-10">WishList</h1>
      {orderedData.length > 1 ? (
        <div className=" space-y-4">
          {orderedData.map((el, idx) => (
            <Iteam key={idx} estate={el} />
          ))}
        </div>
      ) : (
        <h1 className="text-center text-lg min-h-56 flex items-center justify-center">
          Your wishlist is empty
        </h1>
      )}
    </div>
  );
};
