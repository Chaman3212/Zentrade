import React from 'react'

const Pricing = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1 className='mb-4'>Unbeatable pricing</h1>
            <p>
We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          </div>
          <div className="col-2"></div>
          <div className="col-6">
            <div className='row'>
              <div className="col border text-center p-5">
                <h1>&#8377;0</h1>
                <p> Free equity delivery and direct mutual funds</p>
              </div>
              <div className="col border text-center p-5">
                <h1>&#8377;20</h1>
                <p> Intraday and
F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
