import React from "react";
import {
  Users,
  FileText,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  MoreHorizontal,
} from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="bg-black min-h-screen pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header and Stats */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-neutral-400">
              Overview of loan applications and user stats.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="btn-secondary text-sm">Download Report</button>
            <button className="btn-primary text-sm flex items-center gap-2">
              <Filter size={16} /> Filter
            </button>
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnalyticsCard
            label="Total Users"
            value="2,543"
            trend="+125 this week"
            icon={<Users size={20} className="text-blue-400" />}
          />
          <AnalyticsCard
            label="Pending Loans"
            value="45"
            trend="12 urgent"
            icon={<FileText size={20} className="text-yellow-400" />}
          />
          <AnalyticsCard
            label="Approved Loans"
            value="₹45 Cr"
            trend="Disbursed"
            icon={<CheckCircle size={20} className="text-green-400" />}
          />
        </div>

        {/* Loan Requests Table */}
        <div className="glass-panel rounded-xl overflow-hidden">
          <div className="p-6 border-b border-white/10 flex flex-col md:flex-row justify-between gap-4">
            <h3 className="text-lg font-semibold">Recent Loan Requests</h3>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                size={16}
              />
              <input
                type="text"
                placeholder="Search users..."
                className="glass-input pl-10 pr-4 py-2 text-sm rounded-lg w-full md:w-64"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-neutral-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium">Applicant</th>
                  <th className="px-6 py-4 font-medium">Loan Type</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Risk Score</th>
                  <th className="px-6 py-4 font-medium text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <ApplicationRow
                  name="Sarah Johnson"
                  email="sarah.j@example.com"
                  type="Business"
                  amount="₹1.5 Cr"
                  risk={780}
                  riskLabel="Low"
                />
                <ApplicationRow
                  name="Michael Chen"
                  email="m.chen88@example.com"
                  type="Personal"
                  amount="₹5,00,000"
                  risk={640}
                  riskLabel="Medium"
                />
                <ApplicationRow
                  name="David Smith"
                  email="dsmith@example.com"
                  type="Home"
                  amount="₹45,00,000"
                  risk={450}
                  riskLabel="High"
                />
                <ApplicationRow
                  name="Emma Wilson"
                  email="emma.w@example.com"
                  type="Education"
                  amount="₹12,00,000"
                  risk={820}
                  riskLabel="Low"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalyticsCard = ({ label, value, trend, icon }) => (
  <div className="glass-panel p-6 rounded-xl">
    <div className="flex justify-between items-start mb-2">
      <span className="text-neutral-400 text-sm font-medium">{label}</span>
      <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
    </div>
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-xs text-neutral-500">{trend}</div>
  </div>
);

const ApplicationRow = ({ name, email, type, amount, risk, riskLabel }) => {
  // Risk color logic
  const riskColor =
    risk >= 700
      ? "text-green-400"
      : risk >= 600
        ? "text-yellow-400"
        : "text-red-400";
  const riskBg =
    risk >= 700
      ? "bg-green-400/10"
      : risk >= 600
        ? "bg-yellow-400/10"
        : "bg-red-400/10";

  return (
    <tr className="hover:bg-white/5 transition-colors group">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">
            {name.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-medium text-white">{name}</div>
            <div className="text-xs text-neutral-500">{email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-neutral-400">{type}</td>
      <td className="px-6 py-4 text-sm font-medium text-white">{amount}</td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${riskColor} ${riskBg}`}
        >
          {risk} • {riskLabel}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-center gap-2">
          <button
            className="p-2 rounded-lg hover:bg-green-500/20 text-neutral-400 hover:text-green-400 transition-colors"
            title="Approve"
          >
            <CheckCircle size={18} />
          </button>
          <button
            className="p-2 rounded-lg hover:bg-red-500/20 text-neutral-400 hover:text-red-400 transition-colors"
            title="Reject"
          >
            <XCircle size={18} />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AdminDashboard;
