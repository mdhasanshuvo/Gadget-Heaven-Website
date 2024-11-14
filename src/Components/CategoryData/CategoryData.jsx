import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';

const CategoryData = () => {
    // const {category} = useParams();
    // const [gadgets, setGadgets] = useState([]);

    const gadgets = useLoaderData();

    // useEffect(() => {
    //     fetch('/gadget.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const items = data.filter(item => item.category === category);
    //             console.log(items);
    //             setGadgets(items);
    //         })
    // }, [])
    
    if(gadgets.length==0){
        return (
            <h2 className='text-4xl font-bold text-[#9538E2]'>Not Available!!!</h2>
        )
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                gadgets.map(gadget=><Gadget gadget={gadget}></Gadget>)
            }
        </div>
    );
};

export default CategoryData;