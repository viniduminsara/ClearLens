import {FaHeart, FaShoppingCart} from "react-icons/fa";

const ProductDetails = () => {

    return (
        <div className='px-6 md:px-24'>
            <div className="md:min-h-[80vh] flex justify-center items-center pt-5 sm:pt-3 pb-2 relative">
                <main className="grid grid-rows-1 sm:grid-cols-2 gap-2 sm:gap-10 ">
                    <section className="relative p-7 bg-black/[0.075]  flex items-center justify-center rounded-lg">
                        <img
                            src="https://eyesome.netlify.app/static/media/sports1.f986df729a29a685f835.png"
                            alt=""
                            className="w-full object-contain max-w-xs"
                        />
                    </section>

                    <section className="py-7 px-2 rounded-md shadow-sm flex flex-col gap-3 sm:gap-5 ">
                        <div className="flex flex-col gap-2">
                            <h1 className=" text-2xl sm:text-4xl font-bold">Ardor Avaitor</h1>
                            <p className=" text-gray-600 text-sm sm:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
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
                                        Ray-Ban
                                    </li>
                                    <li>
                                        <span className="text-gray-500 text-sm">Category: </span>
                                        Sports
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span className="text-gray-500 text-sm">Gender: </span>
                                        Men
                                    </li>
                                    <li>
                                        <span className="text-gray-500 text-sm">Heavy: </span>
                                        200g
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div className="flex gap-2 items-center pb-10 sm:pb-0">
                            Price:
                            <span className="ms-1 text-xl sm:text-2xl text-primary">
                            Rs. 5000
                        </span>
                            <span className="text-sm text-gray-600 line-through">
                            Rs. 6500
                        </span>
                        </div>

                        <div className="w-full flex gap-4 items-center flex-wrap">
                            <div className='btn btn-primary'>
                                <FaShoppingCart/>
                                Add to Cart
                            </div>
                            <div className='btn btn-primary'>
                                <FaHeart />
                                Add to Wishlist
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ProductDetails;
