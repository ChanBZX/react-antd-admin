import { createAxiosByinterceptors } from '@/services/request/index';
  // 用户登录表单

  const request = createAxiosByinterceptors({
    baseURL: "/api",
  });
  export interface LoginReqForm {
    username: string;
    password: string;
  }
  // 登录成功后返回的token
  export interface LoginResData {
    number: string;
    name:string;
  }
// 用户登录
// export const login = (params: LoginReqForm) => {
//   // 返回的数据格式可以和服务端约定
//   return axios.get<LoginResData>('/login', params);
// }
export const login = (params: any): Promise<LoginReqForm> =>
  request.get("/login", { params });