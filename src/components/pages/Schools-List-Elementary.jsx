import { SchoolsListCard } from "../mini-components/SchoolsListCard";

const School_List_Elementary = () => {
  // Define state to hold the fetched data
  const schoolType = "Elementary";
  return (
    <div className="flex flex-col justify-center items-center mb-20 mt-5">
      <div className="flex flex-col w-[80%] md:w-[50%] text-center gap-3">
        <h1 className="text-center text-3xl text-blue-800 font-semibold">
          {schoolType} in Batangas
        </h1>
        <p className="text-justify leading-7">
          Discover top elementary schools in Batangas Province on EduKumpas.
          Find schools that prioritize holistic development and academic
          excellence. Explore detailed profiles showcasing curriculum,
          extracurricular activities, and facilities. Start your search for the
          perfect elementary school that nurtures your child's potential and
          growth.
        </p>
      </div>
      <div className="mt-20 w-[80%]">
        <SchoolsListCard school_type={schoolType} />
      </div>
    </div>
  );
};

export default School_List_Elementary;
