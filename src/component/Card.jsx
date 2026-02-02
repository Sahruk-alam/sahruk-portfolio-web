import React from 'react';

const Card = ({ 
    image, 
    title, 
    subtitle,
    description, 
    children
}) => {
    return (
        <div className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
            {image && (
                <div className='w-full h-40 bg-gray-300 overflow-hidden'>
                    <img 
                        src={image} 
                        alt={title} 
                        className='w-full h-full object-cover'
                    />
                </div>
            )}
            
            <div className='p-5'>
                {title && (
                    <h3 className='text-lg font-bold text-gray-800 mb-1'>
                        {title}
                    </h3>
                )}
                
                {subtitle && (
                    <p className='text-sm text-gray-500 mb-2'>
                        {subtitle}
                    </p>
                )}
                
                {description && (
                    <p className='text-gray-600 text-sm mb-3'>
                        {description}
                    </p>
                )}
                
                {children}
            </div>
        </div>
    );
};

export default Card;
