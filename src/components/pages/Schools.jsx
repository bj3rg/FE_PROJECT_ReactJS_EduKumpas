import React from "react";
import { SchoolTypeCard } from "../mini-components/SchoolTypeCard";
import style from "../css/School.module.css";
import sampleLogo from "../../assets/test.jpg";
import { NavLink } from "react-router-dom";
import college from "../../assets/college.png";
import senior from "../../assets/senior.png";
import junior from "../../assets/junior.png";
import elem from "../../assets/elem.png";
import preschool from "../../assets/preschool.png";
export const Schools = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[80%] md:w-[60%] lg:w-[35%] mt-5 mb-5">
        <h1 className="text-center text-3xl text-blue-800 font-semibold">
          FIND YOUR DREAM SCHOOL NOW
        </h1>
        <p className="text-justify mt-5 leading-7">
          Discover your path to success with EduKumpas. Navigate through a
          plethora of educational opportunities from preschool to college. Build
          your future step by step, starting with the right education. Explore
          now and find your dream school on EduKumpas.
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col lg:flex-row gap-10 items-center ">
          <NavLink to="/schools/list-college" className={style.navLinkCustom}>
            <SchoolTypeCard
              imageUrl={college}
              schoolType="COLLEGE"
            ></SchoolTypeCard>
          </NavLink>
          <NavLink to="/schools/list-senior" className={style.navLinkCustom}>
            <SchoolTypeCard
              imageUrl={senior}
              schoolType="SENIOR HIGH SCHOOL"
            ></SchoolTypeCard>
          </NavLink>
          <NavLink to="/schools/list-junior" className={style.navLinkCustom}>
            <SchoolTypeCard
              imageUrl={junior}
              schoolType="JUNIOR HIGH SCHOOL"
            ></SchoolTypeCard>
          </NavLink>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
          <NavLink
            to="/schools/list-elementary"
            className={style.navLinkCustom}
          >
            {" "}
            <SchoolTypeCard
              imageUrl={elem}
              schoolType="ELEMENTARY"
            ></SchoolTypeCard>
          </NavLink>
          <NavLink to="/schools/list-preschool" className={style.navLinkCustom}>
            {" "}
            <SchoolTypeCard
              imageUrl={preschool}
              schoolType="PRESCHOOL"
            ></SchoolTypeCard>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Schools;
