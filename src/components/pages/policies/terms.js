/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../../global/header";
import Footer from "../../global/footer";

const Terms = ({ header, footer }) => {
    const { menu } = footer;

    return (
        <>
            <Header header={header} />
            <section id="benefits" style={{ paddingTop: '120px' }} className={`section-padding authorv3 bg-one`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-left text-center text-lg-start">
                                <h2 className="text-center" style={{ color: '#fff' }}>Terms and Conditions</h2>
                                <p className="text-center mb-5 fs-6" style={{ color: '#fff' }}>Welcome to Mobius Technology Solutions. By accessing and using our services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.</p>
                            </div>
                            <div className="section-title-left text-lg-start">
                                <h3 className="" style={{ color: '#fff' }}>1. Services Provided</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>At Mobius Technology Solutions, we offer a range of services including:</p>
                                <ul>
                                    <li style={{ color: '#fff' }}>eBook Publishing</li>
                                    <li style={{ color: '#fff' }}>Ghostwriting</li>
                                    <li style={{ color: '#fff' }}>Editing and Proofreading</li>
                                    <li style={{ color: '#fff' }}>Book Cover Design</li>
                                    <li style={{ color: '#fff' }}>Book Illustrations</li>
                                    <li style={{ color: '#fff' }}>Author Website Design</li>
                                    <li style={{ color: '#fff' }}>Strategic Marketing and Distribution</li>
                                </ul>

                                <h3 className="mt-5" style={{ color: '#fff' }}>2. Payment Options</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>We accept various payment methods, including credit cards, debit cards, and other payment gateways. Full payment details will be provided during the transaction process.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>3. Payment Terms</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>Once a project is confirmed, the customer is required to pay a non-refundable deposit of 10% of the total project cost to initiate the work. This deposit secures your spot and covers initial project preparation and consultation.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>4. Cancellation and Refund Policy</h3>
                                <ul>
                                    <li style={{ color: '#fff' }}><b>Non-Refundable Deposit</b> The initial 10% deposit is non-refundable.</li>
                                    <li style={{ color: '#fff' }}><b>Full Payment Reimbursement</b> If you cancel the project after making the full payment, you will be reimbursed 75% of the total payment, with 25% being retained to cover administrative and preparatory expenses.</li>
                                </ul>

                                <h3 className="mt-5" style={{ color: '#fff' }}>5. Publishing Platforms</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>When you opt for any of our publishing packages, we aim to publish your book on major platforms, including but not limited to:</p>
                                <ul>
                                    <li style={{ color: '#fff' }}>Amazon Kindle Direct Publishing (KDP)</li>
                                    <li style={{ color: '#fff' }}>Smashwords</li>
                                    <li style={{ color: '#fff' }}>Other significant publishing platforms</li>
                                </ul>

                                <h3 className="mt-5" style={{ color: '#fff' }}>6. Client Responsibilities</h3>
                                <ul>
                                    <li style={{ color: '#fff' }}><b>Providing Accurate Information</b> You are responsible for providing accurate and complete information for your project. Mobius Technology Solutions will not be held liable for errors resulting from incorrect or incomplete information provided by the client.</li>
                                    <li style={{ color: '#fff' }}><b>Meeting Deadlines</b> Timely submission of required materials and adherence to deadlines is crucial for the successful completion of your project.</li>
                                </ul>

                                <h3 className="mt-5" style={{ color: '#fff' }}>7. Intellectual Property</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>All intellectual property rights for the content created by Mobius Technology Solutions remain with the client upon full payment. However, Mobius Technology Solutions retains the right to use excerpts or references to the work for promotional purposes unless otherwise agreed upon in writing.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>8. Confidentiality</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>We respect your privacy and are committed to protecting your personal information. Any information shared with Mobius Technology Solutions will be kept confidential and used solely for the purpose of completing your project.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>9. Revisions</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>Our packages include a specified number of revisions. Additional revisions beyond this limit may incur additional charges. Revisions must be requested within the specified revision period stated in your contract.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>10. Limitation of Liability</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>Mobius Technology Solutions will not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services, even if we have been advised of the possibility of such damages.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>11. Governing Law</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>These terms and conditions are governed by and construed in accordance with the laws of the state in which Mobius Technology Solutions operates, without regard to its conflict of law principles.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>12. Changes to Terms and Conditions</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>Mobius Technology Solutions reserves the right to modify these terms and conditions at any time. Any changes will be posted on this page with an updated revision date. Continued use of our services after any changes constitutes your acceptance of the new terms and conditions.</p>

                                <h3 className="mt-5" style={{ color: '#fff' }}>9. Contact Us</h3>
                                <p className="fs-6" style={{ color: '#fff' }}>If you have any questions about this Privacy Policy, please contact us at:</p>
                                <h4 className="mt-3" style={{ color: '#fff' }}>Mobius Technology Solutions</h4>
                                <p className="fs-6" style={{ color: '#fff' }}><b>Email:</b> info@noblebookspublishing.com</p>
                                <p className="fs-6" style={{ color: '#fff' }}><b>Phone:</b> +1(512)-518-4366</p>
                                <p className="fs-6" style={{ color: '#fff' }}><b>Website:</b> www.noblebookspublishing.com</p>
                                <p className="fs-6" style={{ color: '#fff' }}>Thank you for choosing Mobius Technology Solutions. We look forward to helping you bring your literary projects to life.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer isBg="yes" menu={menu} />
        </>
    );
};

export default Terms;
