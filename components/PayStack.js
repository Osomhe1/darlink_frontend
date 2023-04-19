import React, { useState } from 'react'
import {PaystackButton} from 'react-paystack'

const PayStack = ({ amount, email, onSuccess, onClose }) => {
  const publicKey = 'YOUR_PAYSTACK_PUBLIC_KEY'
  const [reference, setReference] = useState('')

  const componentProps = {
    email,
    amount: amount * 100,
    publicKey,
    text: 'Pay Now',
    onSuccess: (response) => onSuccess(response),
    onClose: () => onClose(),
  }

  const handleReference = (response) => {
    setReference(response.reference)
  }

  return (
    <>
      <PaystackButton
       {...componentProps} 
       reference={handleReference}
        />
      <div>Reference: {reference}</div>
    </>
  )
}

export default PayStack
