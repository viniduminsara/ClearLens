interface CategoryCardProps {
    title: string;
    image: string;
}

const CategoryCard = ({ title, image } : CategoryCardProps) => {

    return (
        <div className="card bg-base-100 image-full w-full mb-4 lg:w-96 shadow-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-lg">
            <figure>
                <img
                    src={image}
                    className='h-28'
                    alt="Shoes"/>
            </figure>
            <div className="card-body flex justify-center items-center">
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
        </div>
    )
}

export default CategoryCard;
