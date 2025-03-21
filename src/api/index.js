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

export const getCategories = () => api.get(`/ps-category/categories`);
export const getSubcategories = (category) =>
  api.get(`/ps-category/subcategories?category=${category}`);
export const getParts = (category, subcategory) =>
  api.get(
    `/ps-category/part-types?category=${category}&subcategory=${subcategory}`
  );
export const searchByVechiclePartTypes = (searchParams, partTypeIds) =>
  api.post(`/ps-search/vehicle/parts-type`, {
    data: { searchParams, partTypeIds },
  });
export const findQuotes = (page = 1) => api.get(`/quotes?page=${page}`);
export const reqQuotes = (vehicleInfo) =>
  api.post(`/quotes/req`, { data: { vehicleInfo } });

export const updateQuoteStatus = (data) => api.patch(`/quotes`, data);

export const checkPartavailability = (order) =>
  api.post(`/quotes/refresh`, { data: order });

export const placeOrder = (order, orderId, orderType) =>
  api.post(`/orders/ps`, { data: order, orderId, orderType });

export const findOrders = (page = 1, orderType) => api.get(`/orders?page=${page}&orderType=${orderType}`);

export const findInventory = (page = 1) => api.get(`/inventory?page=${page}`);

export const setOrderDetails = (data) => api.post(`/orders/details`, { data });

export const addInventoryItems = (data) => api.post(`/orders/inventory`, { data });

export default api;
