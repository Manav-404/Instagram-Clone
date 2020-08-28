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
