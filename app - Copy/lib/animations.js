'use client'

import { useEffect, useRef, useState } from 'react'

// Hook for scroll animations
export function useScrollAnimation(options = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isVisible]
}

// Hook for counter animation
export function useCounter(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    let animationFrameId

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      
      setCount(Math.floor(percentage * (end - start) + start))

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(updateCount)
      }
    }

    animationFrameId = requestAnimationFrame(updateCount)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [end, duration, start, isVisible])

  return [ref, count]
}

// Hook for element parallax effect
export function useParallax(speed = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const element = ref.current
      if (element) {
        element.style.transform = `translateY(${scrollY * speed}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return ref
}

// Hook for staggered animation of multiple elements
export function useStaggeredAnimation(itemsCount, staggerDelay = 100) {
  const itemsRef = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, itemsCount)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          itemsRef.current.forEach((item, index) => {
            if (item) {
              setTimeout(() => {
                item.classList.add('animate-fade-in')
                item.classList.remove('opacity-0')
              }, index * staggerDelay)
            }
          })
          
          if (containerRef.current) {
            observer.unobserve(containerRef.current)
          }
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [itemsCount, staggerDelay])

  return [containerRef, itemsRef]
}