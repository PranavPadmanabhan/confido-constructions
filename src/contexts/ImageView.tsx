import React, { useState } from "react";

type provider = {
  children: React.ReactNode;
};
type context = {
  isExpanded: boolean;
  image: any;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<React.SetStateAction<any>>;
};

export const ImageViewContext = React.createContext({} as context);

function ImageProvider({ children }: provider) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [image, setImage] = useState<any>();

  const value = { isExpanded, image, setIsExpanded, setImage };
  return (
    <ImageViewContext.Provider value={value}>
      {children}
    </ImageViewContext.Provider>
  );
}

export default ImageProvider;
