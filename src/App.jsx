import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminLayout from "./components/AdminDashboard/AdminLayout";
import Companies from "./components/AdminDashboard/Companies";
import AdminJobsTable from "./components/AdminDashboard/JobsTable";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Chat from "./components/chat/Chat";
import AddCategory from "./components/AdminDashboard/AddCategory";
import AddJobs from "./components/Dashboard/AddJobs";
import Dashboard from "./components/Dashboard/Dashboard";
import JobsTable from "./components/Dashboard/JobsTable";
import Layout from "./components/Dashboard/Layout";
import MyProfile from "./components/Dashboard/MyProfile";
import CV from "./components/GenerateCV/CV";
import Home from "./components/Home";
import Jobs from "./components/joblist/Jobs";
import Profile from "./components/profile/Profile";
import ResumeMain from "./components/resume/ResumeMain";
import SinglePage from "./components/singleJob/SinglePage";
import Contact from "./components/Contact";
import RegisterAsCompany from "./components/auth/RegisterAsCompany";
import Applicants from "./components/Dashboard/Applicants";
import Messages from "./components/Dashboard/Messages";
import JobsByCategory from "./components/joblist/jobsByCategory";
import AdminUserTable from "./components/AdminDashboard/userTable";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registerAsCompany" element={<RegisterAsCompany />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/single/:id" element={<SinglePage />} />
          <Route path="/resume" element={<ResumeMain />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobsByCategory/>} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />

          {/* company dashboard layout */}
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addjobs" element={<AddJobs />} />
            <Route path="jobslist" element={<JobsTable />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="applicants" element={<Applicants />} />
            <Route path="messages" element={<Messages />} />
          </Route>

          {/* admin dashboard layout */}
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="jobslist" element={<AdminJobsTable />} />
            <Route path="company" element={<Companies />} />
            <Route path="addcategory" element={<AddCategory />} />
            <Route path="users" element={<AdminUserTable />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
