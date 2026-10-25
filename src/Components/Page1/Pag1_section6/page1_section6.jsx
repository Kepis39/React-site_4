import classes from"../Pag1_section6/page1_section6.module.scss"
import { Photo } from "../../../Photo.js"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function Pag1_section6() {
  return (
    <>
    <section className={classes.sect6}>
     <div  className={classes.big_container}>
       <div className={classes.swipper_block}>
            <Swiper className={classes.mySwiper}
               slidesPerView={1}
               spaceBetween={30}
               loop={true}
              modules={[Pagination]}
              pagination={{ 
              clickable: true, 
              dynamicBullets: false 
               }} 
                >
                  <SwiperSlide>
                    <div className={classes.block}>
                      <p>“Your one stop solution to<br/>
                      feeling energised and focused.”</p>
                      <img src={Photo.Framejhvp}/>
                    </div>
                    <div className={classes.block}>
                      <p>“A revelation. Not just<br/>
                       about looking better and<br/>
                        feeling better. LYMA is <br/>
                        about real health benefits.”</p>
                      <img src={Photo.Framghv}/>
                    </div>
                    <div className={classes.block}>
                      <p>“Experts are queuing up to <br/> 
                      praise LYMA.”</p>
                      <img src={Photo.Framedxtrdxyt}/>
                    </div>
                  </SwiperSlide>
                    
                    <SwiperSlide>
                      <div className={classes.block}>
                        <p>“Your one stop solution to<br/>
                        feeling energised and focused.”</p>
                        <img src={Photo.Framejhvp}/>
                      </div>
                      <div className={classes.block}>
                        <p>“A revelation. Not just<br/>
                        about looking better and<br/>
                          feeling better. LYMA is <br/>
                          about real health benefits.”</p>
                        <img src={Photo.Framghv}/>
                      </div>
                      <div className={classes.block}>
                        <p>“Experts are queuing up to <br/> 
                        praise LYMA.”</p>
                        <img src={Photo.Framedxtrdxyt}/>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className={classes.block}>
                        <p>“Your one stop solution to<br/>
                        feeling energised and focused.”</p>
                        <img src={Photo.Framejhvp}/>
                      </div>
                      <div className={classes.block}>
                        <p>“A revelation. Not just<br/>
                        about looking better and<br/>
                          feeling better. LYMA is <br/>
                          about real health benefits.”</p>
                        <img src={Photo.Framghv}/>
                      </div>
                      <div className={classes.block}>
                        <p>“Experts are queuing up to <br/> 
                        praise LYMA.”</p>
                        <img src={Photo.Framedxtrdxyt}/>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className={classes.block}>
                        <p>“Your one stop solution to<br/>
                        feeling energised and focused.”</p>
                        <img src={Photo.Framejhvp}/>
                      </div>
                      <div className={classes.block}>
                        <p>“A revelation. Not just<br/>
                        about looking better and<br/>
                          feeling better. LYMA is <br/>
                          about real health benefits.”</p>
                        <img src={Photo.Framghv}/>
                      </div>
                      <div className={classes.block}>
                        <p>“Experts are queuing up to <br/> 
                        praise LYMA.”</p>
                        <img src={Photo.Framedxtrdxyt}/>
                      </div>
                  </SwiperSlide>
                </Swiper>
        </div>
     </div>
    </section>
    </>
  )
}