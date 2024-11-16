import axios from "axios";
import dynamic from "next/dynamic";

import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { CircularLoading } from "../loading";
const DualAxes: any = dynamic(
  () => import("@ant-design/plots").then(({ DualAxes }) => DualAxes),
  {
    ssr: false,
  }
);

const DemoDualAxes = () => {


  const url = `/api/stats/order`;

  const { data, isLoading, error, mutate } = useSWR(url, fetcher);

  console.log("ORDERSTATUS-->",data );

  const Data = !isLoading && data?.map((item: any) => {
             return {
              time: item._id,
              value: item.total,
               type: "طلبات حسب التاريخ",
            };
           });




  const booksSellsPerDate = Data;
  const config = {
    data: [booksSellsPerDate, []],
    xField: "time",
    yField: ["value", "count"],
    geometryOptions: [
      {
        geometry: "line",
        seriesField: "type",
        lineStyle: {
          lineWidth: 3,
          lineDash: [5, 5],
        },
        smooth: true,
        color: ["#29221f"],
      },
    ],
  };
  if (isLoading) return <CircularLoading />;
  return <DualAxes {...config} />;
};

export default DemoDualAxes;





// --------------------


// import axios from "axios";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// const DualAxes: any = dynamic(
//   () => import("@ant-design/plots").then(({ DualAxes }) => DualAxes),
//   {
//     ssr: false,
//   }
// );
// const DemoDualAxes = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("/api/stats/order")
//       .then((res) => {
//         const { data } = res;
//         const booksSellsPerDate = data.map((item: any) => {
//           return {
//             time: item._id,
//             value: item.total,
//             type: "طلبات حسب التاريخ",
//           };
//         });
//         setData(booksSellsPerDate);
//       })
//       .catch((err) => {});
//   }, []);

//   const booksSellsPerDate = data;
//   const config = {
//     data: [booksSellsPerDate, []],
//     xField: "time",
//     yField: ["value", "count"],
//     geometryOptions: [
//       {
//         geometry: "line",
//         seriesField: "type",
//         lineStyle: {
//           lineWidth: 3,
//           lineDash: [5, 5],
//         },
//         smooth: true,
//         color: ["#29221f"],
//       },
//     ],
//   };
//   return <DualAxes {...config} />;
// };

// export default DemoDualAxes;