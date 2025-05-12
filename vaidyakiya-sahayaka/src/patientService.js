import axios from 'axios';
const USER_URL = 'http://localhost:9090/patients'
const ADMIN_URL='http://localhost:9090/admins'
const Hospital_URL ='http://localhost:9090/getpatients'
const REVIEW_URL='http://localhost:9090/reviews'
class patientService
{
    validatePatient(username, password) {
        return axios.get(`${USER_URL}/${username}/${password}`)
      }
      getpatients() {
        return axios.get(USER_URL) // Correct: USER_URL is a variable
    }
    saveHospitalDetails(hospital){
      return axios.post(`${Hospital_URL}`,hospital)
  }

    displayHospitalDetails(){
    return axios.get('http://localhost:9090/hospitals')
     }
    
    savePatientDetails(patient){
        return axios.post(`${USER_URL}`,patient)
    }
     validateAdmin(username, password,admincode) {
        return axios.get(`${ADMIN_URL}/${username}/${password}/${admincode}`)
      }
    saveAdminDetails(admin){
        return axios.post(`${ADMIN_URL}`,admin)
    }
    reviewPatient(review){
      return axios.post(`${REVIEW_URL}`,review)
  }
}
export default new patientService();