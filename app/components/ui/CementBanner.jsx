// app/components/ui/CementBanner.jsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function CementBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  
  return (
    <div className="w-75% my-16" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="relative w-full h-40 md:h-64 overflow-hidden rounded-sm shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/BGfooter.png"
            alt="Lake Cement Banner"
            fill
            className="object-cover"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-nyati-navy/30 to-transparent"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  )
}