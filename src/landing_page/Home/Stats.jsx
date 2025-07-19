import React from 'react';

const Stats = () => {
  return (
    <div className="container my-5 p-5">
      <div className="row align-items-center p-5">
        {/* Text Column */}
        <div className="col-md-6 p-5">
          <h2 className="mb-5 mt-3">Trust with confidence</h2>

          <h4>Customer-first always</h4>
          <p className='text-muted  mb-4'>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments. 
          </p >

          <h4>No spam or gimmicks</h4>
          <p className='text-muted mb-4'> 
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
          </p>

          <h4>The Zerodha universe</h4>
          <p className='text-muted mb-4'>
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h4>Do better with money</h4>
          <p className='text-muted mb-4'>
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Image Column */}
        <div className="col-md-6 text-center">
          <img src="images/ecosystem.png" alt="Zerodha Ecosystem" className="img-fluid" style={{ maxWidth: '80%' }} />
                  <a href="/"> Explore our product <i class="fa-solid fa-arrow-right"></i></a>

        </div>
      </div>
    </div>
  );
};

export default Stats;
