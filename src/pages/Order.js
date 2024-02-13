import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchData } from "../services/clients";

function Order() {
  const { id } = useParams();
  const [details, setDetails] = useState();

  const func = async () => {
    const order = await fetchData("GET", `/get-order/${id}`);
    setDetails(order.data);
  };

  useEffect(() => {
    func();
  }, []);

  return (
    <div className="flex justify-center text-white h-screen w-full text-center">
      <div className="w-max p-10 rounded-xl my-auto bg-slate-700 text-left">
        <h1 className="text-5xl mb-5">Total</h1>
        <p>Phone : {details?._id}</p>
        <h2 className="text-xl">Order Prise : {details?.sub_total}</h2>
      </div>
    </div>
  );
}
export default Order;
