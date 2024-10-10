import React from 'react'
import { motion, Variants } from 'framer-motion'
import { slide, opacity, perspective } from './anim'
import { color } from '@/constants' 
import { usePathname } from 'next/navigation'

const anim = (variants: Variants) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

export default function Layout({ children }: {
    children: React.ReactNode | React.ReactNode[]
}) {
    const pathName = usePathname()
    const route = pathName?.split('/')[1]
    return (
        <div style={{
             backgroundColor: color.BLACK
        }}>
            <motion.div style={{
                backgroundColor: route === 'info' ? color.BLACK : color.WHITE
            }} className='fixed top-0 left-0 z-10 w-screen h-screen' {...anim(slide)} />
            <motion.div style={{
                backgroundColor:  color.WHITE  
            }} {...anim(perspective)}>
                <motion.div {...anim(opacity)}>
                    {children}
                </motion.div>
            </motion.div>
        </div>
    )
}
