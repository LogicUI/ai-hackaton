import axios from '../../axios/axiosinstance';

async function getLinkedinProfiles() {
  try {
    const response = await axios.get('profiles');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default getLinkedinProfiles;
