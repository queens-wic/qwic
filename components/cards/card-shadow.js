import React from 'react';

const CardShadow = ({title, body, buttontext}) => 
    
    (
        <div>
            <div className="w-[450px] h-[325px] rounded-3xl shadow-2xl">
                <div className="p-2"/>
                <h2 className="m-8 mt-6 text-xl font-medium">{title}</h2>
                <p className="m-8 text-sm">{body}</p>
                <div className="flex items-center justify-center w-[200px] h-[50px] m-8 bg-pale-pink rounded-full hover:border-black border-1">
                    <h2 className="text-m font-medium text-alt-purple">{buttontext}</h2> 
                </div>
            </div>
        </div>
    );

    export default CardShadow;