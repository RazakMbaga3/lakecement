// app/components/ui/Button.jsx
'use client'

import { motion } from 'framer-motion'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

// Button variants using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      intent: {
        primary: "bg-nyati-orange text-white hover:bg-orange-600 focus:ring-orange-500",
        secondary: "bg-nyati-navy text-white hover:bg-navy-700 focus:ring-navy-600",
        green: "bg-nyati-green text-white hover:bg-green-700 focus:ring-green-600",
        outline: "bg-transparent border-2 border-nyati-orange text-nyati-orange hover:bg-orange-50 focus:ring-orange-500",
        ghost: "bg-transparent text-nyati-orange hover:bg-orange-50 focus:ring-orange-500",
      },
      size: {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
        xl: "text-xl px-8 py-4",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export default function Button({
  children,
  className,
  intent,
  size,
  fullWidth,
  animate = true,
  ...props
}) {
  const ButtonComponent = animate ? motion.button : 'button';
  
  return (
    <ButtonComponent
      className={twMerge(buttonVariants({ intent, size, fullWidth }), className)}
      whileTap={animate ? { scale: 0.97 } : undefined}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
}