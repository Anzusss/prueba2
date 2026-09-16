// src/components/dashboard/MetricCard.jsx
export function MetricCard({ label, value, subtext, color = "sky" }) {
    return (
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-sm">
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{label}</p>
            <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
            {subtext && <p className="text-[11px] text-slate-500 mt-0.5">{subtext}</p>}
        </div>
    );
}