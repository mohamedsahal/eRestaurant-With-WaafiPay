import  { useState } from 'react'
import "./payments.css"

const Payments = () => {
    const initialPayment = {
        evc: false,
        sahal: false,
        zaad: false
    }
    const [payment, setPayment] = useState(initialPayment)
  return (
    <div>
        <h2>Pay With</h2>
        <div className="payment-cards">
          
            <div className={`payment-card ${payment.sahal && "selected"}`}
              onClick={()=> setPayment({...initialPayment, sahal: true})}>
                <h3>Sahal</h3>
            </div>

            <div className={`payment-card ${payment.zaad && "selected"}`}
             onClick={()=> setPayment({...initialPayment, zaad: true})}>
                <h3>Zaad</h3>
            </div>

            <div className={`payment-card ${payment.evc && "selected"}`}
             onClick={()=> setPayment({...initialPayment, evc: true})}>
                <h3>Evc Plus</h3>
            </div>
        </div>

        <form>
            <input type="text" className='form-control' placeholder='25290...'/>
        </form>

        <button className='btn-proceed'>Proceed</button>
    </div>
  )
}

export default Payments