import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import cart from '../../assets/Frame.svg'
import love from '../../assets/Love.svg'
import { CardContext, WishContext } from '../Root/Root';
import { toast } from 'react-toastify';


const ProductDetails = () => {
    const { gadget_id } = useParams();
    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id == gadget_id);

    const { product_id, product_image, product_title, price, description, specification, availability, rating } = gadget;

    const [wish, setWish] = useContext(WishContext);

    const [card, setCard] = useContext(CardContext);

    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <div className=''>
            <div className='bg-[#9538E2] pt-28 pb-52 text-white text-center'>
                <h2 className='text-3xl font-bold
            '>Product Details</h2>
                <p className=''>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            {/* Card */}
            <div className="card card-side bg-base-100 shadow-xl w-3/4 border rounded-2xl p-10 py-0 mx-auto relative bottom-40 ">
                <figure className='w-[40%]'>
                    <img
                        src={product_image}
                        alt="Movie" />
                </figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title text-3xl font-semibold">{product_title}</h2>
                    <h4 className='text-xl font-semibold'>Price: $ {price}</h4>
                    {availability ? <button className="btn btn-outline btn-success w-32 bg-[#309c081a] rounded-3xl">In Stock</button> : <button className="btn btn-outline btn-error w-32 bg-red-50 rounded-3xl ">Not Available</button>}
                    <p className='opacity-60 text-lg'>{description}</p>
                    <h4 className='text-lg font-bold'>Specification</h4>
                    <div className='space-y-2'>
                        {
                            specification.map(specification => <p>{specification}</p>
                            )
                        }
                    </div>
                    <h3 className='text-lg font-bold'>Rating ⭐ </h3>
                    <div className="rating items-center">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <button className="btn btn-sm ml-2">{rating}</button>
                    </div>
                    <div className="card-actions text-white items-center">
                        {/* -------------------------------------------- */}
                        <button onClick={() => {
                            toast.success('Added to the card');
                            setCard([...card, gadget])
                        }} className="btn bg-[#9538E2] rounded-3xl text-white">Add To Card
                            <img src={cart} alt="" />
                        </button>
                        <button onClick={() => {
                            toast('Added to the Wish List');
                            setWish([...wish, gadget]);
                            setIsDisabled(true);
                        }} className='border rounded-full p-2' disabled={isDisabled} ><img src={love} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;