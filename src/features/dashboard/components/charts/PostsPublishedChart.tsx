import DashboardChartCard from "../DashboardChartCard"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const postsData = [
  { month: "Jan", posts: 24 },
  { month: "Feb", posts: 32 },
  { month: "Mar", posts: 28 },
  { month: "Apr", posts: 41 },
  { month: "May", posts: 35 },
  { month: "Jun", posts: 48 },
]

export default function PostsPublishedChart() {
  return (
    <DashboardChartCard
      title="Posts Published"
      description="Monthly published posts"
    >
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
    </DashboardChartCard>
  )
}