'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from 'recharts';

export function LinkReferrerStats() {
  // Referrer data
  const data = [
    { name: 'Direct', value: 35, color: 'hsl(var(--chart-2))' },
    { name: 'Google', value: 28, color: 'hsl(var(--chart-1))' },
    { name: 'Twitter', value: 22, color: 'hsl(var(--chart-3))' },
    { name: 'Other', value: 15, color: 'hsl(var(--chart-4))' },
  ];

  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, name } = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return percent > 0.1 ? (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <Card className="w-full h-[350px]">
      <CardHeader>
        <CardTitle>Traffic Sources</CardTitle>
        <CardDescription>Clicks by referrer</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value} clicks`, 'Clicks']}
                contentStyle={{
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--background)',
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                iconSize={10}
                layout="horizontal"
                formatter={(value) => <span className="text-xs">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}