import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function VoltageChart({ data }) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <LineChart
  data={data}
  margin={{
    top: 10,
    right: 30,
    left: 10,
    bottom: 10,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />

  <XAxis
    dataKey="time"
    padding={{
      left: 20,
      right: 20,
    }}
  />

  <YAxis
    domain={[
      "dataMin - 2",
      "dataMax + 2",
    ]}
    tickFormatter={(value) => `${value}V`}
  />

  <Tooltip />

  <Line
    type="monotone"
    dataKey="voltage"
    stroke="#7c3aed"
    strokeWidth={3}
    dot={{ r: 4 }}
    activeDot={{ r: 6 }}
  />
</LineChart>
    </ResponsiveContainer>
  );
}