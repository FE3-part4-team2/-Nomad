import axios from './axiosInstance';

export interface ClassList {
  method: string;
  cursorId: number;
  category: string;
  keyword: string;
  sort: string;
  page: number;
  size: number;
}

export interface DetailClassType {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
  subImages: [
    {
      id: number;
      imageUrl: string;
    },
  ];
  schedules: [
    {
      id: number;
      date: string;
      startTime: string;
      endTime: string;
    },
  ];
}

export interface DetailReviewType {
  averageRating: number;
  totalCount: number;
  reviews: [
    {
      id: number;
      user: {
        profileImageUrl: string;
        nickname: string;
        id: number;
      };
      activityId: number;
      rating: number;
      content: string;
      createdAt: string;
      updatedAt: string;
    },
  ];
}

export interface ActivitiesImageType {
  activityImageUrl: string;
}

// 체험 리스트 조회
export const getClassListApi = async (
  method: string,
  cursorId?: number,
  category?: string,
  keyword?: string,
  sort?: string,
  page?: number,
  size?: number,
) => {
  const res = await axios.get(
    `activities/method=${method}&cursorId?=${cursorId}&category?=${category}&keyword?=${keyword}&sort?=${sort}&page?=${page}$size?=${size}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
  if (res.status === 200) {
    return res.data;
  } else if (res.status === 400) {
    throw new Error('error');
  }
};

// 체험 상세 조회
export const getDetailClassApi = async (id: number = 776) => {
  const detail = await axios.get(`activities/${id}`);
  return detail.data;
};

// 체험 리뷰 조회
export const getDetailClassReviewApi = async (id: number = 776) => {
  const review = await axios.get(`activities/${id}/reviews`);
  return review.data;
};

//체험 이미지 url생성
export const postActivitiesImageApi = async (image: FormData) => {
  const res = await axios.post(`activities/image`, image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};
