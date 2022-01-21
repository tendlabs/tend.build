import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"

const Layout = ({ children }) => {
  const path = useRouter().pathname

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={path}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: .25}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Layout
