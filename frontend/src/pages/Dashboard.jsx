import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import VoltageChart from "../components/VoltageChart";
import { AlertTriangle,Zap,Activity,Battery } from "lucide-react";
import {
  getLatestSensorData,
  getSensorHistory,
} from "../services/sensor.service.js";

export default function Dashboard() {
  const [sensorData, setSensorData] = useState(null);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latest = await getLatestSensorData();

        const history = await getSensorHistory();

        setSensorData(latest.data);

        setChartData(
          history.data.reverse().map((item) => ({
            time: new Date(item.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            voltage: item.voltage,
          })),
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!sensorData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading sensor data...
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-4 gap-5 mb-6">
          <StatCard title="Voltage" value={`${sensorData?.voltage ?? "--"}V`}  color="bg-violet-500" icon={Zap}/>

          <StatCard title="Current" value={`${sensorData?.current ?? "--"}A`} color="bg-blue-500" icon={Activity} />

          <StatCard title="Power" value={`${sensorData?.power ?? "--"}W`} color="bg-green-500" icon={Battery}/>

          <StatCard title="Risk Score" value="12%"  color="bg-red-500" icon={AlertTriangle}/>
        </div>

        <div
          className="
      h-[450px]
      rounded-3xl
      bg-white
      shadow-md
      border
      border-slate-100
      p-6
      mb-6
      "
        >
          <h2 className="text-xl font-semibold mb-4">
            Live Voltage Monitoring
          </h2>
          

          <div className="h-[400px]">
            <VoltageChart data={chartData} />
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
          <AlertTriangle className="text-red-500" />

          <div>
            <p className="font-medium">Voltage anomaly detected</p>

            <p className="text-sm text-slate-500">10:42 AM</p>
          </div>
        </div>
      </main>
    </div>
  );
}
