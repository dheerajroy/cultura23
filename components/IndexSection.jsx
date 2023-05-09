"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Section from './Section'
import themeImg from '@/public/images/theme1.png'
import crownImg from '@/public/images/crown.png'
import sprayCanImg from '@/public/images/spraycan.png'
import aheadImg from '@/public/images/ahead.png'

export default function IndexSection() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearTimeout(timer)
    })

    function calculateTimeLeft() {
        const difference = +new Date("2023-06-09") - +new Date()
        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }

        return timeLeft
    }
    return (
        <Section id="#">
            <div className='flex flex-wrap gap-5'>
                {/* <div className='absolute top-1/2 lg:left-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden'> */}
                <div className='bg-black/50 gap-3 w-full lg:w-[500px] h-[550px] max-w-[500px] flex justify-between items-center flex-col p-5 rounded-3xl'>
                    <div className='flex min-w-[300px]'>
                        <h1 className='font-LUSER text-6xl text-center'>expression<br /> beyond limit</h1>
                        {/* <Image src={themeImg} className="w-[40em] ml-[50px]" alt='' /> */}
                    </div>
                    <video controls autoPlay muted loop className="max-w-[300px] lg:hidden sm:block">
                        <source src="/theme.mp4" type='video/mp4' />
                    </video>
                    <div className='w-full flex justify-center items-center'>
                        <Image src={aheadImg} className="hidden lg:block w-[200px]" />
                        <div className='flex flex-col items-center font-bold font-SivarPro'>
                            <h1 className='text-4xl'>9th-1oth June</h1>
                            <div className='timer pt-3 text-5xl [&>div>h6]:font-light bg-black/50 w-fit p-5 rounded-full [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:justify-center'>
                                <div>
                                    {timeLeft.days}
                                    <h6>DAYS</h6>
                                </div>
                                <div>
                                    {timeLeft.hours - 5}
                                    <h6>HOURS</h6>
                                </div>
                                <div>
                                    {timeLeft.minutes}
                                    <h6>MINUTES</h6>
                                </div>
                                <div>
                                    {timeLeft.seconds}
                                    <h6>SECONDS</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[700px] hidden lg:flex items-center">
                    <video autoPlay controls muted loop>
                        <source src="/theme.mp4" type='video/mp4' />
                    </video>
                </div>
            </div>
        </Section>
    )
}
