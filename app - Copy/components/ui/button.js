import Link from 'next/link'

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-nyati-orange focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-nyati-orange text-white hover:bg-nyati-dark-blue shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-nyati-orange text-nyati-orange hover:bg-nyati-orange hover:text-white',
    outline: 'border-2 border-nyati-dark-blue text-nyati-dark-blue hover:bg-nyati-dark-blue hover:text-white',
    ghost: 'text-nyati-dark-blue hover:bg-nyati-light-grey',
    link: 'text-nyati-orange hover:text-nyati-dark-blue underline-offset-4 hover:underline',
  }
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}