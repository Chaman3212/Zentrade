import React from 'react'

const Awards = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className='row p-5 '>
            <div className="col-6 m-auto">
                <img src="images/largestBroker.svg" alt="" />
            </div>
            <div className="col-6 p-5">
                <div className='mb-5'>
                    <h1>Largest stock broker in india</h1>
                <span>2+ million Zerodha clients contribute to over 15% of all </span>
                <span>reatils orders volumes in daily by trading and investion in:</span>
                </div>
                <div className='row'>
                    <div className="col">
                        <ul>
                            <li className='mb-2'>Futures and options </li>
                            <li className='mb-2'>Commodity derivatives</li>
                            <li className='mb-2'>Currency derivatives</li>
                        </ul>
                    </div>
                <div className="col">
                     <ul>
                            <li className='mb-2'>Stocks & IPO's</li>
                            <li className='mb-2'>Direct mutual funds</li>
                            <li className='mb-2'>Bonds and Gold's</li>
                        </ul>
                </div>
                </div>
                <img src="images/pressLogos.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Awards
