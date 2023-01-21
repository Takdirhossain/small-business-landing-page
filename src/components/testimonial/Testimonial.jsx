import "./testimonial.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <>
            <div class="testimonial-container">
              <div class="progress-bar"></div>
              <div class="fas fa-quote-left fa-quote"><FormatQuoteIcon/> </div>
              <div class="fas fa-quote-right fa-quote"> <FormatQuoteIcon/> </div>
              <p class="testimonial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint quibusdam, non aliquam amet perferendis! Provident asperiores repudiandae amet delectus?
              </p>
              <div class="user">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                  alt="user"
                  class="user-image"
                />
                <div class="user-details">
                  <h4 class="username">Mia Asano</h4>
                  <p class="role">Sales</p>
                </div>
              </div>
            </div>
          </>{" "}
        </SwiperSlide>
        <SwiperSlide>{" "}
          <>
            <div class="testimonial-container">
              <div class="progress-bar"></div>
              <div class="fas fa-quote-left fa-quote"><FormatQuoteIcon/> </div>
              <div class="fas fa-quote-right fa-quote"> <FormatQuoteIcon/> </div>
              <p class="testimonial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint quibusdam, non aliquam amet perferendis! Provident asperiores repudiandae amet delectus?
              </p>
              <div class="user">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="user"
                  class="user-image"
                />
                <div class="user-details">
                  <h4 class="username">Mia Asano</h4>
                  <p class="role">Sales</p>
                </div>
              </div>
            </div>
          </>{" "}</SwiperSlide>
        <SwiperSlide>{" "}
          <>
            <div class="testimonial-container">
              <div class="progress-bar"></div>
              <div class="fas fa-quote-left fa-quote"><FormatQuoteIcon/> </div>
              <div class="fas fa-quote-right fa-quote"> <FormatQuoteIcon/> </div>
              <p class="testimonial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint quibusdam, non aliquam amet perferendis! Provident asperiores repudiandae amet delectus?
              </p>
              <div class="user">
                <img
                  src="https://pbs.twimg.com/ext_tw_video_thumb/988902122505711616/pu/img/dFEzwC5YgV7ko7Oh.jpg"
                  alt="user"
                  class="user-image"
                />
                <div class="user-details">
                  <h4 class="username">Mia Asano</h4>
                  <p class="role">Sales</p>
                </div>
              </div>
            </div>
          </>{" "}</SwiperSlide>
        <SwiperSlide>{" "}
          <>
            <div class="testimonial-container">
              <div class="progress-bar"></div>
              <div class="fas fa-quote-left fa-quote"><FormatQuoteIcon/> </div>
              <div class="fas fa-quote-right fa-quote"> <FormatQuoteIcon/> </div>
              <p class="testimonial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint quibusdam, non aliquam amet perferendis! Provident asperiores repudiandae amet delectus?
              </p>
              <div class="user">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4isIlWxOex2qVPSF3mvsmsByxC0Mq0U8M_UrwRFPUkSvbbg5geYOxfT--ZfOmlu-Om0&usqp=CAU"
                  alt="user"
                  class="user-image"
                />
                <div class="user-details">
                  <h4 class="username">Mia Asano</h4>
                  <p class="role">Sales</p>
                </div>
              </div>
            </div>
          </>{" "}</SwiperSlide>
        <SwiperSlide>{" "}
          <>
            <div class="testimonial-container">
              <div class="progress-bar"></div>
              <div class="fas fa-quote-left fa-quote"><FormatQuoteIcon/> </div>
              <div class="fas fa-quote-right fa-quote"> <FormatQuoteIcon/> </div>
              <p class="testimonial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint quibusdam, non aliquam amet perferendis! Provident asperiores repudiandae amet delectus?
              </p>
              <div class="user">
                <img
                  src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=721"
                  alt="user"
                  class="user-image"
                />
                <div class="user-details">
                  <h4 class="username">Mia Asano</h4>
                  <p class="role">Sales</p>
                </div>
              </div>
            </div>
          </>{" "}</SwiperSlide>
        <SwiperSlide>{" "}
          <>
            <div class="testimonial-container">
              <div class="progress-bar"></div>
              <div class="fas fa-quote-left fa-quote"><FormatQuoteIcon/> </div>
              <div class="fas fa-quote-right fa-quote"> <FormatQuoteIcon/> </div>
              <p class="testimonial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni impedit nihil laborum beatae explicabo, labore eligendi ipsum, aliquam animi, eos nisi officia.?
              </p>
              <div class="user">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt="user"
                  class="user-image"
                />
                <div class="user-details">
                  <h4 class="username">Mia Asano</h4>
                  <p class="role">Sales</p>
                </div>
              </div>
            </div>
          </>{" "}</SwiperSlide>
        <SwiperSlide>{" "}
          <>
            <div class="testimonial-container">
              <div class="progress-bar"></div>
              <div class="fas fa-quote-left fa-quote"><FormatQuoteIcon/> </div>
              <div class="fas fa-quote-right fa-quote"> <FormatQuoteIcon/> </div>
              <p class="testimonial">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda error quod architecto libero aut fugiat enim, quae possimus unde! Reprehenderit.
              </p>
              <div class="user">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt="user"
                  class="user-image"
                />
                <div class="user-details">
                  <h4 class="username">Mia Asano</h4>
                  <p class="role">Sales</p>
                </div>
              </div>
            </div>
          </>{" "}</SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;
