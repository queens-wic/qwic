import React from "react";

const EventBox = ({card, date, name, info}) => 

    (
        <div className="flex flex-col items-start p-4">
            <p className="mb-6">{date}</p>
            <div className="mb-24">{card}</div>
            <h1 className="font-bold mb-4">{name}</h1>
            <p className="flex-col w-96">{info}</p>
        </div>
    );

export default EventBox;