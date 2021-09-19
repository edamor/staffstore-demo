import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

export const Motion = ({children, ...props}) => {
  return (
    <motion.div
      {...props}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.div>
  );
}