import "./App.css";
import YearSelection from "./screens/YearSelection.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentsLogin from "./screens/StudentsLogin.js";
import DashBoard from "./screens/Dashboard/DashBoard.js";
import ProfileView from "./screens/ProfileView.js";
import ManagePassword from "./screens/ManagePassword.js";
import EditProfile from "./screens/EditProfile.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/yearSelection" element={<YearSelection />} />
          <Route path="/login" element={<StudentsLogin />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profileView" element={<ProfileView />} />
          <Route path="/ManagePassword" element={<ManagePassword />} />
          <Route path="/editProfile" element={<EditProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
