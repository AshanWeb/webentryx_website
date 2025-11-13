import React from 'react'

function Categories() {
    return (
        <div>
            <div className="flex items-center justify-center md:justify-start  gap-2 mb-2 md:mb-4">
                <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
                <span className="uppercase text-sm text-[#a5b7d2] font-bold">Categories</span>
                {/* <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" /> */}
            </div>

            <div>
                <ul className='text-sm font-bold cursor-pointer'>
                    <li className='pb-3'> Agency <span className='text-[#a5b7d2] font-normal'>(1)</span></li>
                    <li className='pb-3'> Business <span className='text-[#a5b7d2] font-normal'>(3)</span></li>
                    <li className='pb-3'> Marketing <span className='text-[#a5b7d2] font-normal'>(5)</span></li>
                    <li className='pb-3'> SEO <span className='text-[#a5b7d2] font-normal'>(3)</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Categories