import { color } from "@/constants"
import { cubicBezier, Variants } from "framer-motion"

export const perspective: Variants = {
    initial: { 
        y: 0,
    },
    enter: { 
        y: 0, 
    },
    exit: { 
        y: -150,
        opacity: 0.2,
        backgroundColor : color.BLACK,
        transition: {
            duration: 1.8,
            ease: cubicBezier(0.83, 0, 0.17, 1), 
        }
    }
}

export const slide: Variants = {
    initial: {
        y: "100vh",
    },
    enter: {
        y: "100vh"
    },
    exit: {
        y: 0,
        transition: {
            duration: 1.8,
            ease: cubicBezier(0.83, 0, 0.17, 1),
            delay : 0.1
        }
    }
}

export const opacity: Variants = {
    initial: {
        opacity: 1
    },
    enter: {
        opacity: 1,
        transition: {
            duration:1.2,
            ease: "linear"
        }
    },
    exit: {
        opacity: 1
    }
}