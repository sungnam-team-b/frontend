import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "great1",
    great1: 100,
    great2: 80,
    great3: 70,
    great4: 55,
    great5: 30,
    great6: 15,
  },
];

const Chart2 = (props: any) => {
  props = props["nums2"];
  const nums = [
    {
      great1: 80,
      great2: 70,
      great3: 60,
    },
  ];

  return (
    <BarChart className="rotate-90 " width={80} height={140} data={nums}>
      <Bar dataKey="great1" fill="#57E625" />
      <Bar dataKey="great2" fill="#CF4B4B" />
      <Bar dataKey="great3" fill="#536CC8" />
    </BarChart>
  );
};

export default Chart2;
