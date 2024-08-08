import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BiHeart} from "react-icons/bi";
import {FaRegTrashAlt} from "react-icons/fa";

const CartItemCard = () => {

    return (
        <div className='w-full p-6 shadow-xl rounded-3xl mb-4'>
            <div className='flex justify-between'>
                <div className='flex gap-x-6'>
                    <div className='bg-black/[0.075] rounded-md flex items-center h-16 w-16 md:h-28 md:w-28'>
                        <img src='https://eyesome.netlify.app/static/media/sports1.f986df729a29a685f835.png'
                             alt="image" className='object-fit w-full'/>
                    </div>
                    <div>
                        <h3 className='lg:text-xl py-3 font-semibold'>Hyperclax Active</h3>
                        <div>
                            <span className='text-gray-700 mb-6'>Quantity: </span>
                            <div className='flex my-3'>
                                <button
                                    className='btn btn-neutral btn-xs disabled:cursor-not-allowed'>
                                    <AiOutlineMinus/>
                                </button>
                                <span
                                    className='h-full w-10 bg-black/[0.075]  rounded-sm flex items-center justify-center'>
                                    1
                                </span>
                                <button
                                    className='btn btn-neutral btn-xs rounded-md text-xs disabled:cursor-not-allowed'>
                                    <AiOutlinePlus/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around flex-col">
                    <div className='flex sm:gap-3 mt-2 self-end'>
                        <button className='btn btn-ghost btn-circle cursor-pointer disabled:cursor-not-allowed'>
                            <BiHeart size={24} className='text-primary'/>
                        </button>
                        <button className='btn btn-ghost btn-circle cursor-pointer disabled:cursor-not-allowed'>
                            <FaRegTrashAlt size={20} className='text-primary'/>
                        </button>
                    </div>
                    <div className='self-end'>
                        <span className='text-lg md:text-2xl mr-2'>Rs.5000</span>
                        <span className='text-xs line-through text-gray-600 hidden md:inline'>Rs.6500</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard;
