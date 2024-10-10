import { color } from "@/constants"
import { cubicBezier, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Underline({ children }: { children: React.ReactNode }) {
    const pathName = usePathname()
    const route = pathName.split('/')[1]

    const [hovered, setHovered] = useState<boolean>(false)
    // const [isBodyBlack, setIsBodyBlack] = useState<boolean>(false)

    useEffect(() => {
        /*
        if (route === "info") {
            setIsBodyBlack(true)
        } else {
            setIsBodyBlack(false)
        }
        */
    }, [route])

    return (
        <div
            className='relative inline-block'
            onMouseMove={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
            <motion.div
                initial={{
                    scaleX: 0
                }}
                animate={{
                    scaleX: hovered ? 1 : 0
                }}
                transition={{
                    duration: 0.4,
                    ease: cubicBezier(0.83, 0, 0.17, 1),
                    delay: 0.1
                }}
                style={{
                    backgroundColor: color.BLACK,
                    originX: 1
                }}
                className='absolute bottom-0 left-0 w-full h-[1px]'
            />
            <motion.div
                initial={{
                    scaleX: 0
                }}
                animate={{
                    scaleX: hovered ? 1 : 0
                }}
                transition={{
                    duration: 0.2,
                    ease: cubicBezier(0.83, 0, 0.17, 1),
                }}
                style={{
                    backgroundColor: color.BLACK,
                    originX: 0
                }}
                className='absolute bottom-0 left-0 w-full h-[1px]'
            />
        </div>
    )
}
