
import React from 'react' 
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app' 
import SmoothScrolling from '@/components/Scroll'

export default function App({ Component, pageProps, router }: AppProps) {
    return <SmoothScrolling>
        <AnimatePresence mode='wait'>
            <Navbar />
            <Component key={router.route} {...pageProps} />
        </AnimatePresence>
    </SmoothScrolling>
}
