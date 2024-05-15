import { SchoolsListCard } from "../mini-components/SchoolsListCard";

const School_List_Junior = () => {
  // Define state to hold the fetched data
  const schoolType = "Junior High School";
  return (
    <div className="flex flex-col justify-center items-center mb-20 mt-5">
      <div className="flex flex-col w-[80%] md:w-[50%] text-center gap-3">
        <h1 className="text-center text-3xl text-blue-800 font-semibold">
          {schoolType} in Batangas
        </h1>
        <p className="text-justify leading-7">
          Explore the best junior high schools in Batangas Province. Find
          schools that provide quality education and a supportive environment
          for your child's growth. Discover detailed information on curriculum,
          facilities, and faculty. Start your search for the ideal junior high
          school with EduKumpas today.
        </p>
      </div>
      <div className="mt-20 w-[80%]">
        <SchoolsListCard school_type={schoolType} />
      </div>
    </div>
  );
};

export default School_List_Junior;
