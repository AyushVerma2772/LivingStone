import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import TestimonialCard from "./TestimonialCard";
import boy from '../Images/boy.png'

// Import Swiper styles
import '../Styles/Testimonial.css'
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonial() {
    return (
        <>
            <h2 className='apply-heading'>Testimonials</h2>
            <Swiper
                effect="fade"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{clickable: true,}}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide className="my-slider"> <TestimonialCard testImage={boy} testPara="While the educational expenses of us two siblings was always a concern for my father, it grew even more serious after the lockdown happened. Nevertheless, I kept studying and searching for a scholarship rigorously. That's when I got to know about the Buddy4Study portal and was able to apply for the Fullerton India Scholarship Programme. The application process was smooth on B4S and I even got selected! I was awarded with an amount of Rs. 10,000 with the help of which I paid my Mathematics coaching fees and bought books for self-study." testHeading="Giridev Rabha, Class 12, Kamrup, Assam" /> </SwiperSlide>

                <SwiperSlide className="my-slider"> <TestimonialCard testImage={boy} testPara="While the educational expenses of us two siblings was always a concern for my father, it grew even more serious after the lockdown happened. Nevertheless, I kept studying and searching for a scholarship rigorously. That's when I got to know about the Buddy4Study portal and was able to apply for the Fullerton India Scholarship Programme. The application process was smooth on B4S and I even got selected! I was awarded with an amount of Rs. 10,000 with the help of which I paid my Mathematics coaching fees and bought books for self-study." testHeading="Giridev Rabha, Class 12, Kamrup, Assam" /> </SwiperSlide>

                <SwiperSlide className="my-slider"> <TestimonialCard testImage={boy} testPara="While the educational expenses of us two siblings was always a concern for my father, it grew even more serious after the lockdown happened. Nevertheless, I kept studying and searching for a scholarship rigorously. That's when I got to know about the Buddy4Study portal and was able to apply for the Fullerton India Scholarship Programme. The application process was smooth on B4S and I even got selected! I was awarded with an amount of Rs. 10,000 with the help of which I paid my Mathematics coaching fees and bought books for self-study." testHeading="Giridev Rabha, Class 12, Kamrup, Assam" /> </SwiperSlide>

                <SwiperSlide className="my-slider"> <TestimonialCard testImage={boy} testPara="While the educational expenses of us two siblings was always a concern for my father, it grew even more serious after the lockdown happened. Nevertheless, I kept studying and searching for a scholarship rigorously. That's when I got to know about the Buddy4Study portal and was able to apply for the Fullerton India Scholarship Programme. The application process was smooth on B4S and I even got selected! I was awarded with an amount of Rs. 10,000 with the help of which I paid my Mathematics coaching fees and bought books for self-study." testHeading="Giridev Rabha, Class 12, Kamrup, Assam" /> </SwiperSlide>

            </Swiper>
        </>
    )
}
