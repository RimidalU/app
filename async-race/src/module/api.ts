export enum Methods {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete',
}

export type Car = {
  name: string;
  color: string;
  id: number;
};

export type Cars = {
  items: [];
  count: string | null;
};

const BASE_URL = 'http://localhost:3000';

export const getCars = async (page: number, limit = 7): Promise<Cars> => {
  const response = await fetch(
    `${BASE_URL}/garage?_page=${page}&_limit=${limit}`,
  );

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};
