import {GiRoundStar} from "react-icons/gi";
import {BiHeart} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useApp} from "../context/AppContext.tsx";
import {FaHeart} from "react-icons/fa";

interface ProductCardProps {
    data: Product
}

const ProductCard = ({ data }: ProductCardProps) => {
    const {user, isAuthenticated, addCartItem, addWishlistItem, deleteCartItem, deleteWishlistItem, isInCart, isInWishlist} = useApp();
    const [isCartItem, setIsCartItem] = useState(false);
    const [isWishlistItem, setIsWishlistItem] = useState(false);

    useEffect(() => {
        setIsCartItem(isInCart(data._id))
        setIsWishlistItem(isInWishlist(data._id))
    }, [data._id, user]);

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl mb-6 lg:m-4 transition-transform hover:scale-[1.02] hover:shadow-lg">
            <Link to={`/product/${data.name.toLowerCase().replace(/\s+/g, '-')}&${data._id}`}
                className='flex items-center justify-center py-4 bg-black/[0.075] rounded-t-2xl xs:w-1/2 w-full sm:w-full'>
                <figure>
                    <img
                        src={data.image}
                        alt="Shoes"
                        className='w-full object-cover xs:object-contain sm:object-cover h-36'
                    />
                </figure>
            </Link>
            <div className="card-body">
                <Link to={`/product/${data.name.toLowerCase().replace(/\s+/g, '-')}&${data._id}`} className=" flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-xl font-medium mb-2">{data.name}</span>
                        <span className="flex items-center gap-1.5">
                            <span>{data.rating}</span>
                            <GiRoundStar className=" text-yellow-400 mb-1"/>
                            <span className="text-xs text-gray-400">Rating</span>
                        </span>
                    </div>

                    <div className="flex flex-col items-end">
                        <span className="text-xl">Rs. {data.newPrice}</span>
                        <span className="text-lg text-gray-600 line-through">
                            Rs. {data.price}
                        </span>
                    </div>
                </Link>
                {isAuthenticated ?
                    <div className="card-actions justify-between items-center mt-4">
                        {!isCartItem ?
                            <div className="btn btn-primary btn-outline" onClick={() => addCartItem(data._id)}>
                                Add to Cart
                            </div>
                            :
                            <div className="btn btn-primary btn-outline" onClick={() => deleteCartItem(data._id)}>
                                Remove from Cart
                            </div>
                        }
                        {!isWishlistItem ?
                            <div className='btn btn-ghost btn-circle cursor-pointer'
                                 onClick={() => addWishlistItem(data._id)}>
                                <BiHeart size={28} className='text-primary'/>
                            </div>

                            :

                            <div className='btn btn-ghost btn-circle cursor-pointer'
                                 onClick={() => deleteWishlistItem(data._id)}>
                                <FaHeart size={28} className='text-primary'/>
                            </div>
                        }
                    </div>

                    :

                    <></>
                }
            </div>
        </div>
    )
}

export default ProductCard;
