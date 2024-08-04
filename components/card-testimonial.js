import React from 'react';

const Testimonial = ({body, name, info, w, h}) => 
    
    (
            <div className="w-[400px] h-400px] bg-white border-pale-pink border-1 rounded-3xl">
                <p className="m-8 mb-0 text-sm">{body}</p>
                <p className="m-8 mt-6 mb-1 font-medium text-lg">{name}</p>
                <p className="m-8 mt-0 text-sm">{info}</p>
            </div>
    );

export default Testimonial;