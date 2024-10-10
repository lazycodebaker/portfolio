import { cubicBezier, motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TextReveal({ text, lineHeight }: {
    text: string,
    lineHeight: string
}): React.ReactNode | React.ReactNode[] {
    const scrollElement = useRef<HTMLDivElement>(null)
    const isInView = useInView(scrollElement, { once: false })

    return <motion.div ref={scrollElement} className="relative overflow-hidden">
        <motion.div style={{
            lineHeight: lineHeight
        }}
            initial={{
                y: 100,
            }}
            animate={{
                y: isInView ? 0 : 100,
                transition: {
                    duration: 1,
                    ease: cubicBezier(0.83, 0, 0.17, 1),
                }
            }}>{text}
        </motion.div>
    </motion.div>
}