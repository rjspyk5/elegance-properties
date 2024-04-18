import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { getData, removeData } from "../../assets/Localstorage";
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
  }, []);
  const handleRemoveData = (id) => {
    removeData(user.email, id);
    const filteredData = orderedData.filter((el) => el.id !== id);
    setorderedData(filteredData);
  };
  return (
    <div>
      <Helmet>
        <title>Elegance | Wishlist </title>
      </Helmet>
      <h1 className="text-center font-bold text-3xl my-10">WishList</h1>
      {orderedData.length === 0 ? (
        <h1 className="text-center text-lg min-h-56 flex items-center justify-center">
          Your wishlist is empty
        </h1>
      ) : (
        <div className=" space-y-4">
          {orderedData.map((el, idx) => (
            <Iteam handleRemoveData={handleRemoveData} key={idx} estate={el} />
          ))}
        </div>
      )}
    </div>
  );
};
