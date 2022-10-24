import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Topic from './Topic';
const Home = () => {
    const topics = useLoaderData();
    console.log(topics.data);


    return (
        <div>
            <div className=' h-100 '  style={{
                backgroundImage: "url(" + "https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=1380&t=st=1666564924~exp=1666565524~hmac=de21c6390042296ce985e3100a9d29921f381747aed7a58b9871cd4f1ed3134a" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} >
               <div className='p-40'>
               <h3 className='mb-10 text-slate-700 font-bold text-5xl'>Learn Web Programming easily...</h3>
                <p className='pb-30 text-slate-800 font-semibold text-xl'>Start your learn-and-earn journey with Meta.Meta teaches you how to write smart contracts. There is a global shortage of Web3 coders. Get paid to learn how to code on blockchain. World-Class Education. Decentralized Application. Experienced Mentors.</p>
               </div>
            </div>

            {
                topics.data.map(topic =><Topic
                    key={topic.id}
                    topic={topic}

                ></Topic>)
            }

        </div >
    );
};

export default Home;