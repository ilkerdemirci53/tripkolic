import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = {
  id: string;
  label: string;
};

const tabs: Tab[] = [
  { id: "personal", label: "Personal" },
  { id: "bookings", label: "Bookings" },
  { id: "reviews", label: "Reviews" },
  { id: "settings", label: "Settings" },
  { id: "notifications", label: "Notifications" },
];

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({
  activeTab,
  setActiveTab,
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="flex flex-col space-y-2 border border-gray-200 rounded-xl p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {tabs.map((tab) => (
        <motion.div
          key={tab.id}
          className="relative"
          variants={itemVariants}
          animate={{ scale: activeTab === tab.id ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <AnimatePresence>
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-primaryColor rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </AnimatePresence>
          <motion.button
            className={`py-3 px-6 text-left rounded-xl transition-colors relative z-10 w-full ${
              activeTab === tab.id
                ? "text-black font-bold"
                : "text-gray-700 hover:text-black"
            }`}
            onClick={() => setActiveTab(tab.id)}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProfileTabs;
