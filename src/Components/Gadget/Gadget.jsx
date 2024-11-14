import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { product_id, product_image, product_title, price } = gadget;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-64">
                <img
                    src={product_image}
                    alt=""
                    className="rounded-xl object-cover" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title font-bold text-2xl">{product_title}</h2>
                <p className='opacity-50 text-xl font-medium'>Price: $ {price}</p>
                <div className="card-actions">
                    <Link to={`/gadget/${product_id}`} className="btn btn-outline btn-primary rounded-3xl font-semibold text-lg">View Details</Link >
                </div>
            </div>
        </div>
    );
};

export default Gadget;