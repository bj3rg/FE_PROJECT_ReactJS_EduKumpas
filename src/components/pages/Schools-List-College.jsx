import { useParams } from "react-router-dom";
import { SchoolsListCard } from "../mini-components/SchoolsListCard";

const School_List_College = () => {
  // const { schoolType } = useParams;
  const schoolType = "College";
  return (
    <div className="flex flex-col justify-center items-center mb-20 mt-5">
      <div className="flex flex-col w-[80%] md:w-[50%] text-center gap-3">
        <h1 className="text-center text-3xl text-blue-800 font-semibold">
          {schoolType} in Batangas
        </h1>
        <p className="text-justify leading-7">
          Discover the best colleges and universities in Batangas Province.
          Explore a wide range of educational institutions offering diverse
          courses and programs. Find detailed information on admission
          requirements, facilities, and more. Start your journey to higher
          education with EduKumpas.
        </p>
      </div>
      <div className="mt-20 w-[80%]">
        <SchoolsListCard school_type={schoolType} />
      </div>
    </div>
  );
};

export default School_List_College;
