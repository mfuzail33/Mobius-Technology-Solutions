/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, } from "react";
import { Link } from "react-router-dom";
import data from "../data/contact.json";
import { contactFormAction, socialLink } from "../global";
import AnimatedBackground from "./animatedBackground";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const ContactContent = ({ isBg }) => {
  const form = useRef();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    company: "",
    role: "",
    website: "",
    companyAddress: "",
    country: "",
    email: "",
    titleOfDocument: "",
    descriptionOfDocument: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      emailjs.sendForm('service_l5plqr3', 'template_pkctf3l', form.current, 'jyRqGd4trY6ltxXOX')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } catch (error) {
      console.log('Error occurred:', error);
    } finally {
      resetForm();
    }
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    // <!-- ========== Contact section start ========== -->
    <section
      id="contact"
      className={`section-padding services bg-one`}
    >
      <AnimatedBackground />
      <div className="container" style={{ marginTop: '50px' }}>
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span style={{ color: '#fff' }}>{t('contactUs')}</span>
              <h2 className="display-6" style={{ color: '#fff' }}>{t('ForInquiries')}</h2>
              <p className="m-30px-b" style={{ color: '#fff' }}>{t('contactDescription')}</p>
              <div className="section-divider divider-traingle-white"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 m-25px-b" style={{ zIndex: 1 }}>
            <div className="contact-form-box">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      name="firstName"
                      className="form-control mb-3"
                      placeholder="First Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="middleName"
                      className="form-control mb-3"
                      placeholder="Middle Name"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <input
                      name="lastName"
                      className="form-control mb-3"
                      placeholder="Last Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="role"
                      className="form-control mb-3"
                      placeholder="Professional Role (Job Position)"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <input
                      name="country"
                      className="form-control mb-3"
                      placeholder="Country"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="email"
                      className="form-control mb-3"
                      type="email"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <input
                      name="company"
                      className="form-control mb-3"
                      placeholder="Company/Organization Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="website"
                      className="form-control mb-3"
                      type="url"
                      placeholder="Website URL of your Company"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <input
                      name="companyAddress"
                      className="form-control mb-3"
                      placeholder="Address of your Company"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="titleOfDocument"
                      className="form-control mb-3"
                      placeholder="Title of Document"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <textarea
                    name="descriptionOfDocument"
                    className="form-control mb-3"
                    placeholder="Description(s) of Document"
                    rows="3"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    name="document"
                  />
                </div>

                <div className="d-flex justify-content-end">
                  <button type="submit" className="button button__primary" style={{ borderRadius: '8px' }}>
                    <span>{t('Submit')}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <!--  contact form area end --> */}
          {/* <!-- contact information start --> */}
          <div
            className="col-lg-4 col-md-6 col-sm-12 m-25px-b"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            style={{ zIndex: '1' }}
          >
            <div className="contact__address p-30px">
              <ul className="contact__address__content">
                <li style={{ color: '#ebeaea' }}>
                  <span style={{ color: '#fff' }}>{t('Address')}</span>
                  lorem ipsum
                  <br />
                  dolor salet
                </li>
                <li>
                  <span style={{ color: '#fff' }}>{t('Phone')}</span>
                  <a href="tel:+1(512)5184366" style={{ color: '#ebeaea', zIndex: 100 }}>+1 (512) 518 4366</a>
                </li>
                <li>
                  <span style={{ color: '#fff' }}>{t('Email')}</span>
                  <Link to="#" style={{ color: '#ebeaea' }}>info@mobius.com</Link>
                </li>
              </ul>
              <h4 style={{ color: '#fff' }}>{t('OurSocialHandles')}</h4>
              <ul className="social-icon mt-3">
                <li>
                  <a href={'/'}>
                    <img
                      className="img-fluid"
                      src="assets/icons/facebook.svg"
                      alt="icon"
                      width="25"
                      height="25"
                    />
                  </a>
                </li>
                <li>
                  <a href={'/'}>
                    <img
                      className="img-fluid"
                      src="assets/icons/twitter.svg"
                      alt="icon"
                      width="25"
                      height="25"
                    />
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <img
                      className="img-fluid"
                      src="assets/icons/linkedin.svg"
                      alt="icon"
                      width="25"
                      height="25"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- contact information end --> */}
        </div>
      </div>
    </section >
    // <!-- ========== Contact section end ========== -->
  );
};

export default ContactContent;
