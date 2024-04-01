import AxiosService from '../AxiosService';

const getCart = async (id: number) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.get(`cart/${id}`);
  return response.data;
};

const createCart = async (id: string, userId: number) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.post(`cart/${id}/${userId}`);
  return response.data;
};

const deleteCart = async (id: string) => {
  const instance = await AxiosService.createAxiosInstance();
  const response = await instance.delete(`cart/${id}`);
  return response.data;
};

export default {
  getCart,
  createCart,
  deleteCart,
};
