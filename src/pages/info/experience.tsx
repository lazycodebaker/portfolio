
import { useRef } from 'react'
import { cubicBezier, motion, useInView } from 'framer-motion'
import { font } from '@/constants'


function HeadingLineText({ text }: {
    text: string
}) {

    const headingLine = useRef<HTMLDivElement>(null)

    const isInView = useInView(headingLine, { once: false })

    return <div ref={headingLine} className='flex-col w-screen gap-2 px-2 inline-block'>
        <h1 style={{
            fontSize: font.size.XL
        }}>{text}</h1>
        <motion.div
            initial={{
                width: 0
            }}
            animate={{
                width: isInView ? '100%' : 0
            }}
            transition={{
                duration: 0.8,
                delay: 2,
                ease: cubicBezier(0.83, 0, 0.17, 1),
            }}
            className='h-[1px] bg-black' />
    </div>
}

export default function Experience() {

    return <motion.section
        className='w-screen my-20 h-screen'>

        <HeadingLineText text="Experience" />



    </motion.section>
}