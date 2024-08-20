const BASE_URL = import.meta.env.VITE_SERVER_URL;
if (!BASE_URL) throw new Error('Unable to load VITE_SERVER_URL');

const BASE_URL_USER = `${BASE_URL}/user`;
const BASE_URL_DOCUMENT = `${BASE_URL}/document`;

export const CREATE_USER = BASE_URL_USER;
export const GET_CURRENT_USER = BASE_URL_USER;
export const UPDATE_CURRENT_USER = BASE_URL_USER;
export const DELETE_CURRENT_USER = BASE_URL_USER;

export const CREATE_DOCUMENT = BASE_URL_DOCUMENT;
export const GET_DOCUMENT_BY_ID = (id: string) => `${BASE_URL_DOCUMENT}/${id}`;
export const GET_DOCUMENT_BY_BOOK = (bookId: string) => `${BASE_URL_DOCUMENT}/book/${bookId}`;
export const GET_DOCUMENT_BY_TAG = (tag: string) => `${BASE_URL_DOCUMENT}/tag/${tag}`;
export const UPDATE_DOCUMENT = (id: string) => `${BASE_URL_DOCUMENT}/${id}`;
export const DELETE_DOCUMENT = (id: string) => `${BASE_URL_DOCUMENT}/${id}`;