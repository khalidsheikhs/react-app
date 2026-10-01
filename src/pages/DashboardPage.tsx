import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const userData = [
  { month: "Jan", users: 1200 },
  { month: "Feb", users: 1800 },
  { month: "Mar", users: 2400 },
  { month: "Apr", users: 3100 },
  { month: "May", users: 3800 },
  { month: "Jun", users: 4500 },
];

const postsData = [
  { month: "Jan", posts: 24 },
  { month: "Feb", posts: 32 },
  { month: "Mar", posts: 28 },
  { month: "Apr", posts: 41 },
  { month: "May", posts: 35 },
  { month: "Jun", posts: 48 },
];

const trafficData = [
  { name: "Google", value: 45 },
  { name: "Direct", value: 25 },
  { name: "Social", value: 20 },
  { name: "Referral", value: 10 },
];

const pageViewsData = [
  { month: "Jan", views: 18000 },
  { month: "Feb", views: 22000 },
  { month: "Mar", views: 26000 },
  { month: "Apr", views: 31000 },
  { month: "May", views: 29000 },
  { month: "Jun", views: 38000 },
];

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#9333ea"];

export default function Dashboard() {
  return (
    <>
      <h2 className="mb-6 text-2xl font-semibold">Dashboard</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 min-w-0">

        {/* User Growth */}
        <div className="rounded-lg border bg-white p-5 min-w-0">
          <h3 className="text-lg font-semibold">User Growth</h3>
          <p className="mb-5 text-sm text-gray-500">
            Total registered users
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="users"
                stroke="#2563eb"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Posts Published */}
        <div className="rounded-lg border bg-white p-5 min-w-0">
          <h3 className="text-lg font-semibold">Posts Published</h3>
          <p className="mb-5 text-sm text-gray-500">
            Monthly published posts
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={postsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="posts"
                fill="#2563eb"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Sources */}
        <div className="rounded-lg border bg-white p-5 min-w-0">
          <h3 className="text-lg font-semibold">Traffic Sources</h3>
          <p className="mb-5 text-sm text-gray-500">
            Where your visitors come from
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={trafficData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {trafficData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Page Views */}
        <div className="rounded-lg border bg-white p-5 min-w-0">
          <h3 className="text-lg font-semibold">Page Views</h3>
          <p className="mb-5 text-sm text-gray-500">
            Monthly website page views
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={pageViewsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="views"
                stroke="#2563eb"
                fill="#2563eb"
                fillOpacity={0.15}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    </>
  );
}