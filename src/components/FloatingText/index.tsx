'use client'
import { color } from '@/constants'  
import { useTransform, motion, MotionValue } from 'framer-motion' 
import TextReveal from '../Animations/TextReveal'

export default function FloatingText({ scrollYProgress }: {
    scrollYProgress: MotionValue<number>
}) {
    return (
        <main className="overflow-hidden">
            <div className='h-[30vh]' />
            <div>
                <Slide direction={'left'} left={"-40%"} progress={scrollYProgress} />
                <Slide direction={'right'} left={"-25%"} progress={scrollYProgress} />
                <Slide direction={'left'} left={"-75%"} progress={scrollYProgress} />
            </div>
        </main>
    ) 
}

const Slide = (props: {
    direction: 'left' | 'right',
    left: string,
    progress: MotionValue<number>
}) => {
    const direction = props.direction == 'left' ? -1 : 1 
    const translateX = useTransform(props.progress, [0.3, 1], [150 * direction, -150 * direction])
    const translateY = useTransform(props.progress, [0.4, 0.6], [0, -250])

    return (
        <motion.div style={{ x: translateX, left: props.left, y: translateY }} className="relative flex whitespace-nowrap">
            <Phrase text={"Student"} />
            <Phrase text={"&"} />
            <Phrase text={"Developer"} />
            <Phrase text={"&"} />
            <Phrase text={"Student"} />
            <Phrase text={"&"} />
            <Phrase text={"Developer"} />
            <Phrase text={"&"} />
            <Phrase text={"Student"} />
            <Phrase text={"&"} />
            <Phrase text={"Developer"} />
        </motion.div>
    )
}

const Phrase = ({ text }: {
    text: string
}) => {
    return (
        <div className={'px-5 flex gap-2 items-center'}>
            <p style={{ color: color.WHITE, fontSize: "7.5rem" }} className={`text-[7.5vw] my-2 `}>
                <TextReveal text={text} key={text} lineHeight='6vw' />
            </p>
        </div>
    )
}