import {GiRoundStar} from "react-icons/gi";
import {BiHeart} from "react-icons/bi";
import {Link} from "react-router-dom";

const ProductCard = () => {

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl mb-6 lg:m-4 transition-transform hover:scale-[1.02] hover:shadow-lg">
            <div
                className='flex items-center justify-center py-4 bg-black/[0.075] rounded-t-2xl xs:w-1/2 w-full sm:w-full'>
                <figure>
                    <img
                        src="https://eyesome.netlify.app/static/media/sports1.f986df729a29a685f835.png"
                        alt="Shoes"
                        className='w-full object-cover xs:object-contain sm:object-cover h-36'
                    />
                </figure>
            </div>
            <div className="card-body">
                <div className=" flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-xl font-medium mb-2">Ardor Avaitor</span>
                        <span className="flex items-center gap-1.5">
                            <span>4.8</span>
                            <GiRoundStar className=" text-yellow-400 mb-1"/>
                            <span className="text-xs text-gray-400">Rating</span>
                        </span>
                    </div>

                    <div className="flex flex-col items-end">
                        <span className="text-xl">Rs. 5000</span>
                        <span className="text-lg text-gray-600 line-through">
                            6500
                        </span>
                    </div>
                </div>
                <div className="card-actions justify-between items-center mt-4">
                    <Link to='/product/id' className="btn btn-primary btn-outline">Add to Cart</Link>
                    <div className='btn btn-ghost btn-circle cursor-pointer'>
                        <BiHeart size={28} className='text-primary'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
