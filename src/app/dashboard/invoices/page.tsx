import React from 'react'
import Image from 'next/image'

export default function Invoices() {
  return (
    <div className='text-2xl'>
        <p>Invoices</p>
        <Image src='/2.jpg' alt="Invoice Image" width={1200} height={1200}  />
    </div>
  )
}
