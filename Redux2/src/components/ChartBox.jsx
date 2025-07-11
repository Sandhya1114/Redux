// src/components/ChartBox.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const COLORS = ['#8cb8e0ff', '#b6d97aff', '#7ad3ecff', '#ec6d9eff'];

const ChartBox = () => {
  const { salesData, trafficData } = useSelector((state) => state.charts);

  return (
    <div className="chart-container">
      <div className="cards">
       

        <div className="chart-item">
          <h4>Visits & Sales</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="visits" fill="#eaf67eff" />
              <Bar dataKey="sales" fill="#131127ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-item">
        <h4>Traffic Sources</h4>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={trafficData} dataKey="value" nameKey="name" outerRadius={80} label>
              {trafficData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartBox;
