import React from "react";

const MemberProfile = ({card, name, role}) => 

    (
        <div className="flex flex-col items-start p-8 px-0">
            <div className="mb-24">{card}</div>
            <h1 className="font-bold mb-4">{name}</h1>
            <p className="flex-col w-96">{role}</p>
        </div>
    );

export default MemberProfile;