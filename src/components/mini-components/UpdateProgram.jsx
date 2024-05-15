import React, { useState } from "react";
import axios from "axios";
import FieldInput from "../../components/mini-components/FieldInput";
export const UpdateProgram = ({ school_id, school_name, program, onClose }) => {
  const [correct, setCorrect] = useState(false);
  const [exist, errorExist] = useState("");
  const [invalid, setInvalid] = useState("");
  const [newProgram, setNewProgram] = useState({
    school: school_id || "",
    program_name: program ? program.program_name : "",
    program_description: program ? program.program_description : "",
    tuition_fee_start_range: program ? program.tuition_fee_start_range : "",
    tuition_fee_end_range: program ? program.tuition_fee_end_range : "",
    duration: program ? program.duration : "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("school", newProgram.school);
    formData.append("program_name", newProgram.program_name);
    formData.append("program_description", newProgram.program_description);
    formData.append(
      "tuition_fee_start_range",
      newProgram.tuition_fee_start_range
    );
    formData.append("tuition_fee_end_range", newProgram.tuition_fee_end_range);
    formData.append("duration", newProgram.duration);

    console.log("FormData", formData);
    try {
      const response = await axios.put(
        `https://bjerg.pythonanywhere.com/api/admin/offered/${program.id}`,
        formData,
        {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        }
      );
      alert("Updated Successfully");
      setCorrect(false);
      onClose();

      window.location.reload();
    } catch (error) {
      if (error.response && error.response.status === 406) {
        errorExist("Program already Listed");
        setInvalid("");
        setCorrect(true);
      } else {
        setInvalid("Invalid input");
        errorExist("");
        setCorrect(true);
        console.log("Error:", error);
      }
    }
  };
  return (
    <div className=" w-full lg:w-[750px] bg-gray-400 px-[30px] py-[30px]  rounded-[15px] z-[99]">
      <div className="text-white mb-[10px] flex flex-col gap-[3px]">
        <h1 className="font-bold border-b-2 border-solid border-white text-[16px]">
          Update Programs Offer
        </h1>
      </div>
      <div className="flex flex-col gap-[10px]">
        {/* first row */}
        <div className="w-full flex justify-between ">
          <FieldInput
            inputDisplay={"School"}
            type={"text"}
            value={school_name}
            handleChange={(e) => {
              setNewProgram((prev) => ({
                ...prev,
                school: e.target.value,
              }));
            }}
          />
        </div>
        <div className="w-full flex justify-between ">
          <FieldInput
            inputDisplay={"Program Name"}
            type={"text"}
            value={newProgram.program_name || ""}
            handleChange={(e) => {
              setNewProgram((prev) => ({
                ...prev,
                program_name: e.target.value,
              }));
            }}
          />
        </div>
        {/* second row */}
        <div className="w-full flex justify-between ">
          <FieldInput
            inputDisplay={"Program Description"}
            type={"text"}
            value={newProgram.program_description || ""}
            handleChange={(e) => {
              setNewProgram((prev) => ({
                ...prev,
                program_description: e.target.value,
              }));
            }}
          />
        </div>
        {/* third row */}
        <div className="w-full flex justify-between ">
          <FieldInput
            inputDisplay={"Tuition Fee Start Range per year"}
            type={"number"}
            value={newProgram.tuition_fee_start_range || ""}
            handleChange={(e) => {
              setNewProgram((prev) => ({
                ...prev,
                tuition_fee_start_range: e.target.value,
              }));
            }}
          />
        </div>
        <div className="w-full flex justify-between ">
          <FieldInput
            inputDisplay={"Tuition Fee End Range per year"}
            type={"number"}
            value={newProgram.tuition_fee_end_range || ""}
            handleChange={(e) => {
              setNewProgram((prev) => ({
                ...prev,
                tuition_fee_end_range: e.target.value,
              }));
            }}
          />
        </div>
        <div className="w-full flex justify-between ">
          <FieldInput
            inputDisplay={"Duration"}
            type={"text"}
            value={newProgram.duration || ""}
            handleChange={(e) => {
              setNewProgram((prev) => ({
                ...prev,
                duration: e.target.value,
              }));
            }}
          />
        </div>
        {/* fourth row */}
        {correct && (
          <div className="bg-[#F5656561] w-[200px] mt-2 text-sm border-[1px] border-[#FF000061] px-[20px] py-[5px] rounded-md">
            <h1>
              {invalid}
              {exist}
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

export default UpdateProgram;
