import { SchoolsListCard } from "../mini-components/SchoolsListCard";

const School_List_Preschool = () => {
  // Define state to hold the fetched data
  const schoolType = "Preschool";
  return (
    <div className="flex flex-col justify-center items-center mb-20 mt-5">
      <div className="flex flex-col w-[80%] md:w-[50%] text-center gap-3">
        <h1 className="text-2xl">{schoolType} in Batangas</h1>
        <p className="text-justify">
          Explore leading preschools in Batangas Province on EduKumpas. Discover
          schools dedicated to providing a nurturing and stimulating environment
          for your child's early education. View detailed profiles highlighting
          programs, facilities, and learning approaches. Start your search for
          the ideal preschool that lays the foundation for your child's lifelong
          learning journey.
        </p>
      </div>
      <div className="mt-20 w-[80%]">
        <SchoolsListCard school_type={schoolType} />
      </div>
    </div>
  );
};

export default School_List_Preschool;
