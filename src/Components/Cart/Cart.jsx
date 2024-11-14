import React, { useContext, useEffect, useState } from 'react';
import { CardContext } from '../Root/Root';
import { VscError } from "react-icons/vsc";
import { CiFilter } from "react-icons/ci";
import right from '../../assets/Group.png'
import { NavLink } from 'react-router-dom';


const Cart = () => {
    const [card, setCard] = useContext(CardContext);

    const removeFromCart = (product_id) => {
        setCard(prevCard => prevCard.filter(deletedCard => deletedCard.product_id !== product_id));
    };

    const [total, setTotal] = useState(0);

    useEffect(() => {
        {
            let totalPrice = 0;
            card.forEach(singleCard => {
                totalPrice += singleCard.price;
            });
            setTotal(totalPrice);
        }
    }, [card])

    const sortCardsByPrice = () => {
        const sortedCards = [...card].sort((a, b) => b.price - a.price);
        setCard(sortedCards);
    };

    // ---------------------------------------------------------
    const handlePurchase = (amount) => {
        document.getElementById('my_modal_5').showModal();
    }
    const handleChange = () => {
        setCard([]);
        setTotal(0);
    }

    return (
        <div className='container mx-auto'>

            <div className='text-2xl font-bold my-8 flex justify-between'>
                <h2>Cart</h2>
                <div className='flex gap-6 items-center'>
                    <p>Total cost: $ {total}</p>
                    <button
                        onClick={sortCardsByPrice}
                        className='btn btn-outline text-[#9538E2]'>
                        Sort by Price
                        <CiFilter className='text-xl' />
                    </button>
                    {/* ----------------------------------------------- */}
                    <button
                        onClick={() => handlePurchase(total)}
                        className='btn bg-[#9538E2] text-white'
                    >Purchase</button>
                </div>
            </div>

            {card.length === 0 ? (
                <p className='text-xl'>Your cart is empty.</p>
            ) : (
                card.map((cartItem, index) => (
                    <div key={index} className="card lg:card-side bg-base-100 shadow-xl my-6 p-6">
                        <figure className='w-1/5 h-52'>
                            <img
                                src={cartItem.product_image}
                                alt={cartItem.product_title}
                            />
                        </figure>
                        <div className="card-body space-y-3">
                            <h2 className="card-title text-2xl font-semibold">{cartItem.product_title}</h2>
                            <button
                                className='text-red-400 absolute right-8 text-2xl'
                                onClick={() => removeFromCart(cartItem.product_id)}
                            ><VscError /></button>
                            <p className='opacity-50 text-lg'>{cartItem.description}</p>
                            <p className='text-xl font-semibold opacity-80'>Price: ${cartItem.price}</p>
                        </div>
                    </div>
                ))
            )}
            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box text-center mx-6 space-y-3">
                        <img className='mx-auto' src={right} alt="" />
                        <h3 className="font-bold text-2xl">Payment Successfully</h3>
                        <hr />
                        <p className="py-4 opacity-50 font-medium">Thanks for purchasing. <br />
                            Total: $ {total}</p>
                        {/* <div className="modal-action">
                            <form method="w-full">
                                <button className="btn">Close</button>
                            </form>
                        </div> */}
                        <div className='bg-[#11000008] border rounded-3xl py-2'>
                            <NavLink onClick={handleChange} to='/' className=''>Close</NavLink>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Cart;
