import placeholder from "@assets/image-placeholder.webp"

const ReferenceCard = () => {
    return(
        <div className="flex flex-col mt-8">
            {/* Image */}
            <div className="w-full h-full bg-black rounded-md overflow-hidden">
                <img src={placeholder} alt="" className=""/>
            </div>
        </div>
    )
}

export default ReferenceCard;