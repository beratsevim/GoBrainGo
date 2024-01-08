// UserListContext.tsx
import { createContext, useState } from 'react';

export const UserListContext = createContext({} as UserListContextType);

export const UserListProvider = ({ children }:any) => {
  const [userNames, setUserNames] = useState<string[]>([]);

  const addUserName = (userName: string) => {
    setUserNames((prevUserNames) => [...prevUserNames, userName]);
  };

  const removeUserName = (userName: string) => {
    setUserNames((prevUserNames) => prevUserNames.filter((name) => name !== userName));
  };

  return (
    <UserListContext.Provider value={{ userNames, addUserName, removeUserName }}>
      {children}
    </UserListContext.Provider>
  );
};

export interface UserListContextType {
  userNames: string[];
  addUserName: (userName: string) => void;
  removeUserName: (userName: string) => void;
}
