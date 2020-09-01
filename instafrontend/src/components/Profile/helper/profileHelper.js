import { API } from "../../../backend";
import { isAuthenticated } from "../../Authentication/helper/authenticationHelper";

export const createProfile = (token, profile, id) => {
  return fetch(`${API}/profile/create/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: profile,
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
};

export const getProfileById = (id, token) => {
  return fetch(`${API}/profile/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
};

export const getProfilesBySearch = (key, token) => {
  return fetch(`${API}/profile/list/${key}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
};
