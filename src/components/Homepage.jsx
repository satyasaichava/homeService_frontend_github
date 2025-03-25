import React from 'react';
import '../App.css';
import Bgim from '../assets/images/bg.webp';
import Logo from '../assets/images/img5.png';
import About from '../assets/images/about.png';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="mainHomepage">
                <section className="mainhpg1">
                    <div className="navLogo">
                        <nav>
                            <h1><img src={Logo} alt="Home Service Logo" />&nbsp;Home Service</h1>
                        </nav>
                    </div>
                    <div className="mainhg1contents">
                        <div className="hmpg1Conetnt">
                            <h1>Home Service</h1>
                            <p>"Your home deserves the best care – and now it's just a tap away. Book trusted professionals today!"</p>
                            <button onClick={() => navigate('/signup')}>Book Now</button>
                        </div>
                        <div className="hmpg1contentimg">
                            <img src={Bgim} alt="Home service professional" />
                        </div>
                    </div>
                </section>
                <section className="mainpgabout">
                    <h1>About us</h1>
                    <div className="abtContents">
                        <div className="aboutcontent1">
                            <p>At Home Service, we're on a mission to make home services effortless. We connect you with trusted, skilled professionals for all your home needs—from repairs to deep cleaning. Every provider on our platform is carefully vetted to ensure quality and reliability. With instant booking, secure payments, and real-time support, we're here to simplify your life. Your home deserves the best, and we're proud to deliver it with just a few clicks.</p>
                        </div>
                        <div className="aboutimgPng">
                            <img src={About} alt="About our services" />
                        </div>
                    </div>
                </section>
                <section className="subscription-section">
                    <div className="container">
                        <h2>Choose Your Perfect Plan</h2>
                        <p className="subtitle">Flexible options for every home service need</p>
                        
                        <div className="subscription-cards">
                            <div className="subscription-card basic">
                                <div className="card-header">
                                    <h3>Basic Care</h3>
                                    <div className="price">$29<span>/month</span></div>
                                </div>
                                <ul className="features">
                                    <li>✔ 1 Monthly deep cleaning</li>
                                    <li>✔ Basic maintenance checks</li>
                                    <li>✔ 10% discount on repairs</li>
                                    <li>✖ Priority scheduling</li>
                                    <li>✖ Emergency support</li>
                                </ul>
                                <button className="select-btn">Get Started</button>
                            </div>
                            
                            <div className="subscription-card standard popular">
                                <div className="popular-badge">Most Popular</div>
                                <div className="card-header">
                                    <h3>Standard Care</h3>
                                    <div className="price">$59<span>/month</span></div>
                                </div>
                                <ul className="features">
                                    <li>✔ 2 Monthly professional cleanings</li>
                                    <li>✔ Full maintenance inspections</li>
                                    <li>✔ 15% discount on all services</li>
                                    <li>✔ 48-hour priority scheduling</li>
                                    <li>✖ 24/7 emergency support</li>
                                </ul>
                                <button className="select-btn primary">Choose Plan</button>
                            </div>
                            
                            <div className="subscription-card premium">
                                <div className="card-header">
                                    <h3>Premium Care</h3>
                                    <div className="price">$99<span>/month</span></div>
                                </div>
                                <ul className="features">
                                    <li>✔ Weekly premium cleanings</li>
                                    <li>✔ Comprehensive home checks</li>
                                    <li>✔ 20% discount on all services</li>
                                    <li>✔ 24-hour priority scheduling</li>
                                    <li>✔ 24/7 emergency support</li>
                                </ul>
                                <button className="select-btn">Go Premium</button>
                            </div>
                        </div>
                        
                        <p className="note">All plans include our satisfaction guarantee. Cancel anytime.</p>
                    </div>
                </section>

                <section className="service-timeline">
                    <h1>Our 8-Step Service Process</h1>
                    <div className="timeline-container">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
                            <div key={step} className={`timeline-step ${step % 2 === 1 ? 'odd' : 'even'}`}>
                                <div className="step-number">{step}</div>
                                <div className="step-content">
                                    <h3>{getStepTitle(step)}</h3>
                                    <p>{getStepDescription(step)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="worker-steps">
                    <h2>Our Worker Process</h2>
                    <div className="parallax-cards-container">
                        <div className="parallax-cards">
                            {workerStepsData.map((step, index) => (
                                <div key={index} className="step-card">
                                    <div className="card-number">{index + 1}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <div className="card-icon">{step.icon}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <footer className="site-footer">
                    <div className="footer-container">
                        <div className="footer-grid">
                            <div className="footer-col company-info">
                                <img src={Logo} alt="Home Service Logo" className="footer-logo" />
                                <p>Your trusted partner for all home service needs. Quality professionals at your fingertips.</p>
                                <div className="social-links">
                                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            
                            <div className="footer-col">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">How It Works</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            
                            <div className="footer-col">
                                <h3>Our Services</h3>
                                <ul>
                                    <li><a href="#">Cleaning Services</a></li>
                                    <li><a href="#">Plumbing</a></li>
                                    <li><a href="#">Electrical</a></li>
                                    <li><a href="#">Handyman</a></li>
                                    <li><a href="#">Pest Control</a></li>
                                    <li><a href="#">Landscaping</a></li>
                                </ul>
                            </div>
                            
                            <div className="footer-col contact-info">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li><i className="fas fa-map-marker-alt"></i> 123 Service St, City, Country</li>
                                    <li><i className="fas fa-phone"></i> +1 (123) 456-7890</li>
                                    <li><i className="fas fa-envelope"></i> info@homeservice.com</li>
                                    <li><i className="fas fa-clock"></i> Mon-Fri: 9AM-6PM</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="newsletter">
                            <h3>Subscribe to Our Newsletter</h3>
                            <form className="newsletter-form">
                                <input type="email" placeholder="Your email address" required />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                        
                        <div className="copyright">
                            <p>&copy; {new Date().getFullYear()} Home Service. All rights reserved.</p>
                            <div className="legal-links">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Service</a>
                                <a href="#">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

function getStepTitle(step) {
    const titles = [
        "Book Your Service",
        "Instant Confirmation",
        "Professional Assigned",
        "Pre-Service Check",
        "Service Day Arrival",
        "Quality Service",
        "Final Inspection",
        "Follow-Up"
    ];
    return titles[step - 1];
}

function getStepDescription(step) {
    const descriptions = [
        "Easy online booking with our simple form or mobile app",
        "Receive immediate booking confirmation with all details",
        "Our system matches you with the best available professional",
        "Professional contacts you to confirm details and requirements",
        "Professional arrives on time with proper equipment",
        "Work performed to the highest standards with regular updates",
        "You review and approve the completed work",
        "We check to ensure your complete satisfaction"
    ];
    return descriptions[step - 1];
}
const workerStepsData = [
    {
        title: "Application & Screening",
        description: "Rigorous background checks and skill verification",
        icon: "📋"
    },
    {
        title: "Training Program",
        description: "Specialized training in home service protocols",
        icon: "🎓"
    },
    {
        title: "Equipment Certification",
        description: "Proper use of tools and safety measures",
        icon: "🛠️"
    },
    {
        title: "Quality Standards",
        description: "Mastery of our service quality benchmarks",
        icon: "⭐"
    },
    {
        title: "First Assignments",
        description: "Supervised initial jobs with mentor feedback",
        icon: "👨‍🏫"
    },
    {
        title: "Performance Tracking",
        description: "Ongoing evaluation and customer feedback",
        icon: "📊"
    },
    {
        title: "Advanced Training",
        description: "Specialization in specific service areas",
        icon: "🚀"
    },
    {
        title: "Certified Professional",
        description: "Full certification to serve independently",
        icon: "🏆"
    }
];

export default Homepage;