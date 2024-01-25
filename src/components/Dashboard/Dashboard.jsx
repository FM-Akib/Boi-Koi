// import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = ({data}) => {

    return (
        <div className="flex items-center justify-center mt-12">
           
        <LineChart
          width={1200}
          height={300}
          data={data}
        >
          {/* <CartesianGrid strokeDasharray="4 4" /> */}
          
          <Tooltip />
          <Legend />
          <Line dataKey="ratings" stroke="#8884d8"  />
          <XAxis dataKey="bookName" />
          <YAxis dataKey="ratings" />
        </LineChart>
     
        </div>
    );
};

export default Dashboard;