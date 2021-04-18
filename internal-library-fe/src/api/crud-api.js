import axios from "axios";
import { URL } from "../config/config";
import TOAST from "../config/toastify";

export const getDataApi = async (search, type) => {
  let response = {};
  await axios
    .get(
      `${URL}/resources/search?Text=${search.trim()}&Type=${
        type === "All" ? "" : type
      }`
    )
    .then((resp) => {
      response = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

export const getHistoryApi = async () => {
  let response = {};
  await axios
    .get(
      `${URL}/history`)
    .then((resp) => {
      response = resp;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

export const deleteResource = async (id) => {
  await axios.delete(`${URL}/resources/${id}`)
    .then((resp) => {
      TOAST("Resource Deleted!", "success");
    })
    .catch((err) => {
      console.log(err)
      TOAST("Error!", "error");
    });
};

export const createResource = async (resource) => {
  let response = {};
  await axios
    .post(`${URL}/resources`, resource)
    .then((resp) => {
      TOAST("Resource Created!", "info");
    })
    .catch((error) => {
      response = error.response;
    });

  return response;
};

export const editResource = async (resource) => {
  let response = {};
  await axios
    .put(`${URL}/resources`, resource)
    .then((resp) => {
      TOAST("Resource Edited!", "info");
    })
    .catch((error) => {
      response = error.response;
    });

  return response;
};

//AUTHORS

export const getAuthorsData = async () => {
  let response;
  await axios
    .get(`${URL}/authors`)
    .then((resp) => {
      response = resp;
    })
    .catch((err) => {
      TOAST("Error!", "error");
    });

  return response;
};

export const postBorrowed = async (borrowed) => {
  await axios
    .post(`${URL}/borrowed`, borrowed)
    .then((resp) => {
      TOAST("Resource Borrowed!", "success");
    })
    .catch((err) => {
      TOAST("Error!", "error");
    });
};

export const putReturn = async (returned) => {
  await axios
    .put(`${URL}/borrowed/return`, returned)
    .then((resp) => {
      TOAST("Resource Returned!", "success");
    })
    .catch((err) => {
      TOAST("Error!", "error");
    });
};

export const getBorrowedData = async (userId) => {
  let response;
  await axios
    .get(`${URL}/borrowed/${userId}`)
    .then((resp) => {
      response = resp;
    })
    .catch((err) => {
      TOAST("Error!", "error");
    });

  return response;
};


export const addUser = async (user) => {
 
  await axios
    .post(`${URL}/users`,user)
    .then((resp) => {
     console.log(resp)
    })
    .catch((err) => {
      TOAST("Error!", "error");
    });
}

export const getUsersData = async () => {
  let response;
  await axios
    .get(`${URL}/users`)
    .then((resp) => {
      response = resp;
    })
    .catch((err) => {
      TOAST("Error!", "error");
    });

    console.log(response)
  return response;
};
