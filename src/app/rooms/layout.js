'use client'

import SecondaryLoader from '@/components/secondary-loader'
import Lenis from 'lenis'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        setTimeout(() => {
            setMounted(true)
        }, 500)
    }, [])
    return (
        <>
            <SecondaryLoader mounted={mounted} />
            {children}
        </>
    )
}