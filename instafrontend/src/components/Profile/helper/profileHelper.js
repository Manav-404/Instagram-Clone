import { API } from "../../../backend";
import { isAuthenticated } from "../../Authentication/helper/authenticationHelper";

const { token } = isAuthenticated();
export const createProfile = (profile, id) => {
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
