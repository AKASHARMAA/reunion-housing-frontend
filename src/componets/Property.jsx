import React from 'react'

function Property({ property }) {

    return (
        <div key={property._id} className='bg-gray-200 md:m-5 m-2 rounded-2xl border-black border md:col-span-1 col-span-3 overflow-hidden'>
            <img
                src={property.imageUrl ? property.imageUrl : "https://png.pngtree.com/element_our/png/20181214/real-estate-house-logo-graphic-design-template-vector-illustration-png_269519.jpg"}

                className='w-full object-cover h-64'
            />

            <div className='items-center flex flex-col p-5 '>
                <p><span className='text-blue-500 font-mono text-lg'>{property.price} {property.currency}</span><span className='text-sm'>/month</span></p>
                <p className='font-semibold text-2xl'>{property.propertyName}</p>
                <p className='font-semibold text-gray-400'>{property.city}, {property.state}</p>
                <div className='w-[80%] my-2 border border-gray-500' />
                <div className='text-sm grid grid-cols-3 gap-3'>
                    <div className='col-span-1'>{property.bedrooms} Bedroom</div>
                    <div className='col-span-1'>{property.bedrooms} Bedroom</div>
                    <div className='col-span-1'>{property.area} sqft</div>
                </div>
            </div>
        </div>
    )
}

export default Property
