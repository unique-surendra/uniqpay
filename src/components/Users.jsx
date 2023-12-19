import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";

const Users = () => {
  const [chartOptions, setChartOptions] = useState({
    // Data: Data to be displayed in the chart
    data: [
      { month: "Jan", avgTemp: 2.3, iceCreamSales: 162000 },
      { month: "Mar", avgTemp: 6.3, iceCreamSales: 302000 },
      { month: "May", avgTemp: 16.2, iceCreamSales: 800000 },
      { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254000 },
      { month: "Sep", avgTemp: 14.5, iceCreamSales: 950000 },
      { month: "Nov", avgTemp: 8.9, iceCreamSales: 200000 },
    ],
    // Series: Defines which chart type and data to use
    series: [{ type: "bar", xKey: "month", yKey: "iceCreamSales" }],
  });

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://15.206.74.250:5000/admin/merchant/count"
      );
      const merchant = await data.json();
      setUser(merchant.data);
    };

    fetchData();
  }, []);

  return (
    <div className=" mt-6 p-10  h-[200vh] bg-gradient-to-r from-zinc-400 to-red-200 ">
      <h1>{user.merchantCount}</h1>

      <section className="m-auto lg:w-2/4 w-full">
        <AgChartsReact options={chartOptions} />
      </section>
    </div>
  );
};

export default Users;
