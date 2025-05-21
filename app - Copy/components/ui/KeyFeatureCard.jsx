// app/components/ui/KeyFeatureCard.jsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function KeyFeatureCard({ icon, title, index }) {
  return (
    <motion.div 
      className="bg-white rounded-none shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="p-6 flex flex-col items-center text-center">
        <motion.div 
          className="relative h-20 w-20 mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image 
            src={icon} 
            alt={`${title} Icon`} 
            fill
            className="object-contain"
          />
        </motion.div>
        <h3 className="font-bold text-lg text-nyati-navy">{title}</h3>

      </div>
    </motion.div>
  )
}