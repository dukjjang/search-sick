import axios from 'axios';
import { Sick } from '../types';

export const getSicks = async (query: string): Promise<Sick[]> => {
  const result = await axios.get(`http://localhost:4000/sick?q=${query}`);
  return result.data;
};
