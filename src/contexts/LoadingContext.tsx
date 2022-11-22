import React, { useState } from "react";

type context = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
type provider = {
  children: React.ReactNode;
};

export const LoaderContext = React.createContext<context>({} as context);

function LoadingContextProvider({ children }: provider) {
  const [loading, setLoading] = useState<boolean>(false);
  const value = { loading, setLoading };

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
}

export default LoadingContextProvider;
