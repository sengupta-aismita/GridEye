import { useEffect, useState } from "react";
import {
  Zap,
  Radio,
  UserCircle,
  Clock,
} from "lucide-react";

export default function Navbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="bg-violet-600 p-3 rounded-2xl">
            <Zap
              size={24}
              className="text-white"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              GridEye
            </h1>

            <p className="text-sm text-slate-500">
              Smart Electricity Theft Detection
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="hidden md:flex items-center gap-6">

         

          <div className="flex items-center gap-2 text-slate-600">
            <Clock size={16} />

            <span className="font-medium">
              {time.toLocaleTimeString()}
            </span>

            
  <span className="text-xs text-slate-500">
    {time.toLocaleDateString()}
  </span>
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
            <Radio
              size={16}
              className="text-green-600"
            />

            <span className="text-green-700 font-medium text-sm">
              Live Monitoring
            </span>
          </div>

          <UserCircle
            size={34}
            className="text-slate-500"
          />

          <div>
            <p className="font-medium text-slate-700">
              Welcome
            </p>

            <p className="text-xs text-slate-500">
              User
            </p>
          </div>

        </div>
      </div>
    </nav>
  );
}