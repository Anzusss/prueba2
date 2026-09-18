// src/components/dashboard/MetricCard.jsx
import { useTheme } from '@/components/contexts/ThemeContext';

export function MetricCard({ label, value, subtext, color = "sky" }) {
    const { theme } = useTheme();
    return (
        <div className={`p-4 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
            <p className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{label}</p>
            <h3 className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{value}</h3>
            {subtext && <p className={`text-[11px] ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-0.5`}>{subtext}</p>}
        </div>
    );
}