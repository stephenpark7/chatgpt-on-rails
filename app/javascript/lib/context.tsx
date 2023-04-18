import { createContext } from "react";

export const defaultUserData = {
  id: '',
  name: '',
  email: '',
  access_token: '',
}

type UserData = {
  id: string;
  name: string;
  email: string;
  access_token: string;
};

export const AppContext = createContext({
  user: defaultUserData,
  setUser: (_state: UserData) => {},
});
