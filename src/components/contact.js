/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { postImg } from "./api";

const Contact = ({ isBg }) => {
  const form = useRef();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
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
    doc: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      firstName: formData.firstName,
      middleName: formData.middleName,
      lastName: formData.lastName,
      company: formData.company,
      role: formData.role,
      website: formData.website,
      companyAddress: formData.companyAddress,
      country: formData.country,
      email: formData.email,
      titleOfDocument: formData.titleOfDocument,
      descriptionOfDocument: formData.descriptionOfDocument,
      doc: formData.doc,
    };

    const data = {
      service_id: 'service_wuy13ur',
      template_id: 'template_zbcnaag',
      user_id: 'YSaRy4lUCYNjX1-KA',
      template_params: templateParams
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          console.log('SUCCESS!');
          alert('Contact form submitted successfully!');
        } else {
          response.json().then(data => {
            console.error('Failed to send email:', data);
            alert('Error submitting contact form, Please try again later.' + JSON.stringify(data));
          });
        }
      })
      .catch(error => {
        console.error('Error sending email:', error);
        alert('Oops... ' + error.message);
      })
      .finally(() => {
        setLoading(false);
        resetForm();
      });
  };

  const resetForm = () => {
    form.current.reset();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.log('No file selected');
      return;
    }

    setDisable(true);

    const originalName = file.name;
    const nameWithoutSpaces = originalName.replace(/\s/g, '');
    const randomFourDigits = Math.floor(1000 + Math.random() * 9000);
    const modifiedName = `${nameWithoutSpaces.split('.').slice(0, -1).join('.')}${randomFourDigits}.${originalName.split('.').pop()}`;

    const modifiedFile = new File([file], modifiedName, { type: file.type });

    try {
      const pdfUrl = await postImg(modifiedFile);
      if (pdfUrl) {
        setFormData(formData => ({
          ...formData,
          doc: pdfUrl
        }));
      } else {
        console.log('File upload failed, no URL returned');
      }
    } catch (error) {
      console.error('File upload failed:', error);
    } finally {
      setLoading(false);
      setDisable(false);
    }
  };

  return (
    // <!-- ========== Contact section start ========== -->
    <section
      id="contact"
      className={`p-80px-tb site_bg`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span style={{ color: '#fff' }}>{t('contactUs')}</span>
              <h2 className="display-6" style={{ color: '#fff' }}>{t('contactTitle')}</h2>
              <p className="m-30px-b" style={{ color: '#fff' }}>{t('contactDesc')}</p>
              <div className="section-divider divider-traingle-white"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!--  contact form area start --> */}
          <div
            className="col-lg-8 col-md-6 col-sm-12 m-25px-b"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            style={{ zIndex: 1 }}
          >
            <div className="contact-form-box">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      name="firstName"
                      className="form-control mb-3"
                      placeholder="*First Name"
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
                      placeholder="*Last Name"
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
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="email"
                      className="form-control mb-3"
                      type="email"
                      placeholder="*Email"
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
                      placeholder="*Company/Organization Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="website"
                      className="form-control mb-3"
                      type="url"
                      placeholder="*Website Link of your Company"
                      onChange={handleChange}
                      required
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
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="titleOfDocument"
                      className="form-control mb-3"
                      placeholder="*Title of Document"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <textarea
                    name="descriptionOfDocument"
                    className="form-control mb-3"
                    placeholder="*Description of Document"
                    rows="3"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <input
                    accept=".pdf,.doc,.docx"
                    type="file"
                    className="form-control"
                    name="doc"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  {!disable && (
                    <button type="submit" className="button button__primary" style={{ borderRadius: '8px' }} disabled={disable}>
                      {loading ? <span>{t('Submitting...')}</span> : <span>{t('Submit')}</span>}
                    </button>
                  )}
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
            style={{ zIndex: 1 }}
          >
            <div className="contact-form-box p-30px">
              <ul className="contact__address__content">
                <li style={{ color: '#ebeaea' }}>
                  <span style={{ color: '#fff' }}>{t('Addresses')}</span>
                  <b>{t('Office')}: </b>X-03, Ground Floor, Block 3, Business Bay, Sector F DHA1-R Phase1, Islamabad, Pakistan<br />
                  <b>{t('Warehouse & Workshop')}: </b>Property Number CB 4, IJP road, Ward 2, Near Friends Hospital, Rawalpindi, Pakistan
                </li>
                <li>
                  <span style={{ color: '#fff' }}>{t('Fax Number')}</span>
                  <a href="tel:+92515766333" style={{ color: '#ebeaea', zIndex: 100 }}>+92-51-5766333</a>
                </li>
                <li>
                  <span style={{ color: '#fff' }}>{t('Email')}</span>
                  <Link to="#" style={{ color: '#ebeaea', fontSize: '14px' }}>contact@mobiustechnologysolutions.com</Link>
                </li>
              </ul>
              <h4 style={{ color: '#fff' }}>{t('OurSocialHandles')}</h4>
              <ul className="social-icon mt-3 ">
                <li>
                  <a href={'/'} className="card_icon_bg">
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
                  <a href={'/'} className="card_icon_bg">
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
                  <a href="https://www.linkedin.com/company/mobius-technology-soulutions" target="_blank" className="card_icon_bg">
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
    </section>
    // <!-- ========== Contact section end ========== -->
  );
};

export default Contact;
