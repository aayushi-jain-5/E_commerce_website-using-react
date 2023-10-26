import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4"><b>About Us</b></h1>
                        <div className="lead mb-4 justify-content-center">
                            Welcome to EStore - Where Shopping Meets Convenience and Quality.

                            <br/>Our Story<br/>

                            EStore was born out of a desire to transform the way you shop online. Our founders envisioned an e-commerce platform that offers more than just products; it provides an exceptional shopping experience. With the digital age in full swing, we recognized the need for a seamless, reliable, and enjoyable online shopping destination.

                            Our Mission<br/>

                            At EStore, our mission is clear: to provide you with an unparalleled online shopping journey. We are dedicated to offering a wide array of high-quality products, excellent customer service, and a commitment to your satisfaction. We believe in making your life easier, more enjoyable, and more convenient.

                            EStore's Promise<br/>

                            What sets EStore apart is our unwavering promise to deliver the best. We promise you:

                            Quality: Every product featured on EStore is handpicked for its quality and durability. We don't settle for less, and neither should you.
                            Variety: Our diverse selection covers everything you need, from the latest trends to timeless classics.
                            Customer-Centric Approach: We're here for you. Our customer support team is ready to assist you at every step, ensuring your shopping experience is stress-free.
                            Convenience: Shop from the comfort of your home, on your schedule. EStore is designed to make your life easier.
                            Satisfaction Guaranteed: Your happiness is our priority. If you're not satisfied, we're not satisfied. We stand by our products and our service.
                            Meet the EStore Team<br/>

                            Our success wouldn't be possible without our dedicated team. We are a group of passionate individuals who share a love for e-commerce and a commitment to making your life better. Together, we bring a blend of expertise in product selection, technology, and customer service to make EStore a shopping destination you can trust.

                            Community and Sustainability<br/>

                            EStore is more than just an online marketplace. We're part of a larger community, and we're conscious of our responsibilities. We actively support sustainability and contribute to social causes that matter to us. Your purchases help us make a positive impact.

                            Join the EStore Family<br/>

                            We're thrilled to have you here at EStore. Explore our wide range of products, connect with us on social media, and become part of the EStore family. Thank you for choosing us as your preferred online shopping destination.

                            <br/>Contact Us<br/>

                            Your feedback and questions are important to us. If you ever need assistance or just want to reach out, don't hesitate to contact us at [aayushi@example.com] or call us at [6251548451]
                        </div>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About