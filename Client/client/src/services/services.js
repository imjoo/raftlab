import http from "../http-common";

const getAll = () => {
  return http.get("/user/");
};

const getAllTag = () => {
    return http.get("/tag/");
  };

const get = name => {
  return http.get(`/user/${name}`);
};

const getAllTagsOfUser = name => {
    return http.get(`/tag/${name}`);
  };

const create = data => {
  return http.post("/user/add", data);
};

const update = (name, data) => {
  return http.put(`/user/update/${name}`, data);
};

const remove = name => {
  return http.delete(`/user/${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};