import React from "react";

const LoanCard = ({ label, value, icon, subtext, trend }) => {
  return (
    <div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="text-neutral-400 text-sm font-medium tracking-wide">
          {label}
        </div>
        {icon && (
          <div className="p-2 bg-white/5 rounded-lg text-white border border-white/5">
            {icon}
          </div>
        )}
      </div>
      <div className="text-3xl font-bold mb-2 text-white tracking-tight">
        {value}
      </div>
      {subtext && (
        <div className="text-xs text-neutral-500 font-medium">{subtext}</div>
      )}
      {trend && (
        <div className="text-xs text-green-400 mt-2 flex items-center gap-1 font-medium bg-green-500/10 inline-block px-2 py-1 rounded">
          {trend} this month
        </div>
      )}
    </div>
  );
};

export default LoanCard;
