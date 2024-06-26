import axiosInstance from './axiosInstance';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

interface ChangeInfoProps {
  nickname: string;
  profileImageUrl: string | undefined;
  newPassword: string;
}

export const handleChangeInfo = async ({
  nickname,
  profileImageUrl,
  newPassword,
}: ChangeInfoProps) => {
  try {
    const response = await axiosInstance.patch('users/me', {
      nickname,
      profileImageUrl,
      newPassword,
    });
    if (response.status == 200) {
      toast.success('개인 정보가 변경 되었습니다.');
    }
  } catch (e) {
    const error = e as AxiosError;
    console.log(e);
    return Promise.reject(error.response);
  }
};

export const handleGetUserInfo = async () => {
  try {
    const response = await axiosInstance.get('users/me');
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};

export const handleChangeImageUrl = async (image: FormData) => {
  try {
    const response = await axiosInstance.post('users/me/image', image, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return error.response;
  }
};

// export const postActivitiesImageApi = async (image: FormData) => {
//   const res = await axiosInstance.post(`activities/image`, image, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
//   return res.data;
// };
