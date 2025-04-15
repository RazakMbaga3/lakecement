// app/components/ui/Logo.jsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo({
  variant = 'default', // 'default', 'orange', 'green', 'white'
  size = 'md',
  animate = true,
  className = '',
  ...props
}) {
  const sizes = {
    sm: { width: 80, height: 47 },
    md: { width: 120, height: 70 },
    lg: { width: 160, height: 93 },
  };

  const logoSrc = variant === 'default' 
    ? '/images/logo.jpg' 
    : variant === 'orange'
    ? '/images/logo-orange.png'
    : variant === 'green'
    ? '/images/logo-green.png'
    : '/images/logo-white.png';

  const dimensions = sizes[size];

  if (!animate) {
    return (
      <Link href="/" className={className} {...props}>
        <Image
          src={logoSrc}
          alt="Nyati Cement Logo"
          width={dimensions.width}
          height={dimensions.height}
          priority
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={className} {...props}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Image
          src={logoSrc}
          alt="Nyati Cement Logo"
          width={dimensions.width}
          height={dimensions.height}
          priority
        />
      </motion.div>
    </Link>
  );
}