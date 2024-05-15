import React from "react";
import OfferedCard from "../mini-components/OfferedCard";
import { useParams } from "react-router-dom";
import FacilitiesCard from "../mini-components/FacilitiesCard";
import ActivitiesCard from "../mini-components/ActivitiesCard";
import ClubsCard from "../mini-components/ClubsCard";
import NewsCard from "../mini-components/NewsCard";
import FeaturesCard from "../mini-components/Features";
import AdmissionCard from "../mini-components/AdmissionCard";
import { SchoolDetailBar } from "../mini-components/SchoolDetailBar";
import { useState, useEffect } from "react";

export const Main_School = () => {
  const { schoolName, id, school_location, public_private, school_image } =
    useParams();

  const decodedSchoolImage = decodeURIComponent(school_image);
  const [activeTab, setActiveTab] = useState("programs"); // Initial active tab

  useEffect(() => {
    const handlePopState = () => {
      const activeTabFromURL = window.location.pathname.split("/")[2]; // Extract active tab from URL
      setActiveTab(activeTabFromURL || "programs"); // Set active tab based on URL or default (programs)
    };

    window.addEventListener("popstate", handlePopState); // Listen for popstate event
    return () => window.removeEventListener("popstate", handlePopState); // Clean up on unmount
  }, []); // Empty dependency array to run effect only once

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    history.pushState(
      {},
      "",
      `/schools/${schoolName}/${id}/${school_location}/${public_private}/${encodeURIComponent(
        school_image
      )}`
    ); // Update URL with active tab
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "programs":
        return <OfferedCard schoolID={id} />;
      case "facilities":
        return <FacilitiesCard schoolID={id} />;
      case "admission":
        return <AdmissionCard schoolID={id} />;
      case "activities":
        return <ActivitiesCard schoolID={id} />;
      case "clubs":
        return <ClubsCard schoolID={id} />;
      case "news":
        return <NewsCard schoolID={id} />; // Assuming there's a NewsCard component
      case "features":
        return <FeaturesCard schoolID={id} />; // Assuming there's a FeaturesCard component
      default:
        return null; // Handle invalid tab names
    }
  };
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col md:flex-row justify-between w-[80%] mb-4">
        <div className="flex flex-col gap-2 w-[100%] md:w-[60%] justify-center">
          <h1 className="text-4xl break-words">{schoolName}</h1>
          <h5 className="text-xl break-words">{school_location}</h5>
          <h5 className="text-xl">{public_private} School</h5>
        </div>
        <div className="flex items-center">
          <img
            className="w-80 "
            src={`https://bjerg.pythonanywhere.com${decodedSchoolImage}`}
            alt=""
          />
        </div>
      </div>
      <div className="w-[80%] flex flex-col gap-10 mb-10">
        <SchoolDetailBar onTabClick={handleTabClick} activeTab={activeTab} />

        <div className="">{renderActiveComponent()}</div>
      </div>
    </div>
  );
};

export default Main_School;
