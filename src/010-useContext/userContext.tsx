import { PropsWithChildren, createContext } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }: PropsWithChildren) {
  return (
    <UserContext.Provider value={null}>
      {children}
    </UserContext.Provider>
  )
}