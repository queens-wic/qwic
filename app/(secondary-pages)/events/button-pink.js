import React from "react"
import Link from "next/link";

const ButtonPink = ({ username, link }) => (
    <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="w-40 h-10 flex items-center justify-center bg-light-pink border-black border-1 m-4 ms-0 rounded-lg hover:border-dark-pink ease-in-out">
            <p className="text-center text-sm text-black">{username}</p>
        </div>
    </Link>
);

export default ButtonPink;
