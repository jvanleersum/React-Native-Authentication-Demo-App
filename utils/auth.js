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
  return response;
}

export const createUser = async ({ email, password }) => {
  const response = await authenticate('signUp', email, password)
};

export const login = async ({ email, password }) => {
  const response = await authenticate('signInWithPassword', email, password)
  console.log(response.data)
};
