import React from "react";
import CardImgPink from "@/components/cards/card-img-pink";


const ResourceBoxPink = ({img, title, description, id}) => 

    (
        <div className='flex items-center' id={id}>
            <CardImgPink img={img} />
            <div className='ml-60'>
                <h3 className="text-[26px] font-bold mt-4">
                    {title}
                </h3>
                <p className="text-[18px] mt-4 text-secondary-text">
                    {description}
                </p>
            </div>
        </div>
    );

export default ResourceBoxPink;