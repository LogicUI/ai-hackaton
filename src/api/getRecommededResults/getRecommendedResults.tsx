import axios from 'axios';

const getRecommendedResults = async (suggestion: string) => {
  try {
    const response = await axios.post('http://localhost:3001', {
      message: suggestion,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getRecommendedResults;
