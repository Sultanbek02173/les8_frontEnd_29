import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'
import { Pagination, Navigation } from 'swiper/modules';

const Swipering = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://wallpapercave.com/wp/wp8958584.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://wallpapercave.com/uwp/uwp4657115.jpeg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://wallpapercave.com/uwp/uwp4657129.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://wallpapercave.com/uwp/uwp4657125.jpeg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://wallpapercave.com/wp/wp8958584.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://wallpapercave.com/wp/wp8958584.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://wallpapercave.com/wp/wp8958584.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://wallpapercave.com/wp/wp8958584.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://wallpapercave.com/wp/wp8958584.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Swipering;
