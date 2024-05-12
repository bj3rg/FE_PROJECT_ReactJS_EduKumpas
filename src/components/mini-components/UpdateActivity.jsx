import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios

import FieldInput from "./FieldInput";

function UpdateActivity({ school_id, school_name, activity, onClose }) {
  const [correct, setCorrect] = useState(false);
  const [exist, errorExist] = useState("");
  const [invalid, setInvalid] = useState("");
  const [image, setImage] = useState(null);
  const [errMsg, setErrMsg] = useState("");

  const [newActivity, setNewActivity] = useState({
    school: school_id || "",
    activity_name: activity ? activity.activity_name : "",
    activity_description: activity ? activity.activity_description : "",
    activity_image: null,
  });
  useEffect(() => {
    if (activity && activity.activity_image) {
      setNewActivity((prev) => ({
        ...prev,
        activity_image: activity.activity_image,
      }));
    }
  }, [activity]);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setErrMsg("no Image Selected");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!image) {
      setErrMsg("No image selected");
      return;
    }
    const formData = new FormData();
    formData.append("school", newActivity.school);
    formData.append("activity_name", newActivity.activity_name);
    formData.append("activity_description", newActivity.activity_description);
    if (image) {
      formData.append("activity_image", image);
    }
    try {
      const response = await axios.put(
        `https://bjerg.pythonanywhere.com/api/admin/activities/${activity.id}`,
        formData,
        {
          headers: {
            Authorization: `Token ${sessionStorage.getItem("token")}`,
          },
        }
      );
      alert("Updated Successfully");
      onClose();
      setCorrect(false);
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.status === 406) {
        errorExist("Program already Listed");
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
    <div className="w-full lg:w-[750px] bg-orange-400 mt-500 px-[30px] py-[30px] rounded-[15px] z-[99]">
      <div className="text-white mb-[10px] flex flex-col gap-[3px]">
        <h1 className="font-bold border-b-2 border-solid border-white text-[16px]">
          Add activity
        </h1>
      </div>
      <div className="flex flex-col gap-[10px] ">
        {/* first row */}
        <div className="w-full flex justify-between">
          <FieldInput
            inputDisplay={"School"}
            type={"text"}
            value={school_name}
            handleChange={(e) => {
              setNewActivity((prev) => ({
                ...prev,
                school: e.target.value,
              }));
            }}
          />
        </div>
        <div className="w-full flex justify-between">
          <FieldInput
            inputDisplay={"Activity Name"}
            type={"text"}
            value={newActivity.activity_name || ""}
            handleChange={(e) =>
              setNewActivity((prev) => ({
                ...prev,
                activity_name: e.target.value,
              }))
            }
          />
        </div>
        {/* second row */}
        <div className="w-full flex justify-between">
          <FieldInput
            inputDisplay={"Activity Description"}
            type={"text"}
            value={newActivity.activity_description || ""}
            handleChange={(e) =>
              setNewActivity((prev) => ({
                ...prev,
                activity_description: e.target.value,
              }))
            }
          />
        </div>
        {/* third row */}
        <div className="w-full flex justify-between mt-2">
          <input
            type="file"
            accept="image/jpeg, image/jpg, image/jpg"
            className="px-[5px] text-black h-[28px] bg-white rounded-[8px] w-[250px"
            onChange={handleFileChange}
          />
        </div>
        {newActivity.activity_image && (
          <div className="mt-2">
            <img
              src={`https://bjerg.pythonanywhere.com/media/${newActivity.activity_image}`}
              alt="Activity Image"
              className="max-w-[250px] max-h-[150px]"
            />
          </div>
        )}
        {correct && (
          <div className="bg-[#F5656561] w-[200px] mt-2 text-sm border-[1px] border-[#FF000061] px-[20px] py-[5px] rounded-md">
            <h1>
              {exist}
              {invalid}
            </h1>
          </div>
        )}
        {/* fourth row */}
        <div className="w-full flex gap-[20px] mt-5 justify-between">
          <button
            className="p-[5px] bg-white rounded-[10px] text-black min-w-[70px] cursor-pointer"
            onClick={handleUpdate}
          >
            Add
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
}

export default UpdateActivity;
