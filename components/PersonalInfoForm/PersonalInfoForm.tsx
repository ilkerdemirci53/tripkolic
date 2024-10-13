"use client";
import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface InfoData {
  name: string;
  surname: string;
  country: string;
  birthday: string;
  passportNumber: string;
  phoneNumber: string;
}

interface InfoSectionProps {
  title: string;
  data: InfoData;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Backend eklenince burada logic yazılacak.
    console.log("Submitted data:", editedData);
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2, ease: "easeInOut" },
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2, ease: "easeInOut", delay: 0.1 },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <motion.button
          onClick={() => setIsEditing(!isEditing)}
          className="text-black bg-gray-100 p-3 rounded-full hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaPen />
        </motion.button>
      </div>
      <AnimatePresence initial={false}>
        <motion.div
          key={isEditing ? "form" : "info"}
          variants={formVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="overflow-hidden"
        >
          {isEditing ? (
            <form className="p-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(editedData).map(([key, value]) => (
                  <div
                    key={key}
                    className={
                      key === "name" || key === "surname" ? "" : "col-span-2"
                    }
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                ))}
              </div>
              <motion.button
                type="submit"
                className="mt-4 bg-primaryColor text-black px-4 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Save Changes
              </motion.button>
            </form>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(data).map(([key, value]) => (
                <div
                  key={key}
                  className={
                    key === "name" || key === "surname" ? "" : "col-span-2"
                  }
                >
                  <span className="font-semibold">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>{" "}
                  {value}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const PersonalInfoForm: React.FC = () => {
  const personalInfo = {
    name: "John",
    surname: "Doe",
    country: "America",
    birthday: "12 June 1989",
    passportNumber: "AB1234567",
    phoneNumber: "+1 (555) 123-4567",
  };

  const passengersInfo = {
    name: "Jane",
    surname: "Doe",
    country: "Canada",
    birthday: "15 July 1990",
    passportNumber: "CD7654321",
    phoneNumber: "+1 (555) 987-6543",
  };

  return (
    <div>
      <InfoSection title="Informations" data={personalInfo} />
      <InfoSection title="Passengers" data={passengersInfo} />
    </div>
  );
};

export default PersonalInfoForm;
