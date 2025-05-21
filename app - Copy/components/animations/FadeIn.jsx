// app/components/animations/FadeIn.jsx
'use client'

import { motion } from 'framer-motion'

export default function FadeIn({ children, delay = 0, duration = 0.5, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}