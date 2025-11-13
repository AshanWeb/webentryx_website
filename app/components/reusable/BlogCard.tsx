import React from 'react'
import Image from 'next/image'
import { Clock, User } from 'lucide-react'
import Link from 'next/link'

function BlogCard() {

    const cardData = [
        {
            id: 1,
            img: '/images/blog_img_1.webp',
            name: 'Tom Black',
            date: ' November 21, 2019',
            title: '15 SEO Best Practices: Website Architecture',
            desc: 'The basic premise of search engine reputation management is to use the...'
        },
        {
            id: 1,
            img: '/images/blog_img_2.webp',
            name: 'Tom Black',
            date: ' November 21, 2019',
            title: '15 SEO Best Practices: Website Architecture',
            desc: 'The basic premise of search engine reputation management is to use the...'
        },
        {
            id: 1,
            img: '/images/blog_img_3.webp',
            name: 'Tom Black',
            date: ' November 21, 2019',
            title: '15 SEO Best Practices: Website Architecture',
            desc: 'The basic premise of search engine reputation management is to use the...'
        }
    ]
    return (
        <div className='lg:max-w-4xl xl:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-0'>
            {
                cardData.map((card) => (
                    <div key={card.id} className='border border-gray-200 shadow-lg rounded-2xl'>
                        <Link href='/'>
                            <Image
                                src={card.img}
                                alt='Blog Image'
                                width={750} height={500}
                                className='object-cover rounded-t-2xl '
                            />
                        </Link>

                        <div className='p-6'>
                            <div className='flex items-center gap-2 mb-5'>
                                <div className='flex items-center gap-2 cursor-pointer group'>
                                    <User className="w-4 h-4 text-[#a5b7d2] text-[14px] group-hover:text-[#EB0029] transition-colors duration-300" />
                                    <span className='text-[#a5b7d2] text-[14px]'>{card.name}</span>
                                </div>
                                <div className='flex items-center gap-2 cursor-pointer group'>
                                    <Clock className="w-4 h-4 text-[#a5b7d2] text-[14px] group-hover:text-[#EB0029] transition-colors duration-300" />
                                    <span className='text-[#a5b7d2] text-[14px]'>{card.date}</span>
                                </div>
                            </div>

                            <h2 className='text-2xl font-semibold text-[#1a1b1e] mb-5 hover:text-[#EB0029] cursor-pointer'>{card.title}</h2>
                            <p className='text-[16px] text-[#606060]'>{card.desc}</p>
                        </div>

                    </div>
                ))}
        </div>
    )
}

export default BlogCard