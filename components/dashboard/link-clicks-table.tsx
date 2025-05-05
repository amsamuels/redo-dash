'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { formatDistance } from 'date-fns';

interface ClickData {
  id: string;
  timestamp: string;
  ip: string;
  location: string;
  device: string;
  browser: string;
  referrer: string;
}

export function LinkClicksTable() {
  // Generate fake data
  const generateClickData = (): ClickData[] => {
    const data: ClickData[] = [];
    const now = new Date();
    const devices = ['iPhone', 'Android', 'Desktop', 'iPad'];
    const browsers = ['Chrome', 'Safari', 'Firefox', 'Edge'];
    const referrers = ['Direct', 'Google', 'Twitter', 'Facebook', 'Email'];
    const locations = ['New York, US', 'London, UK', 'Tokyo, JP', 'Paris, FR', 'Sydney, AU'];
    
    for (let i = 0; i < 10; i++) {
      const date = new Date(now);
      date.setMinutes(date.getMinutes() - i * Math.floor(Math.random() * 60));
      
      data.push({
        id: i.toString(),
        timestamp: date.toISOString(),
        ip: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        location: locations[Math.floor(Math.random() * locations.length)],
        device: devices[Math.floor(Math.random() * devices.length)],
        browser: browsers[Math.floor(Math.random() * browsers.length)],
        referrer: referrers[Math.floor(Math.random() * referrers.length)],
      });
    }
    
    return data;
  };

  const [clickData] = useState<ClickData[]>(generateClickData());

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Clicks</CardTitle>
        <CardDescription>The most recent clicks on your link</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Browser</TableHead>
              <TableHead>Referrer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clickData.map((click) => (
              <TableRow key={click.id}>
                <TableCell>
                  {formatDistance(new Date(click.timestamp), new Date(), { addSuffix: true })}
                </TableCell>
                <TableCell>{click.location}</TableCell>
                <TableCell>{click.device}</TableCell>
                <TableCell>{click.browser}</TableCell>
                <TableCell>{click.referrer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 flex justify-center">
          <Button variant="outline">Load More</Button>
        </div>
      </CardContent>
    </Card>
  );
}