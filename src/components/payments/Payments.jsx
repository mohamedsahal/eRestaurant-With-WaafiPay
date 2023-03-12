import React from 'react'
import "./payments.css"

const Payments = () => {
  return (
    <div>
        <h2>Pay With</h2>
        <div className="payment-cards">
            <div className="payment-card">
                <h3>Sahal</h3>
            </div>

            <div className="payment-card">
                <h3>Zaad</h3>
            </div>

            <div className="payment-card">
                <h3>Evc Plus</h3>
            </div>
        </div>

        <form>
            <input type="text" className='form-control' placeholder='25290'/>
        </form>

        <button className='btn-proceed'>Proceed</button>
    </div>
  )
}

export default Payments