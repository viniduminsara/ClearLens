import {FaHeart, FaShoppingCart} from "react-icons/fa";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useToast} from "../context/ToastContext.tsx";
import {useApp} from "../context/AppContext.tsx";
import {productDetailsService} from "../api/apiServices.ts";
import {MdOutlineRemoveShoppingCart} from "react-icons/md";
import {IoMdHeartDislike} from "react-icons/io";

const ProductDetails = () => {
    const { productId } = useParams();
    const {user, isAuthenticated, addCartItem, addWishlistItem, deleteCartItem, deleteWishlistItem, isInCart, isInWishlist} = useApp();
    const {showToast} = useToast();
    const [productDetails, setProductDetails] = useState<Product>();
    const [isCartItem, setIsCartItem] = useState(false);
    const [isWishlistItem, setIsWishlistItem] = useState(false);

    useEffect(() => {
        setIsCartItem(isInCart(productId))
        setIsWishlistItem(isInWishlist(productId))
    }, [productId, user]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await productDetailsService(productId);
                if (response.ok){
                    const data = await response.json();
                    setProductDetails(data);
                }

            } catch (error) {
                if (error.response) {
                    showToast({type: 'error', message: error.response.data.message});
                }
            }
        }
        getProducts();
    }, []);

    return (
        <div className='px-6 pt-12 md:px-24'>
            <div className="md:min-h-[80vh] flex justify-center items-center pt-5 sm:pt-3 pb-2 relative">
                <main className="grid grid-rows-1 sm:grid-cols-2 gap-2 sm:gap-10 ">
                    <section className="relative p-7 bg-black/[0.075]  flex items-center justify-center rounded-lg">
                        <img
                            src={productDetails?.image}
                            alt="image"
                            className="w-full object-contain max-w-xs"
                        />
                    </section>

                    <section className="py-7 px-2 rounded-md shadow-sm flex flex-col gap-3 sm:gap-5 ">
                        <div className="flex flex-col gap-2">
                            <h1 className=" text-2xl sm:text-4xl font-bold">{productDetails?.name}</h1>
                            <p className=" text-gray-600 text-sm sm:text-base">
                                {productDetails?.description}
                            </p>
                            <div className="flex items-center gap-1">
                                {/*<StarRating/>*/}

                                {/*<span className="text-xs text-gray-400">*/}
                                {/*    ({product?.rating}) Rating*/}
                                {/*</span>*/}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2  ">
                            <h2 className="  text-lg font-semibold">About Product</h2>
                            <ul className="flex gap-5">
                                <div>
                                    <li>
                                        <span className="text-gray-500 text-sm">Brand: </span>
                                        {productDetails?.brand}
                                    </li>
                                    <li>
                                        <span className="text-gray-500 text-sm">Category: </span>
                                        {productDetails?.category}
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span className="text-gray-500 text-sm">Gender: </span>
                                        {productDetails?.gender}
                                    </li>
                                    <li>
                                        <span className="text-gray-500 text-sm">Heavy: </span>
                                        {productDetails?.weight}
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div className="flex gap-2 items-center pb-10 sm:pb-0">
                            Price:
                            <span className="ms-1 text-xl sm:text-2xl text-primary">
                            Rs. {productDetails?.newPrice}
                        </span>
                            <span className="text-sm text-gray-600 line-through">
                            Rs. {productDetails?.price}
                        </span>
                        </div>
                        {isAuthenticated ?
                            <div className="w-full flex gap-4 items-center flex-wrap">
                                {!isCartItem ?
                                    <div className='btn btn-primary' onClick={() => {
                                        if (productId) {
                                            addCartItem(productId);
                                        }
                                    }}>
                                        <FaShoppingCart/>
                                        Add to Cart
                                    </div>

                                    :

                                    <div className='btn btn-primary' onClick={() => {
                                        if (productId) {
                                            deleteCartItem(productId);
                                        }
                                    }}>
                                        <MdOutlineRemoveShoppingCart />
                                        Remove from Cart
                                    </div>
                                }
                                {!isWishlistItem ?
                                    <div className='btn btn-primary' onClick={() => {
                                        if (productId) {
                                            addWishlistItem(productId);
                                        }
                                    }}>
                                        <FaHeart/>
                                        Add to Wishlist
                                    </div>

                                    :

                                    <div className='btn btn-primary' onClick={() => {
                                        if (productId) {
                                            deleteWishlistItem(productId);
                                        }
                                    }}>
                                        <IoMdHeartDislike />
                                        Remove from Wishlist
                                    </div>
                                }
                            </div>

                            :

                            <h3><Link to='/signin' className='link link-primary'>Signin</Link> to purchase this product
                            </h3>
                        }
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ProductDetails;
