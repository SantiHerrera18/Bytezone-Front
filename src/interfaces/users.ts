export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  confirmPassword?: string;
}

export interface IUserInfo {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: string;
  credential: {
    id: number;
    password: string;
  };
  orders: [];
}

export interface IUserLogged {
  token: string;
  user: IUserInfo;
}
