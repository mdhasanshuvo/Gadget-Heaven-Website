import React from 'react';
import {Helmet} from "react-helmet";

const QA = () => {
    return (
        <div>
            <Helmet>
                <title>Q&A | Gadget Heaven</title>
            </Helmet>
            <div className='bg-[#9538E2] py-20 text-white text-center space-y-4'>
                <h2 className='text-3xl font-bold'>Q&A</h2>
                <p className='w-3/6 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            {/* Q&A */}
            <div className='container mx-auto'>
                <h2 className='text-2xl font-bold my-8'>Frequently Asked Questions</h2>
            </div>
            <div className='container mx-auto space-y-6'>
                <div className="collapse collapse-arrow bg-base-100">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What types of gadgets can I find on GadgetHeaven?</div>
                    <div className="collapse-content">
                        <p>GadgetHeaven offers a variety of gadgets, including computers, smartphones, smartwatches and Accessories. Browse these categories easily using the sidebar on our homepage.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How does the Wishlist feature work?</div>
                    <div className="collapse-content">
                        <p>You can add items to your Wishlist by clicking the ♥ icon on the product’s detail page. This allows you to save items for future reference, and you can view and manage your Wishlist from the Dashboard.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How do I add items to my cart?
                    </div>
                    <div className="collapse-content">
                        <p>Simply click the "Add to Cart" button on the product details page. The item will appear in your cart, and the cart icon in the navbar will display the number of items added.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Is there a limit to the cart total?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, the cart has a total limit of $1000. If your cart reaches this amount, you’ll need to remove some items before adding more.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Can I sort items in my cart?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely! In the Cart tab on the Dashboard, you can use the "Sort by Price" option to arrange items from highest to lowest price.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QA;