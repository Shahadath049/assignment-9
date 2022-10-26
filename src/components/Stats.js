import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stats = () => {
    const stat = useLoaderData();
    
    const {data} = stat;
    


    const datas = [

        { name:`${data[0].name}`, questions: `${data[0].total}` },
        { name:`${data[1].name}`, questions: `${data[1].total}`},
        { name:`${data[2].name}`, questions: `${data[2].total}` },
        { name:`${data[3].name}`, questions: `${data[3].total}` },
        
    ]
    return (
        <div className=' mt-48 grid sm:grid-cols-2 grid-cols-1 px-20' >
            <div>
                <h1 className=' text-center text-5xl font-bold text-gray-500'> This stats shows how many questions you have solved.</h1>
            </div>

            <div className=''>
            <ResponsiveContainer width="100%"  aspect={2}>
                <BarChart
                    width={500}
                    height={300}
                    data={datas}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="questions" fill="#8884d8" />
                    
                </BarChart>
            </ResponsiveContainer>
            </div>
           
        </div>
    );
};

export default Stats;