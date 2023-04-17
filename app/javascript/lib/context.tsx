import { createContext } from "react";

export const defaultUserData = {
  id: '',
  name: '',
  email: '',
  access_token: '',
}

export const AppContext = createContext({
  user: defaultUserData,
});
