import React from "react";
import coverImg from "../../../assets/images/books2.png"
import book from "../../../assets/images/services/autobiography/2.jpg"
import book1 from "../../../assets/images/services/autobiography/13.png"
import book2 from "../../../assets/images/services/autobiography/20.png"
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialData from "../../../data/autobiography.json"
import ContactContent from "../../contactContent";
import { useMediaQuery } from 'react-responsive';

const Autobiography = ({ isBg }) => {
    const { autobiographyTestimonials } = testimonialData;
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return (
        <>
            <section style={{ marginTop: '20px', position: 'relative' }}>
                <div style={{ position: 'relative' }}>
                    <img
                        src={coverImg}
                        alt="Autobiography & Memoir Book Cover"
                        style={{ display: 'block', margin: '0 auto', width: '100%', height: '60vh', borderRadius: '10px' }}

                    />
                    <div style={{
                        position: 'absolute',
                        top: '38%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '24px'
                    }}
                    >
                        <h2 className="display-6" style={{ color: '#fff' }}>Autobiography & Memoir Services</h2>
                    </div>
                    <div
                        className={`col-lg-12`}
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        style={{ marginTop: '50px' }}
                    >
                        <p className="text-center">
                            At Mobius Technology Solutions, we recognize the profound impact of autobiographies and memoirs, serving as mediums through which individuals share their life stories, experiences, and insights with the world. Our specialized services are designed to help authors transform their memories into compelling written works. Whether you're a public figure, a business leader, or an individual with a unique story to tell, our autobiography and memoir services provide a platform for you to preserve your legacy and inspire others with your journey.
                        </p>
                    </div>
                    <div className="section-divider divider-traingle" style={{ display: 'flex', margin: '50px auto 50px auto' }}></div>
                </div>
            </section>

            <section
                id="hero"
                className={`hero hero__padding overflow-hidden position-relative
                    }`}
                style={{ paddingTop: '100px' }}
            >
                <div className="circle x1"></div>
                <div className="circle x2"></div>
                <div className="circle x3"></div>
                <div className="circle x4"></div>
                <div className="circle x5"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="hero__content position-relative">
                                <h3 className="display-5 m-30px-b">
                                    Our Approach to Autobiography & Memoir Writing
                                </h3>
                                <p className="mb-5 fs-5">
                                    <ul>
                                        <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                            <b>Initial Consultation:</b>  We kickstart the process by discussing your autobiography or memoir goals, themes, and desired outcomes, developing a customized writing plan tailored to your vision.
                                        </li>
                                        <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                            <b>Story Development:</b> Our writers dive deep into your life story, conducting in-depth interviews and research to gather material that captures the essence of your experiences and insights.
                                        </li>
                                        <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                            <b>Writing and Revision:</b>  Utilizing the gathered information, our writers craft engaging and evocative prose that brings your autobiography or memoir to life on the page. We value your feedback and make revisions as needed to ensure your satisfaction.
                                        </li>
                                        <li style={{ fontSize: '18px', textAlign: 'start' }}>
                                            <b>Editing and Proofreading:</b> Before finalization, your manuscript undergoes a meticulous editing and proofreading process to ensure clarity, coherence, and grammatical accuracy, ensuring your story shines brightly.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero__author text-center">
                                <div className="hero__author--inner3">
                                    <div className="hero__author--inner3--wrapper">
                                        <img
                                            width="500"
                                            className="img-fluid"
                                            src={book}
                                            alt="Mobius Technology Solutions"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="benefits"
                className={`achieve section-padding`}
            >
                <div className="container">

                    <div className="row gx-5">
                        <div
                            className="col-lg-6 mb-3 mb-lg-0"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="achieve__image">
                                        <img
                                            className="img-fluid"
                                            src={book2}
                                            alt="Achive Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="display-5 m-30px-b">
                                Benefits of Autobiography & Memoir Services at Mobius Technology Solutions
                            </h3>
                            <div className="achieve__content">
                                <div className="row">
                                    <div
                                        className="col-sm-6 mb-4"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay={50}
                                    >
                                        <div className="achieve__content__item h-100 translateEffect2">
                                            <div className="achieve__icon m-20px-b">
                                                <img
                                                    className="img-fluid"
                                                    src="assets/icons/dice-multiple.svg"
                                                    alt="icon"
                                                    width="40"
                                                    height="40"
                                                />
                                            </div>
                                            <h3 className="m-15px-b">Legacy Preservation</h3>
                                            <p>Writing an autobiography or memoir allows you to preserve your personal history and leave a lasting legacy for future generations.</p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 mb-4"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay={50}
                                    >
                                        <div className="achieve__content__item h-100 translateEffect2">
                                            <div className="achieve__icon m-20px-b">
                                                <img
                                                    className="img-fluid"
                                                    src="assets/icons/goal.svg"
                                                    alt="icon"
                                                    width="40"
                                                    height="40"
                                                />
                                            </div>
                                            <h3 className="m-15px-b">Inspirational Storytelling</h3>
                                            <p>Sharing your life story can inspire and empower others who may be facing similar challenges or seeking guidance and inspiration.</p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 mb-4"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay={50}
                                    >
                                        <div className="achieve__content__item h-100 translateEffect2">
                                            <div className="achieve__icon m-20px-b">
                                                <img
                                                    className="img-fluid"
                                                    src="assets/icons/brand-target.svg"
                                                    alt="icon"
                                                    width="40"
                                                    height="40"
                                                />
                                            </div>
                                            <h3 className="m-15px-b">Cathartic Experience</h3>
                                            <p>Writing about your life experiences can be a cathartic and healing process, allowing you to reflect on your journey and find closure or resolution.</p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-6 mb-4"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay={50}
                                    >
                                        <div className="achieve__content__item h-100 translateEffect2">
                                            <div className="achieve__icon m-20px-b">
                                                <img
                                                    className="img-fluid"
                                                    src="assets/icons/ebook.svg"
                                                    alt="icon"
                                                    width="40"
                                                    height="40"
                                                />
                                            </div>
                                            <h3 className="m-15px-b">Connection & Understanding</h3>
                                            <p>Your autobiography or memoir can foster connection and understanding among readers, helping them relate to your experiences and empathize with your struggles and triumphs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ marginTop: '50px', position: 'relative' }}>
                <div className="container">
                    <div className="row">

                        <div
                            className="col-lg-6"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="">
                                <h3 className="display-5 m-30px-b">Why Choose Mobius Technology Solutions for Autobiography & Memoir?</h3>
                                <p className="m-30px-b">
                                    <ul>
                                        <li>
                                            <b>Experienced Writers:</b> Our team boasts seasoned writers with extensive experience crafting autobiographies and memoirs across diverse genres and themes, ensuring exceptional quality in every project.
                                        </li>
                                        <li>
                                            <b>Compassionate Approach:</b> We understand the sensitivity and intimacy involved in sharing personal stories. With empathy, respect, and understanding, we approach each project, ensuring a compassionate and supportive environment throughout.
                                        </li>
                                        <li>
                                            <b>Collaborative Process:</b> We value your voice and vision. Throughout the writing process, we work closely with you, ensuring that your story is authentically reflected in the final manuscript.
                                        </li>
                                        <li>
                                            <b>Comprehensive Services:</b> From initial interviews and research to manuscript development and editing, we offer a full suite of services to guide you through every stage of the writing journey, ensuring a seamless and rewarding experience.
                                        </li>
                                        <li>
                                            <b>Professionalism and Integrity:</b> We prioritize professionalism, integrity, and confidentiality in all our interactions. At Mobius Technology Solutions, we provide a safe and supportive environment for authors to share their stories, ensuring the highest level of professionalism and integrity.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div
                            className={`col-lg-6 ${!isMobile ? "text-center" : ""}`}
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                        >
                            <div className="author-image" style={{ height: '650px', width: '100%' }}>
                                <img className="img-fluid" src={book1} alt="Mobius Technology Solutions" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="reviews"
                className={`section-padding testimonial bg-one
                    }`}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                            <div className="section-title-center text-center">
                                <span style={{ color: '#fff' }}>{autobiographyTestimonials.subtitle}</span>
                                <h2 className="display-6" style={{ color: '#fff' }}>{autobiographyTestimonials.title}</h2>
                                <div className="section-divider divider-traingle-white"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row testi-row">
                        <div className="col-12">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                pagination={{ clickable: true }}
                                autoplay
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                {autobiographyTestimonials.testimonialItem?.map((data) => (
                                    <SwiperSlide key={data.id}>
                                        <div className="swiper-slide p-5px-lr">
                                            <div className="testi-card card h-100 translateEffect1">
                                                <div className="card-body p-4">
                                                    <div className="testi-card__quotation">
                                                        <i className="icofont-quote-right"></i>
                                                    </div>
                                                    <p className="my-4">{data.description}</p>
                                                    <div className="testi-card__user-info pt-4">
                                                        <div className="testimonial__user-info__image">
                                                            <img src={data.image} alt={data.title} />
                                                        </div>
                                                        <div className="testimonial__user-info__content">
                                                            <h4 className="mb-0">{data.name}</h4>
                                                            <p className="mb-0">{data.title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Autobiography;
