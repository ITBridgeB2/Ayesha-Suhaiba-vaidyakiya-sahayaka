import { Routes,Route } from "react-router-dom";
import LoginPage from "./loginPage";
import Homepage from "./homePage"
import Register from "./registerPage"
import RoleBasedRegistration from "./RoleBasedRegistration";
import ForgotPassword from "./forgetPassword";
import MatchingHospital from "./matchingHospital"
import UserDashboard from "./userDashboard";
import ChildRegistration from "./childRegistration";
import PatientReview from "./reviewPage"
import AdminDashboard from "./adminDashboard";
import PatientDetailsComponent from "./patientDetails"
import SaveHospital from "./saveHospital"
import HospitalListComponent from "./hospitalListComponent"
import AdminReview from "./adminReview"

export default function App(){
    return(
        <div className="App">
            <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/adminreview' element={<AdminReview />}></Route>
            <Route path='/gethospital' element={<HospitalListComponent/>}></Route>
            <Route path='/patientdetails' element={<PatientDetailsComponent/>}></Route>
            <Route path='/savehospital' element={<SaveHospital/>}></Route>
            <Route path='/hospital' element={<MatchingHospital/>}></Route>
             <Route path='/login' element={<LoginPage/>}></Route> 
            <Route path='/forget' element={<ForgotPassword/>}></Route>
            <Route path='/childreg' element={<ChildRegistration/>}></Route>
            <Route path='/review' element={<PatientReview/>}></Route>
            <Route path='/userdashboard' element={<UserDashboard/>}></Route>
            <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
            <Route path='/rolebase' element={<RoleBasedRegistration/>}></Route>
            <Route path='/Register' element={<Register/>}></Route>
            {/* <Route path='/*' element={<LoginPage/>}></Route> */}
            </Routes>

        </div>
    )
}
