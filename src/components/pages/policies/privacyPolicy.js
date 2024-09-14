/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../../global/header";
import Footer from "../../global/footer";

const PrivacyPolicy = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Header header={header} />
            <section id="benefits" style={{ paddingTop: '120px' }} className={`section-padding authorv3 bg-one`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-left text-center text-lg-start">
                                <h2 className="text-center" style={{ color: '#fff' }}>Privacy Policy</h2>
                                <p className="text-center mb-5 fs-6" style={{ color: '#fff' }}>At Mobius Technology Solutions, we value your privacy and are committed to protecting it. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                            </div>
                            <div className="section-title-left text-lg-start">
                                <h3 className="" style={{ color: '#fff' }}>1. Information We Collect</h3>
                                <h4 style={{ color: '#fff' }}>Personal Information</h4>
                                <p className="fs-6" style={{ color: '#fff' }}>We collect personal information that you voluntarily provide to us, which may include:</p>
                                <ul>
                                    <li style={{ color: '#fff' }}>Registering on our website</li>
                                    <li style={{ color: '#fff' }}>Subscribing to our newsletter</li>
                                    <li style={{ color: '#fff' }}>Placing an order</li>
                                    <li style={{ color: '#fff' }}>Filling out a form</li>
                                    <li style={{ color: '#fff' }}>Contacting us directly</li>
                                </ul>
                                <p className="mt-3 fs-6" style={{ color: '#fff' }}>The personal information we collect includes:</p>
                                <ul>
                                    <li style={{ color: '#fff' }}>Name</li>
                                    <li style={{ color: '#fff' }}>Email address</li>
                                    <li style={{ color: '#fff' }}>Mailing address</li>
                                    <li style={{ color: '#fff' }}>Phone number</li>
                                    <li style={{ color: '#fff' }}>Payment information</li>
                                </ul>
                                <h4 className="mt-3" style={{ color: '#fff' }}>Non-Personal Information</h4>
                                <p className="fs-6" style={{ color: '#fff' }}>We may also collect non-personal information when you interact with our website. This includes:</p>
                                <ul>
                                    <li style={{ color: '#fff' }}>Browser type</li>
                                    <li style={{ color: '#fff' }}>Pages visited</li>
                                    <li style={{ color: '#fff' }}>Time and date of visits</li>
                                    <li style={{ color: '#fff' }}>Diagnostic data</li>
                                </ul>

                                <h3 className="mt-5" style={{ color: '#fff' }}>2. How We Use Your Information</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>We use the information we collect for various purposes, including:</p>
                                <ul>
                                    <li style={{ color: '#fff' }}>Processing transactions</li>
                                    <li style={{ color: '#fff' }}>Improving our website and services</li>
                                    <li style={{ color: '#fff' }}>Sending periodic emails (with your consent)</li>
                                    <li style={{ color: '#fff' }}>Responding to inquiries and providing customer support</li>
                                    <li style={{ color: '#fff' }}>Conducting marketing and promotional activities</li>
                                    <li style={{ color: '#fff' }}>Complying with legal obligations</li>
                                </ul>

                                <h3 className="mt-5" style={{ color: '#fff' }}>3. Information Sharing and Disclosure</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below:</p>
                                <ul>
                                    <li style={{ color: '#fff' }}><b>Service Providers</b> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                                    <li style={{ color: '#fff' }}><b>Legal Requirements</b> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
                                    <li style={{ color: '#fff' }}><b>Business Transfers</b> In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred to the acquiring entity.</li>
                                </ul>

                                <h3 className="mt-5" style={{ color: '#fff' }}>4. Data Security</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>We implement appropriate and reasonable technical and organizational measures to protect your personal information from unauthorized access, use, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>5. Your Rights</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                                <ul>
                                    <li style={{ color: '#fff' }}>The right to access the personal information we hold about you</li>
                                    <li style={{ color: '#fff' }}>The right to request the correction of inaccurate personal information</li>
                                    <li style={{ color: '#fff' }}>The right to request the deletion of your personal information</li>
                                    <li style={{ color: '#fff' }}>The right to restrict or object to the processing of your personal information</li>
                                    <li style={{ color: '#fff' }}>The right to data portability</li>
                                </ul>
                                <p className="fs-6" style={{ color: '#fff' }}>To exercise any of these rights, please contact us using the contact information provided below.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>6. Cookies and Tracking Technologies</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device. You can set your browser to refuse cookies or alert you when cookies are being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>7. Third-Party Links</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>Our website may contain links to third-party websites. We do not control these websites and are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party websites you visit.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>8. Cookies and Tracking Technologies</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>9. Contact Us</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>If you have any questions about this Privacy Policy, please contact us at:</p>
                                <h4 className="mt-3" style={{ color: '#fff' }}>Mobius Technology Solutions</h4>
                                <p className="fs-6" style={{ color: '#fff' }}><b>Email:</b> info@noblebookspublishing.com</p>
                                <p className="fs-6" style={{ color: '#fff' }}><b>Phone:</b> +1(512)-518-4366</p>
                                <p className="fs-6" style={{ color: '#fff' }}><b>Website:</b> www.noblebookspublishing.com</p>
                                <p className="fs-6" style={{ color: '#fff' }}>Thank you for choosing Mobius Technology Solutions. We are dedicated to protecting your privacy and personal information.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default PrivacyPolicy;
