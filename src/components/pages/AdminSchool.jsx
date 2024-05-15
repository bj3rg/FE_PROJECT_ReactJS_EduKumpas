import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import editIcon from "../../assets/edit.png";
import Admin_Navbar from "../mini-components/AdminNavbar";
import UpdateSchoolModal from "../mini-components/UpdateSchool";
export const AdminSchool = () => {
  const [data, setData] = useState([]);
  const [schoolId, setSchoolId] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const { email } = useParams();
  const [showSchoolModal, setShowSchoolModal] = useState(false);

  const [selectedSchoolId, setSelectedSchoolId] = useState(null);

  const closeModal = () => {
    setShowSchoolModal(false);
    window.location.reload();
  };

  const handleEditSchool = async (id) => {
    setSelectedSchoolId(id);
    setShowSchoolModal(true);
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    // SCHOOL
    axios
      .get(`https://bjerg.pythonanywhere.com/api/admin/schools/${email}`, {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data[0]);
        const schoolData = res.data[0];
        const school_id = schoolData.id;
        const school_name = schoolData.school_name;
        setSchoolName(school_name);
        setSchoolId(school_id);
        setData(res.data);
      });
  }, []);

  return (
    <div>
      <Admin_Navbar
        email={email}
        school_id={schoolId}
        school_name={schoolName}
      />
      <div className="flex flex-col justify-center items-center">
        <div className="text-center text-xl">
          <h1>School Profile Page </h1>
        </div>
        <div className="flex justify-center mt-12">
          <table className="table-auto border w-[1400px]">
            <thead>
              <tr className="header-row text-left">
                <th className="p-2 border border-slate-600 w-1/4 text-center">
                  School Name
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td className="p-2 text-center text-xl">{d.school_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-16">
          <table className="table-auto border w-[1400px]">
            <thead>
              <tr className="header-row text-left text-center">
                <th className="p-2 border border-slate-600 w-1/4">
                  School Website
                </th>
                <th className="p-2 border border-slate-600 w-1/4">
                  School Address
                </th>
                <th className="p-2 border border-slate-600 w-1/4">
                  School Type
                </th>
                <th className="p-2 border border-slate-600 ">Public/Private</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td className="p-2">{d.school_website}</td>
                  <td className="p-2">{d.school_location}</td>
                  <td className="p-2">{d.school_type}</td>
                  <td className="p-2">{d.public_private}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-16 ">
          <table className="table-auto border w-[1400px] text-ce">
            <thead>
              <tr className="header-row text-left text-center">
                <th className="p-2 border border-slate-600 w-1/4">
                  School Rep Email
                </th>
                <th className="p-2 border border-slate-600 w-1/4">
                  School Rep Contact
                </th>
                <th className="p-2 border border-slate-600 w-1/4">
                  School Logo
                </th>
                <th className="p-2 border border-slate-600 w-1/4">
                  School Image
                </th>

                <th className="p-2 border border-slate-600"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td className="p-2">{d.school_rep_email}</td>
                  <td className="p-2">{d.school_rep_phone_num}</td>

                  <td className="p-2">
                    <img
                      className="w-1/2 h-3/4"
                      src={`https://bjerg.pythonanywhere.com/${d.school_logo}`}
                      alt=""
                    />
                  </td>
                  <td className="p-2">
                    <img
                      className="w-1/2 h-3/4"
                      src={`https://bjerg.pythonanywhere.com/${d.school_image}`}
                      alt=""
                    />
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => handleEditSchool(d.id)}
                      className="w-8"
                    >
                      <img src={editIcon} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showSchoolModal && selectedSchoolId && (
          <UpdateSchoolModal
            onClose={closeModal}
            school_name={schoolName}
            school_id={schoolId}
          />
        )}
      </div>
    </div>
  );
};

export default AdminSchool;
