export interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
export type Users = User[];
  