import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BsBookmarkHeart} from "react-icons/bs";

const CartItemCard = () => {

    return (
        <div className='w-full p-6'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-x-6'>
                    <div className='bg-black/[0.075] rounded-md flex items-center h-16 w-16 md:h-28 md:w-28'>
                        <img src='https://eyesome.netlify.app/static/media/sports1.f986df729a29a685f835.png'
                             alt="image" className='object-fit w-full'/>
                    </div>
                    <div>
                        <h3 className='text-xl py-3 font-semibold'>Hyperclax Active</h3>
                        <div className='flex gap-2 items-center'>
                            <span className='text-gray-700'>Quantity: </span>
                            <button
                                className='bg-neutral p-1 text-gray-100 rounded-md  text-xs disabled:cursor-not-allowed'>
                                <AiOutlineMinus/>
                            </button>
                            <span
                                className='h-full w-10 bg-black/[0.075]  rounded-sm flex items-center justify-center'>
                        1
                    </span>
                            <button
                                className='bg-neutral p-1 text-gray-100 rounded-md text-xs disabled:cursor-not-allowed'>
                                <AiOutlinePlus/>
                            </button>
                        </div>
                        <div className='flex gap-1 sm:gap-3'>
                            <button
                                className='btn-rounded-secondary  text-xs sm:text-sm mt-2 max-w-xs disabled:cursor-not-allowed'>
                                Remove from Bag
                            </button>
                            <button className='disabled:cursor-not-allowed'>
                                <BsBookmarkHeart
                                    className='text-xl hover:text-rose-600 hover:shadow-md transition'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span>Rs. 5000</span>
                    <span className="text-xs line-through text-gray-600">
                        Rs. 6500
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard;
