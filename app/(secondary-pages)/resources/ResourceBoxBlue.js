import React from "react";
import CardImgBlue from "@/components/cards/card-img-blue";
import Link from "next/link";

const ResourceBoxBlue = ({ img, title, description, id, link }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <div className="flex flex-row justify-between" id={id}>
      <CardImgBlue img={img} />
      <div className="flex flex-col w-8/12 items-center justify-center">
        <div>
          <h3 className="text-[26px] font-bold mt-4">{title}</h3>
          <p className="text-[18px] mt-4 text-secondary-text">{description}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default ResourceBoxBlue;
