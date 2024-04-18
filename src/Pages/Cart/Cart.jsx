import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { getData } from "../../assets/Localstorage";
import { AuthContext } from "../../Provider/Provider";

export const Cart = () => {
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
  console.log(orderedData);
  return (
    <div>
      <Helmet>
        <title>Elegance | Cart</title>
      </Helmet>
      <h1 className="text-center font-bold text-3xl my-10">Order List</h1>
      {orderedData.length > 1 ? (
        <div className="bg-[#ffffff14] ">
          {" "}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orderedData.map((el) => (
                  <>
                    <tr>
                      <td>{el.estate_title}</td>
                      <td>{el.price}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-lg min-h-56 flex items-center justify-center">
          Your order list is empty
        </h1>
      )}
    </div>
  );
};
