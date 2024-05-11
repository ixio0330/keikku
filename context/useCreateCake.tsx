import React, { createContext, useState, useContext } from 'react';

export type CakeShape = 'circle' | 'rectangle';
export type CakeOutline = 'cream1' | 'cream2' | 'cream3'
export type CakeDeco = 'cream' | 'line' | 'sprinkles' | 'heart' | 'flower' | 'carrot'

export interface CakeContextType {
  cakeShape: CakeShape;
  setCakeShape: React.Dispatch<React.SetStateAction<CakeShape>>;
  cakeColor: string;
  setCakeColor: React.Dispatch<React.SetStateAction<string>>;
  textColor: string;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  textDeco: Set<string>;
  setTextDeco: React.Dispatch<React.SetStateAction<Set<string>>>;
  textSize: number;
  setTextSize: React.Dispatch<React.SetStateAction<number>>;
  outline: CakeOutline;
  setOutline: React.Dispatch<React.SetStateAction<CakeOutline>>;
  outlineColor: string;
  setOutlineColor: React.Dispatch<React.SetStateAction<string>>;
  deco: CakeDeco;
  setDeco: React.Dispatch<React.SetStateAction<CakeDeco>>;
  decoColor: string;
  setDecoColor: React.Dispatch<React.SetStateAction<string>>;
}

const initialCakeContext: CakeContextType = {
  cakeShape: 'circle',
  setCakeShape: () => {},
  cakeColor: 'white',
  setCakeColor: () => {},
  textColor: 'white',
  setTextColor: () => {},
  textDeco: new Set(),
  setTextDeco: () => {},
  textSize: 20,
  setTextSize: () => {},
  outline: 'cream1',
  setOutline: () => {},
  outlineColor: 'white',
  setOutlineColor: () => {},
  deco: 'cream',
  setDeco: () => {},
  decoColor: 'white',
  setDecoColor: () => {},
};

const CreateCakeContext = createContext<CakeContextType>(initialCakeContext);

export const useCreateCakeContext = () => useContext(CreateCakeContext);

export const CreateCakeProvider = ({ children }: React.PropsWithChildren ) => {
  const [cakeShape, setCakeShape] = useState<CakeShape>(initialCakeContext.cakeShape);
  const [cakeColor, setCakeColor] = useState(initialCakeContext.cakeColor);
  const [textColor, setTextColor] = useState(initialCakeContext.textColor);
  const [textDeco, setTextDeco] =  useState<Set<string>>(initialCakeContext.textDeco);
  const [textSize, setTextSize] = useState(initialCakeContext.textSize);
  const [outline, setOutline] = useState(initialCakeContext.outline);
  const [outlineColor, setOutlineColor] = useState(initialCakeContext.outlineColor);
  const [deco, setDeco] = useState<CakeDeco>(initialCakeContext.deco);
  const [decoColor, setDecoColor] = useState(initialCakeContext.decoColor);

  const value: CakeContextType = {
    cakeShape,
    setCakeShape,
    cakeColor,
    setCakeColor,
    textColor,
    setTextColor,
    textDeco,
    setTextDeco,
    textSize,
    setTextSize,
    outline,
    setOutline,
    outlineColor,
    setOutlineColor,
    deco,
    setDeco,
    decoColor,
    setDecoColor,
  };

  return <CreateCakeContext.Provider value={value}>{children}</CreateCakeContext.Provider>;
};
