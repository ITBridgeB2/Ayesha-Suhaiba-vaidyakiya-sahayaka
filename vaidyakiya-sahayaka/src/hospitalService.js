import axios from 'axios';
class hospitalService
{
    validateHospital(username,age,mobileNumber) {
        return axios.get(`ttp://localhost:9090/patients /${username}/${age}/${mobileNumber}`)
      }
    
}
export default new hospitalService();