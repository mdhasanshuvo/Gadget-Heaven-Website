import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {Helmet} from "react-helmet";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';
import Chart from '../Chart/Chart';


const Statistics = () => {
    const data = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <div className='bg-[#9538E2] py-20 text-white text-center space-y-4'>
                <h2 className='text-3xl font-bold'>Statistics</h2>
                <p className='w-3/6 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='container mx-auto'>
                <h2 className='text-2xl font-bold my-8'>Statistics</h2>
            </div>

            <Chart data={data}></Chart>
        </div>
    );
};

export default Statistics;