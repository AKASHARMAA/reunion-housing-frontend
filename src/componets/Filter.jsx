import React, { useRef, useState } from 'react'

function Filter({ data, setFilteredData, cities }) {

    const city = useRef();
    const price = useRef();
    const availableFrom = useRef();
    const type = useRef();
    const [priceValue, setPriceValue] = useState("");

    const applyFilter = () => {

        const filter = {
            "city": city.current.value,
            "price": price.current.value,
            "availableFrom": availableFrom.current.value,
            "type": type.current.value,
        }


        setFilteredData(data.filter(property => {
            let match = false;
            if ((property.city == filter.city || filter.city == "All")
                && property.price < filter.price &&
                Date.parse(property.availableFrom) < Date.parse(filter.availableFrom) &&
                (property.propertyType == filter.type || filter.type == "All")) {
                match = true;
            }
            return match;
        }))
    }


    return (
        <div className='md:mx-16 mx-5 bg-slate-300 p-5 grid md:grid-cols-5 gap-4 rounded-3xl'>
            <div className="border-r-4 border-gray-500 col-span-1 px-5">
                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2">
                    City
                </label>
                <div className="relative">
                    <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" ref={city}>
                        {cities.map(city => { return <option key={city}>{city}</option> })}
                        <option>All</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>
            <div className="border-r-4 border-gray-500 col-span-1 px-5">
                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" >
                    Available From
                </label>
                <input type="date" className='p-3 rounded-md border border-black relative' ref={availableFrom} />
            </div>
            <div className="border-r-4 border-gray-500 col-span-1 px-5">
                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" >
                    Price [less than] : {priceValue}
                </label>
                <input type="range" min="1" max="99999" className='mt-3' ref={price} onChange={(e) => setPriceValue(e.target.value)} />
            </div>
            <div className="border-r-4 border-gray-500 col-span-1 px-5">
                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" >
                    Type
                </label>
                <div className="relative">
                    <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" ref={type}>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>All</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            <div className='grid col-span-1 items-center justify-center'>
                <button className='active:bg-violet-400 border border-black py-2 bg-violet-300 mx-5 rounded-lg p-10 w-[max-content] h-[max-content]' onClick={applyFilter}>
                    Apply
                </button>
            </div>
        </div>
    )
}

export default Filter
