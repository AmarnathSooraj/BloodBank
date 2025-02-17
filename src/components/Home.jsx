import React from 'react'
import './Home.css'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'


function Home() {
  return (
    <div className="container">
        <div className='section1'>
            <div className='des'>
                Where compassion meets action.
            </div>
                <img src={pic1}/>
        </div>
        <div className='section2'>
            <button>Donate Blood</button>
            <button>Receive Blood</button>
        </div>
        <div className="section3">
            <div className='heading'>Why Donate Blood?</div>
            <div className='content'>
                    <img src={pic3}/>
                    <ul className='list'>
                        <li>Save lives<br/>
                            <span>Just one donation can help up to three people.</span>
                        </li>
                        <li>Improves your health<br/>
                            <span>Regular donation promotes good health by balancing iron levels.</span>
                        </li>
                        <li>Community support<br/>
                            <span>Play a vital role in emergency preparedness.</span>
                        </li>
                    </ul>
            </div>
        </div>
        <div className="section4">
            <div className='heading'>Who can Donate?</div>
            <div className='content'>
                    <ul className='list'>
                        <li>Individuals aged 18-65 years</li>
                        <li>Minimum weight of 50kg</li>
                        <li>Healthy individuals with no chronic diseases or infections</li>
                        <li>No recent history of major surgeries,tattoos,or piercings (within 6 months)</li>
                    </ul>
                    <img src={pic2}/>
            </div>
        </div>
        <div className='section5'>
            <p>Explore donations available near me and hosptials to receive blood near me</p>
            <button>Explore Now</button>
        </div>
        <div className="section6">
            <div className='heading'>How to donate?</div>
            <ul>
                <li><span>Register:</span>Sign up our website or visit our nearest center.</li>
                <li><span>Screening:</span>Our medical team will check your eligibility.</li>
                <li><span>Donation:</span>The process takes about 10-15 minutes.</li>
                <li><span>Recovery:</span>Enjoy light refreshment and rest before resuming activities.</li>
            </ul>
        </div>
        <div className='section7'>
            <p>
                <span>Find a Donation Center:</span>Locate the nearest blood bank using our intereactive app. Walk-in or schedule an appointment for hassle-free experience.
            </p>
            <p>
                <span>Request Blood:</span>Need blood urgently? Submit a request through our online form and we will connect you with available donors and resources.
            </p>
        </div>
    </div>
  )
}

export default Home
