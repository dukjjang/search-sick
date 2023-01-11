import axios from 'axios';
import { Sick } from '../types';

// eslint-disable-next-line consistent-return
export const getSicks = async (query: string): Promise<Sick[] | undefined> => {
  console.info('calling api');

  try {
    const result = await axios.get(`http://localhost:4000/sick?q=${query}`);
    return result.data;
  } catch (error) {
    alert('데이터 요청에 실패하였습니다');
    console.log(error);
  }
};
