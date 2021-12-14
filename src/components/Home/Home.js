import React from 'react';
import './home.scss';

const Home = () => {
  
  return (
    <>
    <section className="home" id="home">
      <div className="swiper home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="box" style={{background: 'url(https://kalpak-travel.com/wp-content/uploads/2017/04/Kyrgyzstan-Karakol-Valley-Hiking.jpg)'}}>
              <div className="container">
                <h1>THE TRAVEL BLOG</h1>
                <i>Walk the way you want</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="content">
      <div className="content__title">
        <i>
          Bring Color <br/> Into Your Life
        </i>
      </div>
      <div className="content__img">
        <img src="https://img.itinari.com/pages/images/original/ead534b7-8015-4bef-a61c-4b9d1becb242-istock-1059719798.jpg?ch=DPR&dpr=1&w=1200&h=800&s=ea271b622093dbe352f28a70f38144f8" alt="" />
      </div>
    </section>
    <section className="category">
      <h1 className="heading">Adventure idea!</h1>
      <div className="box-container">
          <div className="box">
              <img src="https://matyplanet.com/static/uploads/files/d166065e1b7ad886036be1892fa0718b.jpg?ts=1547729962" alt="" />
              <h3>paragliding</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
              <a href="#" className="btn">read more</a>
          </div>
          <div className="box">
              <img src="https://travelbar.kg/template/images/listings/763/1.jpg" alt="" />
              <h3>rafting</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
              <a href="#" className="btn">read more</a>
          </div>
          <div className="box">
              <img src="https://media.istockphoto.com/photos/bungee-jumping-picture-id547436912?k=20&m=547436912&s=612x612&w=0&h=yshYn1cWJSA-Rrft1gSp7fsgJprMegUyPNAHMmgxlbI=" alt="" />
              <h3>bungee jump</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
              <a href="#" className="btn">read more</a>
          </div>
          <div className="box">
              <img src="https://d2vycemu6ia26b.cloudfront.net/site-assets/2019-11/3HA795x530.jpg?2r3UlExxZSbcS5Mk6RghpvDKRkAfcSZ5" alt="" />
              <h3>zip lines</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
              <a href="#" className="btn">read more</a>
          </div>
      </div>
    </section>
    </>
  )
}

export default Home
