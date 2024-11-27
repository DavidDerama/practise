"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "Rent", amount: 186 },
  { month: "Groceries", amount: 305 },
  { month: "Restaurants", amount: 237 },
  { month: "Transport", amount: 73 },
  { month: "Internet", amount: 209 },
];
const chartConfig = {
  amount: {
    label: "Amount",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export default function Spendings() {
  return (
    <div className="flex flex-col gap-4 sm:w-1/2 w-full lg">
      <h2 className="text-2xl font-bold">Spendings</h2>
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                right: 16,
              }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="month"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                hide
              />
              <XAxis dataKey="amount" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar
                dataKey="amount"
                layout="vertical"
                fill="#FFD18C"
                radius={10}
              >
                <LabelList
                  dataKey="month"
                  position="insideLeft"
                  offset={10}
                  className="fill-[#1c1c1c] font-bold"
                  fontSize={14}
                />
                <LabelList
                  dataKey="amount"
                  position="right"
                  offset={8}
                  className="fill-foreground"
                  fontSize={12}
                  formatter={(value) => `$${value}`}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
