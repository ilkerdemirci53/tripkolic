import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProfileInfoProps {
  name: string;
  status: string;
  avatar: string;
  rating: number;
  reviews: number;
  yearsHosting: number;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name,
  status,
  avatar,
  rating,
  reviews,
  yearsHosting,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="bg-white px-6 py-3 rounded-xl border border-gray-200 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="mb-4 flex justify-center" variants={itemVariants}>
        <Image
          src={avatar}
          alt="Profile Picture"
          width={80}
          height={80}
          className="rounded-full background"
        />
      </motion.div>
      <motion.h2 className="text-2xl font-bold mb-2" variants={itemVariants}>
        {name}
      </motion.h2>
      <motion.p className="text-gray-600 mb-6" variants={itemVariants}>
        {status}
      </motion.p>

      <motion.div className="flex justify-around" variants={containerVariants}>
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-xl font-bold">{rating.toFixed(2)}</p>
          <p className="text-sm text-gray-500">Rating</p>
        </motion.div>
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-xl font-bold">{reviews}</p>
          <p className="text-sm text-gray-500">Reviews</p>
        </motion.div>
        <motion.div className="text-center" variants={itemVariants}>
          <p className="text-xl font-bold">{yearsHosting}</p>
          <p className="text-sm text-gray-500">Years hosting</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileInfo;
