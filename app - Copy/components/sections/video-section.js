// app/components/sections/video-section.js
'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const mainVideo = {
  title: 'Hakuna kama Nyati',
  thumbnail: '/images/ad5.jpg',
  url: 'https://www.youtube.com/watch?v=wwhhmSObsQE&index=1&list=UUhjS00dKvqhw0uSoepoqIIQ'
}

const secondaryVideos = [
  {
    title: 'Kwa Ulinzi wa Nyumba',
    thumbnail: '/images/ad2.jpg',
    url: 'https://www.youtube.com/watch?v=JQ8AF8oIidE&list=UUhjS00dKvqhw0uSoepoqIIQ&index=2'
  },
  {
    title: 'Tofali Imara',
    thumbnail: '/images/ad1.jpg',
    url: 'https://www.youtube.com/watch?v=MguqzuS-WmE&list=UUhjS00dKvqhw0uSoepoqIIQ&index=3'
  }
]

const audioSpots = [
  {
    title: 'Radio 1',
    url: 'https://www.youtube.com/watch?v=swjoxIwbodI&list=UUhjS00dKvqhw0uSoepoqIIQ&index=5'
  },
  {
    title: 'Radio 2',
    url: 'https://www.youtube.com/watch?v=mOb6OFeI__Q&list=UUhjS00dKvqhw0uSoepoqIIQ&index=3'
  }
]

export default function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [activeTab, setActiveTab] = useState('videos')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section 
      ref={ref} 
      className="py-8 bg-gradient-to-b from-white to-gray-50 max-w-7xl mx-auto"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nyati-navy mb-2">
            Media Center
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our latest advertisements showcasing the strength and durability of Nyati Cement products. 
            See our brand in action through videos and listen to our radio spots.
          </p>
          
          {/* Tabs */}
          <div className="flex justify-center mt-2 border-b border-gray-200">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 font-medium text-sm transition-all duration-300 relative ${
                activeTab === 'videos' 
                  ? 'text-nyati-orange' 
                  : 'text-gray-500 hover:text-nyati-navy'
              }`}
            >
              Videos
              {activeTab === 'videos' && (
                <motion.span 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-nyati-orange "
                ></motion.span>
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('audio')}
              className={`px-6 py-3 font-medium text-sm transition-all duration-300 relative ${
                activeTab === 'audio' 
                  ? 'text-nyati-orange' 
                  : 'text-gray-500 hover:text-nyati-navy'
              }`}
            >
              Radio Spots
              {activeTab === 'audio' && (
                <motion.span 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-nyati-orange"
                ></motion.span>
              )}
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Videos Content */}
          {activeTab === 'videos' && (
            <motion.div 
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-0 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
            >
              {/* Featured Video */}
              <motion.div 
                className="lg:col-span-2"
                variants={itemVariants}
              >
                <motion.div 
                  className="bg-white rounded-sm shadow-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={mainVideo.thumbnail}
                      alt={mainVideo.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex items-center justify-center">
                      <motion.a 
                        href={mainVideo.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-20 h-20 rounded-full bg-nyati-orange/90 flex items-center justify-center transform transition-transform duration-500"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-nyati-navy mb-2">{mainVideo.title}</h3>
                    <p className="text-gray-600 mb-4">
                      Experience the strength and reliability of Nyati Cement in our featured advertisement.
                    </p>
                    <motion.a 
                      href={mainVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-semibold text-nyati-orange hover:text-nyati-navy transition-colors duration-300 group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span>Watch on YouTube</span>
                      <svg 
                        className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover/link:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Secondary Videos */}
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {secondaryVideos.map((video, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-sm shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                    variants={itemVariants}
                  >
                    <div className="flex flex-col sm:flex-row lg:flex-col">
                      <div className="sm:w-1/3 lg:w-full aspect-video relative">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.a 
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="w-12 h-12 rounded-full bg-nyati-orange flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </motion.a>
                        </div>
                      </div>
                      <div className="p-4 sm:w-2/3 lg:w-full">
                        <h3 className="font-bold text-sm text-nyati-navy mb-1">{video.title}</h3>
                        <motion.a 
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="text-sm inline-flex items-center font-medium text-nyati-orange hover:text-nyati-navy transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          <span>Watch Video</span>
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="text-center pt-4"
                  variants={itemVariants}
                >
                  <motion.a 
                    href="https://www.youtube.com/channel/UChjS00dKvqhw0uSoepoqIIQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-nyati-navy hover:bg-nyati-orange text-white px-6 py-3 rounded-sm transition-colors duration-300 shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    <span>Visit Our YouTube Channel</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* Audio Content */}
          {activeTab === 'audio' && (
            <motion.div 
              key="audio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <motion.div 
                className="max-w-4xl mx-auto bg-gradient-to-br from-nyati-navy to-navy-700 rounded-sm shadow-xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="w-48 h-48 mx-auto relative">
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-nyati-orange/20"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      ></motion.div>
                      <motion.div 
                        className="absolute inset-4 rounded-full bg-nyati-orange/40"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      ></motion.div>
                      <motion.div 
                        className="absolute inset-8 rounded-full bg-nyati-orange/60"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      ></motion.div>
                      <div className="absolute inset-12 rounded-full bg-nyati-orange flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="text-2xl font-bold mb-4 text-nyati-orange">Nyati Cement Radio Commercials</h3>
                    <p className="text-white/80 mb-6">
                      Listen to our popular radio advertisements that highlight the quality, strength, and reliability of Nyati Cement products. Our commercials emphasize why Nyati Cement is the preferred choice for construction projects across Tanzania and neighboring countries.
                    </p>
                    <p className="text-white/80">
                      Click on any of the radio spots below to listen to our advertisements on YouTube.
                    </p>
                  </div>
                </div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {audioSpots.map((spot, index) => (
                    <motion.a 
                      key={index}
                      href={spot.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-sm p-6 transition-all duration-300 group"
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center">
                        <motion.div 
                          className="mr-4 w-12 h-12 rounded-sm bg-nyati-orange flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1zm-4 0c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1zm-4 0c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1z"/>
                          </svg>
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-bold">{spot.title}</h4>
                          <p className="text-white/60 text-sm">Listen on YouTube</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}