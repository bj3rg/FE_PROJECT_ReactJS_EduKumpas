import { SchoolsListCard } from "../mini-components/SchoolsListCard";

const School_List_Senior = () => {
  // Define state to hold the fetched data
  const schoolType = "Senior High School";
  return (
    <div className="flex flex-col justify-center items-center mb-20 mt-5">
      <div className="flex flex-col w-[80%] md:w-[50%] text-center gap-3">
        <h1 className="text-center text-3xl text-blue-800 font-semibold">
          {schoolType} in Batangas
        </h1>
        <p className="text-justify">
          Find the perfect senior high school for you in Batangas Province.
          Discover schools offering various strands and programs. Get detailed
          information on facilities, faculty, and extracurricular activities.
          Start your senior high school journey with EduKumpas today.
        </p>
      </div>
      <div className="mt-20 w-[80%]">
        <SchoolsListCard school_type={schoolType} />
      </div>
    </div>
  );
};

export default School_List_Senior;
