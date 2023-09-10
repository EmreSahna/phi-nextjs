'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

export default function AnasayfaSlayt({ news }) {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}