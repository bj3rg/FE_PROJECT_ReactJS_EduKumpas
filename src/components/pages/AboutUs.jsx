import React from "react";
import imageTest from "../../assets/test.jpg";
import style from "../css/AboutUs.module.css";
import angelo from "../../assets/image.jpg";
import juvy from "../../assets/juvy.jpg";
import renz from "../../assets/renz.jpg";
import benett from "../../assets/benett.jpg";
import ray from "../../assets/ray.jpg";
import { Footer } from "../Footer";
import { CompanyCard } from "../mini-components/CompanyCard";
export const AboutUs = () => {
  return (
    <body className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row md:justify-center text-justify items-center max-w-screen-lg w-[100%] md:w-[80%] xl:w-[60%] mt-10 sm:mt-15">
        <div className="w-[92%]">
          <h1 className="text-center text-4xl text-blue-800 font-semibold">
            Our Mission
          </h1>
          <p className="p-5">
            Our mission at EduKumpas is to empower students by providing
            transparent, accessible, and detailed information about educational
            institutions. We aim to facilitate seamless communication between
            students and schools, helping to uncover hidden costs and ensure an
            informed and stress-free school selection process.
          </p>
        </div>
        <img
          src={imageTest}
          alt=""
          className="object-scale-down h-[50%] w-[50%] rounded-md"
        />
      </div>

      <div className="flex flex-col md:flex-row md:justify-center text-justify items-center max-w-screen-lg w-[100%] md:w-[80%] xl:w-[60%] mt-10">
        <img
          src={imageTest}
          alt=""
          className="object-scale-down h-[50%] w-[50%] rounded-md"
        />
        <div className="w-[92%]">
          <h1 className="text-center mt-5 md:mt-14 text-4xl text-blue-800 font-semibold">
            Our Vision
          </h1>
          <p className="p-5">
            EduKumpas is committed to simplifying the school search process by
            providing a comprehensive platform that connects students with
            educational institutions. Our mission is to alleviate the common
            frustrations associated with finding the ideal school, such as the
            lack of detailed information, difficulty in communication, and the
            hidden costs of education.
          </p>
        </div>
      </div>

      <div className=" w-[80%] sm:w-[50%] lg:w-[25%] mt-20">
        <div className="text-center ">
          <h1 className="text-4xl text-blue-800 font-semibold">Our Team</h1>
          <p className="text-justify mt-5">
            Meet our dedicated team at EduKumpas, committed to simplifying the
            school search process. Together, we aim to empower students and
            parents by providing comprehensive and accessible educational
            information.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[80%] ">
        <div className=" flex flex-col md:flex-row justify-around items-center">
          <CompanyCard
            employeeName="Ray Allen Manalo"
            employeeDescription="Leads EduKumpas' strategic direction, operations, partnerships, and growth for mission fulfillment.
            "
            employeePosition="Chief Executive Officer"
            imageUrl={ray}
          ></CompanyCard>
          <CompanyCard
            employeeName="Juvylyn Hernandez"
            employeeDescription="Crafts and executes marketing strategies for maximum brand awareness and user engagement."
            employeePosition="Chief Marketing Officer"
            imageUrl={juvy}
          ></CompanyCard>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <CompanyCard
            employeeName="Benett Mission"
            employeeDescription="Manages financial health with expert planning, budgeting, and reporting for EduKumpas' sustainability.
            "
            employeePosition="Chief Financial Officer"
            imageUrl={benett}
          ></CompanyCard>
          <CompanyCard
            employeeName="Angelo Burog"
            employeeDescription="Ensures a scalable, secure, and high-performance platform by leading  technical development.
            "
            employeePosition="Chief Technical Officer"
            imageUrl={angelo}
          ></CompanyCard>
          <CompanyCard
            employeeName="Renz Lacsamana"
            employeeDescription="Oversees information systems and infrastructure, ensuring data integrity and driving technological innovation."
            employeePosition="Chief Information Officer"
            imageUrl={renz}
          ></CompanyCard>
        </div>
      </div>

      <div className="flex flex-col md:flex-col w-[80%] m-20 sm:w-[50%] lg:w-[25%] items-center ">
        <div className=" flex flex-col text-center items-center">
          <h1 className="text-4xl text-blue-800 font-semibold">Get in Touch</h1>
          <p className="text-justify mt-5">
            Contact EduKumpas for inquiries, partnerships, or support. Our
            dedicated team is prepared to assist you in finding educational
            solutions and enhancing your educational experience.
          </p>
        </div>
        <button className=" mt-5 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded transition duration-300 ease-in-out focus:outline-none">
          Mail Us
        </button>
      </div>
      <Footer></Footer>
    </body>
  );
};

export default AboutUs;
