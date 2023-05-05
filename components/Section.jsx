import React from 'react'
import Image from 'next/image'

export default function Section({ id, className, children }) {
    return (
        <div className={`section ${className}`} id={id}>
            <div className='pt-5'>
                {children}
            </div>
        </div>
    )
}
