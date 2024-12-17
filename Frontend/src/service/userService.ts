import axios from 'axios';

// Define the User interface and Users type
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

// Base URL for the API
const API_URL = 'http://localhost:3000'; // Change to your server's URL

// Function to get the JWT token from localStorage
const getToken = (): string | null => localStorage.getItem('token');

// Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add the token to the headers if it exists
axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Error handling utility function
const handleError = (error: unknown): string => {
  if (axios.isAxiosError(error) && error.response) {
    return error.response.data?.error || 'An error occurred';
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unknown error occurred';
};

// Service to register a new user
export const registerUser = async (
  username: string, 
  email: string, 
  password: string
): Promise<{ message: string }> => {
  try {
    const response = await axiosInstance.post('users/register', { username, email, password });
    return response.data;
  } catch (error) {
    throw new Error(handleError(error));
  }
};

// Service to log in a user and get the JWT token
export const loginUser = async (
  username: string, 
  password: string
): Promise<{ token: string; userId: string }> => {
  try {
    const response = await axiosInstance.post('users/login', { username, password });
    const { token, userId } = response.data;
    // Save the token in localStorage for future requests
    localStorage.setItem('token', token);
    return { token, userId };
  } catch (error) {
    throw new Error(handleError(error));
  }
};

// Service to get a list of all users
export const getUsers = async (): Promise<Users> => {
  try {
    const response = await axiosInstance.get('/users');
    return response.data;
  } catch (error) {
    throw new Error(handleError(error));
  }
};

// Service to get a user by ID
export const getUserById = async (id: string): Promise<User> => {
  try {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(handleError(error));
  }
};

// Service to create a new user (Admin only)
export const createUser = async (
  username: string, 
  email: string, 
  password: string
): Promise<{ message: string }> => {
  try {
    const response = await axiosInstance.post('/users', { username, email, password });
    return response.data;
  } catch (error) {
    throw new Error(handleError(error));
  }
};

// Service to update an existing user
export const updateUser = async (
  id: string, 
  username: string, 
  email: string, 
  password: string
): Promise<User> => {
  try {
    const response = await axiosInstance.put(`/users/${id}`, { username, email, password });
    return response.data;
  } catch (error) {
    throw new Error(handleError(error));
  }
};

// Service to delete a user
export const deleteUser = async (id: string): Promise<{ message: string }> => {
  try {
    const response = await axiosInstance.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(handleError(error));
  }
};

// Service to get the authenticated user's details (using token)
export const getAuthenticatedUser = async (): Promise<User> => {
  try {
    const response = await axiosInstance.get('/users/me');
    return response.data;
  } catch (error) {
    throw new Error(handleError(error));
  }
};
