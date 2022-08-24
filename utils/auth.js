import axios from "axios";
import Secrets from "./secrets";

const authenticate = async (mode, email, password) => {
  const response = await axios.post(
    Secrets.auth_base_url + `${mode}?key=${Secrets.api_key}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  return response.data.idToken;
}

export const createUser = ({ email, password }) => {
  return authenticate('signUp', email, password)
};

export const login = ({ email, password }) => {
  return authenticate('signInWithPassword', email, password)
};
