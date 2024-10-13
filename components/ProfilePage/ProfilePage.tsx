"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfileTabs from "../../components/ProfileTabs/ProfileTabs";
import PersonalInfoForm from "../../components/PersonalInfoForm/PersonalInfoForm";

type TabContent = {
  [key: string]: React.FC;
};

const tabContent: TabContent = {
  // Burada, secilen tab'e gore componentler render edilir.
  personal: PersonalInfoForm,
  bookings: () => <div>Bookings</div>,
  reviews: () => <div>Reviews</div>,
  settings: () => <div>Settings</div>,
  notifications: () => <div>Notifications</div>,
};

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("personal");

  const ActiveTabContent = tabContent[activeTab];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4 space-y-3">
          <ProfileInfo
            name="Orca Travel Co.ltd"
            status="Super Host"
            avatar="/avatar.png"
            rating={4.8}
            reviews={100}
            yearsHosting={4}
          />
          <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="md:w-3/4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ActiveTabContent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
