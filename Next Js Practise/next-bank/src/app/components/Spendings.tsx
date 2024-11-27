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
  { category: "Rent", amount: 186 },
  { category: "Groceries", amount: 305 },
  { category: "Restaurants", amount: 237 },
  { category: "Transport", amount: 73 },
  { category: "Internet", amount: 209 },
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
                dataKey="category"
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
                  dataKey="category"
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
                  formatter={(value: unknown) => `$ ${value}`}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
