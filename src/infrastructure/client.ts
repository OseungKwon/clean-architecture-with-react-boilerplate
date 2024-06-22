import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface CustomInstance extends AxiosInstance {
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, config?: AxiosRequestConfig, data?: unknown): Promise<T>;
    put<T>(url: string, config?: AxiosRequestConfig, data?: unknown): Promise<T>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

export const apiClient: CustomInstance = axios.create({
    baseURL: '/mock-test',
}) as CustomInstance;
