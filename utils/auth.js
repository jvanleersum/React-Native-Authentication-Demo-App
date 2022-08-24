import axios from "axios";
import Secrets from "./secrets";

export const createUser = async ({ email, password }) => {
  const response = await axios.post(Secrets.auth_base_url + `signUp?key=${Secrets.api_key}`, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  return response;
};
