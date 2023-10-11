import axios from 'axios';
const BASE_URL = 'https://6526bd0b917d673fd76cee78.mockapi.io/api/v1/CarRentalDB';

const getInfo = async () => {
  try {
    const { data } = await axios.get(BASE_URL);

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getData = { getInfo };
export default getData;
