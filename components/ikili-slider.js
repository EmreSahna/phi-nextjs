'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './slider-style.css'

export default function IkiliSlider({ news }) {
    const sliderItems = news.slice(0, 6)
    const otherItems = news.slice(6,8)

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div className="h-[420px] flex mt-4 font-semibold">
            <div className="w-2/3 px-2 flex">
                <Swiper pagination={pagination} modules={[Autoplay, Pagination, EffectFade]} autoplay={{delay: 3000, disableOnInteraction: false}} loop={true} effect={'fade'}>
                    {
                        sliderItems.map((slide,index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <a href={slide.categories.nodes[0].slug+"/"+slide.slug} className="relative">
                                        <div className="absolute top-0 ml-1 mt-1 bg-yblue">
                                            <span className="text-[#fff] m-1">{slide.categories.nodes[0].name}</span>
                                        </div>
                                        <img src={slide.featuredImage.node.mediaItemUrl} className="h-full w-full object-cover before:grad" />
                                        <div className="absolute bottom-12 bg-ychar text-center p-1">
                                            <span className="text-[#fff] text-3xl">{slide.title}</span>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className="w-1/3">
                {
                    otherItems.map((other, index) => {
                            if (index%2 == 0) {
                                return (
                                <div className="h-1/2 px-2 pb-1">
                                    <a href={other.categories.nodes[0].slug + "/" + other.slug}
                                       className="relative">
                                        <div className="absolute top-0 ml-1 mt-1 bg-yblue">
                                            <span className="text-[#fff] m-1">{other.categories.nodes[0].name}</span>
                                        </div>
                                        <img src={other.featuredImage.node.mediaItemUrl}
                                             className="h-full w-full object-cover"/>
                                        <div className="absolute bottom-0 bg-yblue w-full p-2">
                                            <span className="text-[#fff] text-lg">{other.title}</span>
                                        </div>
                                    </a>
                                </div>
                                )
                            }else {
                                return (
                                    <div className="h-1/2 px-2 pb-1">
                                        <a href={other.categories.nodes[0].slug + "/" + other.slug}
                                           className="relative">
                                            <div className="absolute top-0 ml-1 mt-1 bg-yblue">
                                                <span className="text-[#fff] m-1">{other.categories.nodes[0].name}</span>
                                            </div>
                                            <img src={other.featuredImage.node.mediaItemUrl}
                                                 className="h-full w-full object-cover"/>
                                            <div className="absolute bottom-0 bg-yblue w-full p-2">
                                                <span className="text-[#fff] text-lg">{other.title}</span>
                                            </div>
                                        </a>
                                    </div>
                                )
                            }
                    })
                }
            </div>
        </div>
    )
}

/*
{
                    othertwo.map(other => {
                        return (
                            <div className="h-1/2 px-2">
                                <a href={other.categories.nodes[0].slug+"/"+other.slug} className="relative">
                                    <div className="absolute top-0 ml-1 mt-1 bg-yblue">
                                        <span className="text-[#fff] m-1">{other.categories.nodes[0].name}</span>
                                    </div>
                                    <img src={other.featuredImage.node.mediaItemUrl} className="h-full w-full object-cover" />
                                    <div className="absolute bottom-0 bg-yblue w-full p-2">
                                        <span className="text-[#fff] text-lg">{other.title}</span>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
 */