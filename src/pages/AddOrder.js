import React, { useState } from "react";
import { fetchData } from "../services/clients";

const AddOrder = () => {
  const [phone_number, setPhone_number] = useState("");
  const [sub_total, setSub_total] = useState("");
  const [alert, setAlert] = useState("hidden");

  const addItem = async () => {
    const data = await fetchData("POST", "/add-order", {
      phone_number,
      sub_total,
    });

    if (data) {
      console.log(data);
      setAlert("");
      setTimeout(() => {
        setAlert("hidden");
      }, 3000);
      console.log(alert);
    }
  };

  return (
    <div className=" flex flex-col w-full h-screen text-center justify-center bg-[#0F172A]">
      <div className={`${alert} bg-sky-700 justify-center`}>
        <h2 className="text-2xl font-bold">user created successfully</h2>
      </div>
      <div className="w-[50%] my-auto p-16 rounded-xl justify-center mx-auto">
        <div>
          <h1 className="text-2xl text-white font-bold mb-5">Add Order</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="tel"
            className="w-full py-2 px-3 rounded-md mb-2"
            placeholder="Phone"
            onChange={(e) => setPhone_number(e.target.value)}
            value={phone_number}
          />
          <input
            type="number"
            className="w-full py-2 px-3 rounded-md mb-5"
            placeholder="Sub-Total"
            onChange={(e) => setSub_total(e.target.value)}
            value={sub_total}
          />
          <button
            className="bg-sky-700 w-full py-2 px-3 rounded-md text-white texl-2xl"
            onClick={addItem}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddOrder;
