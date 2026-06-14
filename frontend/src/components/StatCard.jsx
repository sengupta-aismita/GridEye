export default function StatCard({
  title,
  value,
  color,
  icon: Icon,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
      <div className={`h-2 ${color}`} />

      <div className="px-6 py-3.5">
        <div className="flex justify-between items-start">

          <div>
            <p className="text-slate-500 text-lg">
              {title}
            </p>

            <h2 className="text-5xl font-bold mt-2">
              {value}
            </h2>
          </div>

          <Icon
            size={34}
            className="text-slate-300"
          />

        </div>
      </div>
    </div>
  );
}