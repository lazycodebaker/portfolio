
import Link from "next/link"
import { cubicBezier, motion } from "framer-motion"
import Underline from "../Animations/Underlines"
import FlipText from "../Animations/FlipText"
import { color, font } from "@/constants"
import { montrealThin } from "@/font"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathName = usePathname()
    const route = pathName?.split('/')[1]

    return <motion.nav
        initial={{
            opacity: 0,
            y: -10
        }}
        animate={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.5,
                ease: cubicBezier(0.83, 0, 0.17, 1),
            }
        }}
        style={{
            color: route === "info" ? color.WHITE : color.BLACK,
            fontSize: font.size.XXS,
            backgroundColor: "transparent",
            zIndex: "1000"
        }}
        className={`w-screen h-12 flex fixed top-0 left-0 uppercase font-semibold items-center justify-between px-4 ${montrealThin.className}`}>
        <Link href='/'>
            <FlipText>
                Anshuman Tiwari
            </FlipText></Link >
        <ul className="flex items-center gap-1 justify-center">
            <Link href="/works">
                <Underline>
                    works
                </Underline>
                <span> ,</span>
            </Link>
            <Link href="/info">
                <Underline>
                    info
                </Underline>
                <span> ,</span>
            </Link>
            <Link href="/contact">
                <Underline>
                    contact
                </Underline>
            </Link>
        </ul>
    </motion.nav>
}