// src/apiService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apiflowery.azurewebsites.net/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const createEnquiry = async (enquiry) => {
  console.log(enquiry)
  try {
    const response = await axios.post('https://apiflowery.azurewebsites.net/api/Enquiry/Create', enquiry);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const getEnquiries = async () => {
    try {
      const response = await axios.get("https://apiflowery.azurewebsites.net/api/Enquiry/getenquiries");
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  };

export const getenquirystatuses = async () => {
    try {
      const response = await axios.get("https://apiflowery.azurewebsites.net/api/Enquiry/\getenquirystatuses");
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Network Error');
    }
};

export const getenquirysubstatuses = async () => {
  try {
  const response = await axios.get("https://apiflowery.azurewebsites.net/api/Enquiry/getenquirysubstatuses");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const geteventcategories = async () => {
  try {
    const response =     await api.get("https://apiflowery.azurewebsites.net/api/Enquiry/geteventcategories");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const geteventsubcategories = async () => {
  try {
    const response = await axios.get("https://apiflowery.azurewebsites.net/api/Enquiry/\geteventsubcategories");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

