import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getYears = () => api.get(`/ps-vehicle/years`);
export const getMakes = (year) => api.get(`/ps-vehicle/makes?year=${year}`);
export const getModels = (make, year) =>
  api.get(`/ps-vehicle/models?make=${make}&year=${year}`);
export const getSubmodels = (make, year, model) =>
  api.get(`/ps-vehicle/submodels?make=${make}&year=${year}&model=${model}`);
export const getEngines = (make, year, model, submodel) =>
  api.get(
    `/ps-vehicle/engines?make=${make}&year=${year}&model=${model}&submodel=${submodel}`
  );
export const getVehicleByVin = (vin) => api.get(`/ps-vehicle/vin?vin=${vin}`);
export const getVehicleByDetails = (make, year, model, submodel, engine) =>
  api.get(
    `/ps-vehicle/detail?make=${make}&year=${year}&model=${model}&submodel=${submodel}&engine=${engine}`
  );


export default api;
