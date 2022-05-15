import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const getProducts = () => {
  return axios.get("/products");
};

export const postProducts = (data) => {
  return axios.post("/products/insert", {
    title: data.title,
    location: data.location,
    buy: data.buy,
    sell: data.sell,
    count: data.count,
  });
};
export const deleteProducts = (id) => {
  return axios.delete("/products", { data: { id } });
};

export const putProduct = (id, data) => {
  return axios.put("/products/" + id, {
    title: data.title,
    location: data.location,
    buy: data.buy,
    sell: data.sell,
    count: data.count,
  });
};
