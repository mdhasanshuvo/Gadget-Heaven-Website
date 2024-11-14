import React, { useContext } from 'react';
import { CardContext, WishContext } from '../Root/Root';
import { VscError } from "react-icons/vsc";


const WishList = () => {

    const [card, setCard] = useContext(CardContext);

    const [wish, setWish] = useContext(WishContext);

    const removeFromWish = (product_id) => {
        setWish(prevWish => prevWish.filter(deletedWish => deletedWish.product_id !== product_id));
    };

    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-bold my-8'>WishList</h2>

            {wish.length === 0 ? (
                <p className='text-xl'>Your wish List is empty.</p>
            ) : (
                wish.map((wishItem, index) => (
                    <div key={index} className="card lg:card-side bg-base-100 shadow-xl my-6 p-6 py-0">
                        <figure className='w-1/5 h-52'>
                            <img
                                src={wishItem.product_image}
                                alt={wishItem.product_title}
                            />
                        </figure>
                        <div className="card-body space-y-2">
                            <h2 className="card-title text-2xl font-semibold">{wishItem.product_title}</h2>
                            <button
                                onClick={() => removeFromWish(wishItem.product_id)}
                                className='text-red-400 absolute right-8 text-2xl'
                            ><VscError /></button>
                            <p className='opacity-50 text-lg'>{wishItem.description}</p>
                            <p className='text-xl font-semibold opacity-80'>Price: ${wishItem.price}</p>
                            <button
                                onClick={() => {
                                    setCard([...card, wishItem]);
                                    removeFromWish(wishItem.product_id);
                                }}
                                className='btn bg-[#9538E2] text-white rounded-2xl w-fit'
                            >Add to Card</button>
                        </div>
                    </div>
                )))}
        </div>
    );
};

export default WishList;
