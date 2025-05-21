'use client'

import { motion } from 'framer-motion';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

export default function ShareButtons({ url, title }) {
  const shareButtonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      className="flex gap-4 items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <span className="text-gray-600 font-medium">Share:</span>
      <motion.div variants={shareButtonVariants} whileHover="hover" whileTap="tap">
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </motion.div>

      <motion.div variants={shareButtonVariants} whileHover="hover" whileTap="tap">
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </motion.div>

      <motion.div variants={shareButtonVariants} whileHover="hover" whileTap="tap">
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </motion.div>

      <motion.div variants={shareButtonVariants} whileHover="hover" whileTap="tap">
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </motion.div>
    </motion.div>
  );
}
