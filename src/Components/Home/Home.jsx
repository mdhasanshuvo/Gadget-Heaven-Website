import { Link, Outlet } from 'react-router-dom';
import banner from '../../assets/banner.jpg';
import CategoriesSidebar from '../CategoriesSidebar/CategoriesSidebar';
import {Helmet} from "react-helmet";

const Home = (

) => {
    return (
        <div className='bg-[#F6F6F6]'>
            {/* banner section  */}
            <Helmet>
                <title>Gadget | Gadget Heaven</title>
            </Helmet>
            <div className='container mx-auto'>
                <div className="hero rounded-2xl bg-[#9538E2] text-white pt-20 pb-44">
                    <div className="hero-content text-center">
                        <div className="">
                            <h1 className="text-5xl font-bold max-w-4xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                            <p className="py-6 max-w-3xl text-center mx-auto ">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <Link to='/dashboard' className="btn btn-white rounded-3xl text-[#9538E2] font-bold text-lg">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='w-2/3 border rounded-2xl p-5 pb-0 mx-auto relative bottom-40'>
                    <img className="rounded-2xl object-cover" src={banner} alt="there is an image" />
                </div>
            </div>

            {/* Categories and card section */}
            <h2 className='container mx-auto text-center font-bold text-4xl pb-16 '>Explore Cutting-Edge Gadgets</h2>
            <div className='flex gap-6 container mx-auto '>
                <CategoriesSidebar></CategoriesSidebar>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Home;