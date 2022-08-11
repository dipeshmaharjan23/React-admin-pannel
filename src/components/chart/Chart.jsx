import React from 'react'
import './chart.scss'
import {  XAxis, CartesianGrid, Tooltip, Area, AreaChart, ResponsiveContainer } from 'recharts';


const data = [
    { name: "January", Total: 100 },
    { name: "Febuary", Total: 1230 },
    { name: "March", Total: 1000 },
    { name: "April", Total: 1250 },
    { name: "May", Total: 900 },
    { name: "June", Total: 700 },
    { name: "July", Total: 80 },
    { name: "August", Total: 680 },
    { name: "Septmber", Total: 200 },
];
const Chart = () => {

    return (
        <div className="chart">
            <div className="title">Last Month Revenue</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke='gray' />
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart