import React, { useEffect, useState } from "react";
import axios from "axios";
import FieldInput from "../../components/mini-components/FieldInput";
export const UpdateAdmission = ({
  key,
  school_id,
  school_name,
  admission,
  onClose,
}) => {
  const [invalid, setInvalid] = useState("");
  const [exist, errorExist] = useState("");
  const [correct, setCorrect] = useState(false);
  const [newData, setNewData] = useState();
  if (!admission) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    setNewData(admission);
  }, [admission]);

  const [newAdmission, setNewAdmission] = useState({
    school: school_id || "",
    name: admission ? admission.name : "", // Use optional chaining here
    description: admission ? admission.description : "",
    fee: admission ? admission.fee : "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("This is school id", school_id, admission.id);
    console.log(admission);

    const formData = new FormData();
    formData.append("school", newAdmission.school);
    formData.append("name", newAdmission.name);
    formData.append("description", newAdmission.description);
    formData.append("fee", newAdmission.fee);

    try {
      const response = await axios.put(
        `https://bjerg.pythonanywhere.com/api/admin/admission/${admission.id}/`, // Update endpoint with admission ID
        formData,
        {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        }
      );
      alert("Updated Successfully");
      onClose(); // Close the modal or form after updating
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.status === 406) {
        errorExist("Expenses Listed");
        setInvalid("");
        setCorrect(true);
      } else {
        setInvalid("Complete the fields");
        errorExist("");
        setCorrect(true);
        console.log("Error:", error);
      }
    }
  };
  return (
    <div className="w-full lg:w-[750px] bg-orange-400 mt-500 px-[30px] py-[30px]  rounded-[15px] z-[99]">
      <div className="text-white mb-[10px] flex flex-col gap-[3px]">
        <h1 className="font-bold border-b-2 border-solid border-white text-[16px]">
          Add Admission Process
        </h1>
      </div>
      <div className="flex flex-col gap-[10px]">
        {/* first row */}
        {/* <div className="w-full flex justify-between">
          <FieldInput
            inputDisplay={"School"}
            type={"text"}
            value={school_name}
            handleChange={(e) => {
              setNewAdmission((prev) => ({
                ...prev,
                school: e.target.value,
              }));
            }}
          />
        </div> */}
        <div className="w-full flex justify-between ">
          <FieldInput
            inputDisplay={"Name"}
            type={"text"}
            value={newAdmission.name || ""}
            handleChange={(e) => {
              setNewAdmission((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
          />
        </div>
        {/* second row */}
        <div className="w-full flex justify-between ">
          <FieldInput
            inputDisplay={"Description"}
            value={newAdmission.description || ""}
            type={"text"}
            handleChange={(e) => {
              setNewAdmission((prev) => ({
                ...prev,
                description: e.target.value,
              }));
            }}
          />
        </div>
        {/* third row */}
        <div className="w-full flex justify-between ">
          <FieldInput
            inputDisplay={"Fee"}
            value={newAdmission.fee || ""}
            type={"number"}
            handleChange={(e) => {
              setNewAdmission((prev) => ({ ...prev, fee: e.target.value }));
            }}
          />
        </div>
        {/* fourth row */}
        {correct && (
          <div className="bg-[#F5656561] w-[200px] mt-2 text-sm border-[1px] border-[#FF000061] px-[20px] py-[5px] rounded-md">
            <h1>
              {exist}
              {invalid}
            </h1>
          </div>
        )}
        <div className="w-full flex gap-[20px] mt-5 justify-between">
          <button
            onClick={handleUpdate}
            className="p-[5px] bg-white rounded-[10px] text-black min-w-[70px] cursor-pointer"
          >
            Update
          </button>
          <button
            onClick={onClose}
            className="p-[5px] bg-white rounded-[10px] text-black min-w-[70px] cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateAdmission;
