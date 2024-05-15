import { useState } from "react";
import axios from "axios";
import FieldInput from "../../components/mini-components/FieldInput";
export const UpdateSchool = ({ school_id, school_name, onClose }) => {
  const [correct, setCorrect] = useState(false);
  const [exist, errorExist] = useState("");
  const [invalid, setInvalid] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [logoImg, setLogoImg] = useState(null);
  const [schoolImg, setSchoolImg] = useState(null);
  const [option, selectedOption] = useState();
  const [newSchool, setNewSchool] = useState({
    public_private: "",
    school_location: "",
    school_website: "",
    school_logo: null,
    school_image: null,
  });
  const handleChange = (e) => {
    selectedOption(e.target.value);
  };
  const handleFileChangeSchool = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSchoolImg(file);
    } else {
      setErrMsg("No image selected");
    }
  };
  const handleFileChangeLogo = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoImg(file);
    } else {
      setErrMsg("No image selected");
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!schoolImg) {
      alert("Image");
    }
    alert(schoolImg);

    const formData = new FormData();
    formData.append("school_name", school_name);
    formData.append("public_private", option);
    formData.append("school_website", newSchool.school_website);
    formData.append("school_logo", logoImg);
    formData.append("school_location", newSchool.school_location);
    formData.append("school_image", schoolImg);

    console.log("FormData", formData);
    try {
      const response = await axios.put(
        `https://bjerg.pythonanywhere.com/api/admin/schools/${school_id}`,
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
        errorExist("School already Listed");
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
          Update School Offer
        </h1>
      </div>
      <div className="flex flex-col gap-[10px]">
        {/* first row */}
        <div className="flex items-center gap-2">
          <label htmlFor="type">
            {" "}
            <span className="text-white text-lg"> Public Private</span>
          </label>
          <select
            id="type"
            className="form-control border-2 border rounded-md w-60 p-2"
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div className="w-full flex justify-between ">
          <FieldInput
            inputDisplay={"School Website"}
            type={"text"}
            handleChange={(e) => {
              setNewSchool((prev) => ({
                ...prev,
                school_website: e.target.value,
              }));
            }}
          />
        </div>
        {/* second row */}
        <div className="w-full flex justify-between ">
          <FieldInput
            inputDisplay={"School Location"}
            type={"text"}
            handleChange={(e) => {
              setNewSchool((prev) => ({
                ...prev,
                school_location: e.target.value,
              }));
            }}
          />
        </div>
        {/* third row */}
        <h1 className="text-lg text-white">Logo</h1>
        <div className="w-full flex justify-between mt-2">
          <input
            type="file"
            accept="image/jpeg, image/jpg, image/jpg"
            className="px-[5px] text-black h-[28px] bg-white rounded-[8px] w-[250px"
            onChange={handleFileChangeLogo}
          />
        </div>
        <h1 className="text-lg text-white">School</h1>
        <div className="w-full flex justify-between mt-2">
          <input
            title="MIMA"
            type="file"
            accept="image/jpeg, image/jpg, image/jpg"
            className="px-[5px] text-black h-[28px] bg-white rounded-[8px] w-[250px"
            onChange={handleFileChangeSchool}
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

export default UpdateSchool;
