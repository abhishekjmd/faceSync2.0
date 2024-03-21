import "./App.css";
import YearSelection from "./screens/YearSelection.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentsLogin from "./screens/StudentsLogin.js";
import DashBoard from "./screens/Dashboard/DashBoard.js";
import ProfileView from "./screens/ProfileView.js";
import ManagePassword from "./screens/ManagePassword.js";
import EditProfile from "./screens/EditProfile.js";
import ClassSchedules from './screens/ClassSchedules.js';
import MarkedAttendence from './screens/MarkedAttendence.js';
import AdminLogin from './screens/AdminLogin.js';
import ManageSchedule from './screens/ManageSchedule.js';
import AddSession from './screens/AddSession.js';
import ManageStudentsProfile from './screens/ManageStudentsProfile.js';
import AddStudents from './screens/AddStudents.js';
import ViewDeleteStudents from './screens/ViewDeleteStudents.js';
import ManageAttendence from './screens/ManageAttendence.js';
import ForgetPassword from './screens/ForgetPassword.js';
import NewPassword from './screens/NewPassword.js';
import WelcomePage from './screens/WelcomePage.js';
import EventDetails from './screens/Dashboard/EventDetails.js';
import AddEventsAndAnnouncements from './screens/AddEventsAndAnnouncements.js';
import Attendance from './screens/addattendance.js';
import AdminProfileView from './screens/AdminProfileView.js';
import VideoStream from './screens/VideoStream.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcomePage" element={<WelcomePage />} />
          <Route path="/yearSelection" element={<YearSelection />} />
          <Route path="/login" element={<StudentsLogin />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profileView" element={<ProfileView />} />
          <Route path="/ManagePassword" element={<ManagePassword />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/classSchedules" element={<ClassSchedules />} />
          <Route path="/markedAttendence" element={<MarkedAttendence />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/manageSchedule" element={<ManageSchedule />} />
          <Route path="/addSession" element={<AddSession />} />
          <Route path="/addEventsAndAnnouncements" element={<AddEventsAndAnnouncements />} />
          <Route path="/manageStudentsProfile" element={<ManageStudentsProfile />} />
          <Route path="/addStudents" element={<AddStudents />} />
          <Route path="/viewDeleteStudents" element={<ViewDeleteStudents />} />
          <Route path="/manageAttendence" element={<ManageAttendence />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="/eventDetails" element={<EventDetails />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/adminProfileView" element={<AdminProfileView />} />
          <Route path="/videoStream" element={<VideoStream />} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
