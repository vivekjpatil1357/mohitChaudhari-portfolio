'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import profileImage from '../public/profile.svg';

export default function OptimizedProfileImage({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-full overflow-hidden ${className}`}
    >
      <Image
        src={profileImage}
        alt="Mohit Chaudhari"
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIi8+PC9zdmc+"
        priority
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
}
