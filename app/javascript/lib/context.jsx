import { createContext } from "react";

export const defaultUserData = {
  id: '',
  name: 'abc',
  email: '',
  access_token: '',
}

export const AppContext = createContext({
  user: defaultUserData,
});
