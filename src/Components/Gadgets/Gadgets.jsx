import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('gadget.json')
            .then(res => res.json())
            .then(data => {
                setGadgets(data);
                setFilteredGadgets(data);
            });
    }, []);

    const handleFilter = (e) => {
        e.preventDefault();
        const filtered = gadgets.filter(gadget =>
            gadget.product_title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredGadgets(filtered);
    };

    return (
        <div>
            <form onSubmit={handleFilter} className='flex gap-2 justify-end -mt-12 mb-2'>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder='Search' 
                    className='border rounded-xl p-2' 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input type="submit" value="Filter" className='border border-[#9538E2] p-1 px-2 rounded-lg'/>
            </form>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    filteredGadgets.map(gadget => <Gadget key={gadget.id} gadget={gadget} />)
                }
            </div>
        </div>
    );
};

export default Gadgets;
