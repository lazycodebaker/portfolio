"use client"

import { useState } from "react"
import { color } from "@/constants"
import { motion } from "framer-motion"

export default function Loading() {
    const [isVisible, setIsVisible] = useState<boolean>(true)
    return <>
        {isVisible && <motion.div
            initial={{
                opacity: 1,
            }}
            animate={{
                opacity: 0,
                transition: {
                    duration: 0.8,
                    delay: 0.8
                }
            }}
            onAnimationComplete={() => setIsVisible(false)}
            style={{
                backgroundColor: color.WHITE
            }}
            className="fixed top-0 left-0 w-screen h-screen">
            <div>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: [0, 0.25, 0.5, 0.75, 1],
                        transition: {
                            duration: 0.8,
                            times: [0, 0.3, 0.5, 0.7, 1],
                        },
                    }}
                    style={{
                        backgroundColor: color.BLACK
                    }}
                    className="h-[3px] w-full mt-[3px]" />
                <motion.div
                    initial={{
                        width: 0,
                        x: 0,
                    }}
                    animate={{
                        x: ["0%", "10%", "25%", "40%", "60%", "80%", "100%"],
                        width: ["0%", "10%", "25%", "40%", "60%", "80%", "100%"],
                        transition: {
                            duration: 0.8,
                            ease: "linear",
                            times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
                        }
                    }}
                    style={{
                        backgroundColor: color.WHITE
                    }}
                    className="h-[3px] w-full -mt-[3px]"
                />
            </div>
        </motion.div>}
    </>
}