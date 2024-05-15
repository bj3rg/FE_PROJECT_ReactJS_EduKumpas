import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import editIcon from "../../assets/edit.png";
import Admin_Navbar from "../mini-components/AdminNavbar";
import UpdateAdmissionModal from "../mini-components/UpdateAdmission";
import UpdateActivityModal from "../mini-components/UpdateActivity";
import UpdateOfferedModal from "../mini-components/UpdateProgram";
import UpdateFacilityModal from "../mini-components/UpdateFacility";
import UpdateClubModal from "../mini-components/UpdateClubs";
import UpdateNewsModal from "../mini-components/UpdateNews";
export const Admin = () => {
  const [exp, setExp] = useState([]);
  const [offer, setOffer] = useState([]);
  const [facility, setFacility] = useState([]);
  const [activity, setActivity] = useState([]);
  const [news, setNews] = useState([]);
  const [club, setClub] = useState([]);
  const [schoolId, setSchoolId] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const { email, school } = useParams();
  const [showAdmissionModal, setShowAdmissionModal] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showOfferedModal, setShowOfferedModal] = useState(false);
  const [showFacilityModal, setShowFacilityModal] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [showClubsModal, setShowClubsModal] = useState(false);

  const [selectedAdmissionId, setSelectedAdmissionId] = useState(null);
  const [selectedActivityId, setSelectedActivityId] = useState(null);
  const [selectedOfferedId, setSelectedOfferedId] = useState(null);
  const [selectedFacilityId, setSelectedFacilityId] = useState(null);
  const [selectedNewsId, setSelectedNewsId] = useState(null);
  const [selectedClubsId, setSelectedClubsId] = useState(null);

  const closeModal = () => {
    setShowActivityModal(false);
    setShowAdmissionModal(false);
    setShowClubsModal(false);
    setShowFacilityModal(false);
    setShowNewsModal(false);
    setShowOfferedModal(false);
    setShowSchoolModal(false);
    window.location.reload();
  };
  const handleEditAdm = async (id) => {
    setSelectedAdmissionId(id);
    setShowAdmissionModal(true);
  };
  const handleEditActi = async (id) => {
    setSelectedActivityId(id);
    setShowActivityModal(true);
  };
  const handleEditFaci = async (id) => {
    setSelectedFacilityId(id);
    setShowFacilityModal(true);
  };
  const handleEditClubs = async (id) => {
    setSelectedClubsId(id);
    setShowClubsModal(true);
  };
  const handleEditNews = async (id) => {
    setSelectedNewsId(id);
    setShowNewsModal(true);
  };
  const handleEditOffered = async (id) => {
    setSelectedOfferedId(id);
    setShowOfferedModal(true);
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

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
      });
    // Admission GET
    axios
      .get(`https://bjerg.pythonanywhere.com/api/admin/admission/${school}`, {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
        params: { school: school },
      })
      .then((res) => {
        setExp(res.data);
      });
    // Offer GET
    axios
      .get(`https://bjerg.pythonanywhere.com/api/admin/offered/${school}`, {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
        params: { school: school },
      })
      .then((res) => {
        setOffer(res.data);
      });
    // Activity GET
    axios
      .get(`https://bjerg.pythonanywhere.com/api/admin/activities/${school}`, {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
        params: { school: school },
      })
      .then((res) => {
        setActivity(res.data);
      });
    // Facility GET
    axios
      .get(`https://bjerg.pythonanywhere.com/api/admin/facilities/${school}`, {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
        params: { school: school },
      })
      .then((res) => {
        setFacility(res.data);
      });
    //Club GET
    axios
      .get(`https://bjerg.pythonanywhere.com/api/admin/clubs/${school}`, {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
        params: { school: school },
      })
      .then((res) => {
        setClub(res.data);
      });
    //Features GET
    axios
      .get(`https://bjerg.pythonanywhere.com/api/admin/features/${school}`, {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
        params: { school: school },
      })
      .then((res) => {
        setFeature(res.data);
      });
    //News GET
    axios
      .get(`https://bjerg.pythonanywhere.com/api/admin/news/${school}`, {
        headers: {
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
        params: { school: school },
      })
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => console.log(err));
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
          <h1>Update Page </h1>
        </div>
        <div className="flex justify-center mt-10">
          <table className="table-auto border border-collapse w-[1400px]">
            <thead>
              <tr className="header-row text-left">
                <th className="p-2 border border-slate-600 w-1/4">
                  Program Name
                </th>
                <th className="p-2 border border-slate-600 w-1/2">
                  Program Description
                </th>
                <th className="p-2 border border-slate-600">Start Range</th>
                <th className="p-2 border border-slate-600">End Range</th>
                <th className="p-2 border border-slate-600">Duration</th>
                <th className="border border-slate-600"></th>
              </tr>
            </thead>
            <tbody>
              {offer.map((d, i) => (
                <tr key={i}>
                  <td className="p-2">{d.program_name}</td>
                  <td className="p-2">{d.program_description}</td>
                  <td className="p-2">{d.tuition_fee_start_range}</td>
                  <td className="p-2">{d.tuition_fee_end_range}</td>
                  <td className="p-2">{d.duration}</td>
                  <td className="p-2">
                    <button
                      onClick={() => handleEditOffered(d.id)}
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
        {showOfferedModal && selectedOfferedId && (
          <UpdateOfferedModal
            onClose={closeModal}
            school_id={schoolId}
            school_name={schoolName}
            program={offer.find((off) => off.id === selectedOfferedId)}
          />
        )}
        {/* EXPENSES */}
        <div className="flex justify-center mt-12">
          <table className="table-auto border border-collapse w-[1400px]">
            <thead>
              <tr className="header-row text-left">
                <th className="p-2 border border-slate-600 w-1/4">
                  Expenses Name
                </th>
                <th className="p-2 border border-slate-600 w-1/2">
                  Description
                </th>
                <th className="p-2 border border-slate-600 w-1/4">Cost</th>
                <th className="border border-slate-600"></th>
              </tr>
            </thead>
            <tbody>
              {exp.map((d, i) => (
                <tr key={i}>
                  <td className="p-2">{d.name}</td>
                  <td className="p-2">{d.description}</td>
                  <td className="p-2">{d.fee}</td>

                  <td className="p-2">
                    <button onClick={() => handleEditAdm(d.id)} className="w-8">
                      <img src={editIcon} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showAdmissionModal && selectedAdmissionId && (
          <UpdateAdmissionModal
            onClose={closeModal}
            school_id={schoolId}
            school_name={schoolName}
            admission={exp.find((adm) => adm.id === selectedAdmissionId)}
          />
        )}
        {/* FACILITIES */}
        <div className="flex justify-center  mt-12">
          <table className="table-auto border border-collapse w-[1400px]">
            <thead>
              <tr className="header-row text-left">
                <th className="p-2 border border-slate-600 w-1/4">
                  Facility Name
                </th>
                <th className="p-2 border border-slate-600 w-1/2">
                  Facility Description
                </th>
                <th className="p-2 border border-slate-600">Image</th>

                <th className="border border-slate-600"></th>
              </tr>
            </thead>
            <tbody>
              {facility.map((d, i) => (
                <tr key={i}>
                  <td className="p-2">{d.facility_name}</td>
                  <td className="p-2">{d.facility_description}</td>
                  <td className="p-2">
                    <img
                      className="w-1/2 h-3/4"
                      src={`https://bjerg.pythonanywhere.com/media/${d.facility_image}`}
                      alt=""
                    />
                  </td>

                  <td className="p-2">
                    <button
                      onClick={() => handleEditFaci(d.id)}
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
        {showFacilityModal && selectedFacilityId && (
          <UpdateFacilityModal
            onClose={closeModal}
            school_id={schoolId}
            school_name={schoolName}
            facility={facility.find((fac) => fac.id === selectedFacilityId)}
          />
        )}
        {/* ACTIVITIES */}
        <div className="flex justify-center mt-12">
          <table className="table-auto border border-collapse w-[1400px]">
            <thead>
              <tr className="header-row text-left">
                <th className="p-2 border border-slate-600 w-1/4">
                  Activity Name
                </th>
                <th className="p-2 border border-slate-600 w-1/2">
                  Activity Description
                </th>
                <th className="p-2 border border-slate-600">Activity Image</th>
                <th className="border border-slate-600"></th>
              </tr>
            </thead>
            <tbody>
              {activity.map((d, i) => (
                <tr key={i}>
                  <td className="p-2">{d.activity_name}</td>
                  <td className="p-2">{d.activity_description}</td>
                  <td className="p-2">
                    <img
                      className="w-1/2 h-3/4"
                      src={`https://bjerg.pythonanywhere.com/media/${d.activity_image}`}
                      alt=""
                    />
                  </td>

                  <td className="p-2">
                    <button
                      onClick={() => handleEditActi(d.id)}
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
        {showActivityModal && selectedActivityId && (
          <UpdateActivityModal
            onClose={closeModal}
            school_id={schoolId}
            school_name={schoolName}
            activity={activity.find((act) => act.id === selectedActivityId)}
          />
        )}
        {/* NEWS */}
        <div className="flex justify-center mt-12">
          <table className="table-auto border border-collapse w-[1400px]">
            <thead>
              <tr className="header-row text-left">
                <th className="p-2 border border-slate-600 w-1/4">
                  News Header
                </th>
                <th className="p-2 border border-slate-600  w-1/2">
                  News Body
                </th>
                <th className="p-2 border border-slate-600 ">News Image</th>
                <th className="border border-slate-600"></th>
              </tr>
            </thead>
            <tbody>
              {news.map((d, i) => (
                <tr key={i}>
                  <td className="p-2">{d.news_header}</td>
                  <td className="p-2">{d.news_description}</td>
                  <td className="p-2">
                    <img
                      className="w-1/2 h-3/4"
                      src={`https://bjerg.pythonanywhere.com/media/${d.news_image}`}
                      alt=""
                    />
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => handleEditNews(d.id)}
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
        {showNewsModal && selectedNewsId && (
          <UpdateNewsModal
            onClose={closeModal}
            school_id={schoolId}
            school_name={schoolName}
            news={news.find((news) => news.id === selectedNewsId)}
          />
        )}
        {/* CLUBS */}
        <div className="flex justify-center mt-12">
          <table className="table-auto border border-collapse w-[1400px]">
            <thead>
              <tr className="header-row text-left">
                <th className="p-2 border border-slate-600 w-1/4">Club Name</th>
                <th className="p-2 border border-slate-600 w-1/2">
                  Club Description
                </th>
                <th className="p-2 border border-slate-600 ">Club Image</th>
                <th className="border border-slate-600"></th>
              </tr>
            </thead>
            <tbody>
              {club.map((d, i) => (
                <tr key={i}>
                  <td className="p-2">{d.club_name}</td>
                  <td className="p-2">{d.club_description}</td>
                  <td className="p-2">
                    <img
                      className="w-1/2 h-3/4"
                      src={`https://bjerg.pythonanywhere.com/media/${d.club_image}`}
                      alt=""
                    />
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => handleEditClubs(d.id)}
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
        {showClubsModal && selectedClubsId && (
          <UpdateClubModal
            onClose={closeModal}
            school_id={schoolId}
            school_name={schoolName}
            clubs={club.find((clu) => clu.id === selectedClubsId)}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
