import React from "react";
import Link from "next/link";

const FilterBar = () => {
    return (
        <div className="flex flex-row justify betwen">
            <div>
                <ul className="flex flex-row gap-16 text-[15px] font-bold">
                    <li>
                        <Link href="/resources" className="relative inline-block px-4 py-2 hover: group">
                            <span className="relative z-10">View All</span>
                            <span className="absolute inset-0 rounded-full border-1 border-transparent group-hover:border-black group-active:border-black group-focus:border-black transition-all duration-300 ease-in-out"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources" className="relative inline-block px-4 py-2 hover: group">
                            <span className="relative z-10">High School Students</span>
                            <span className="absolute inset-0 rounded-full border-1 border-transparent group-hover:border-black group-active:border-black group-focus:border-black transition-all duration-300 ease-in-out"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources" className="relative inline-block px-4 py-2 hover: group">
                            <span className="relative z-10">Incoming Students</span>
                            <span className="absolute inset-0 rounded-full border-1 border-transparent group-hover:border-black group-active:border-black group-focus:border-black transition-all duration-300 ease-in-out"></span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources" className="relative inline-block px-4 py-2 hover: group">
                            <span className="relative z-10">Computing at Queen's</span>
                            <span className="absolute inset-0 rounded-full border-1 border-transparent group-hover:border-black group-active:border-black group-focus:border-black transition-all duration-300 ease-in-out"></span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default FilterBar;