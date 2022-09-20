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

const Chart = (props: any) => {
  props = props["nums2"];
  const keys = Object.keys(props);
  const nums = [
    {
      great1: props[keys[0]],
      great2: props[keys[1]],
      great3: props[keys[2]],
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

export default Chart;
