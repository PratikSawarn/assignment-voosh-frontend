import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../services/clients.js";

const Dashboard = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetchData("GET", "/get-orders");
      setOrders(data.data);
      console.log(data);
    })();
  }, []);

  return (
    <div className="text-white p-10">
      <div className="w-full py-5">
        <Link
          to={"/add-order"}
          className="text-white bg-sky-600 py-2 px-3 rounded-md"
        >
          Add Orded
        </Link>
      </div>

      <div className="flex flex-wrap gap-5">
        {orders?.map((element) => {
          return (
            <>
              <Link to={`/order/${element._id}`}>
                <div className="w-max p-10 rounded-xl my-auto bg-slate-700 text-left">
                  <h1 className="text-5xl mb-5">Total</h1>
                  <h2 className="text-xl">
                    Order Prise : {element?.sub_total}
                  </h2>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
