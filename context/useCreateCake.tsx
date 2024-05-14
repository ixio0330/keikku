import React, { createContext, useState, useContext, CSSProperties } from 'react';
import { ShapeListItem } from '@/app/create-cake/(components)/ShapeList';
import Circle from '@/app/create-cake/(shape)/Circle';
import Rectangle from '@/app/create-cake/(shape)/Rectangle';
import CreamOne from '@/app/create-cake/(outline)/CreamOne';
import CreamTwo from '@/app/create-cake/(outline)/CreamTwo';
import CreamThree from '@/app/create-cake/(outline)/CreamThree';
import ShapeOne from '@/app/create-cake/(outline)/ShapeOne';
import ShapeTwo from '@/app/create-cake/(outline)/ShapeTwo';
import ShapeThree from '@/app/create-cake/(outline)/ShapeThree';
import DecoCream, { Cream } from '@/app/create-cake/(deco)/DecoCream';
import DecoLine, { Line } from '@/app/create-cake/(deco)/DecoLine';
import DecoSprinkles, { Sprinkles } from '@/app/create-cake/(deco)/DecoSprinkles';
import DecoHeart, { Heart } from '@/app/create-cake/(deco)/DecoHeart';
import DecoFlower, { Flower } from '@/app/create-cake/(deco)/DecoFlower';
import DecoCarrot, { Carrot } from '@/app/create-cake/(deco)/DecoCarrot';

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
  outlineShapeList: ShapeListItem[];
  decoShapeList: ShapeListItem[];
  getCakeFrame: () => React.ReactNode;
  getOutlineStyle: () => React.ReactNode;
  getDecoStyle: () => React.ReactNode;
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
  outlineShapeList: [],
  decoShapeList: [],
  getCakeFrame: () => null,
  getOutlineStyle: () => null,
  getDecoStyle: () => null,
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
  const outlineShapeList = [
    { 
      onClick: () => setOutline("cream1"),
      isSelected: outline === "cream1",
      Item: () => <ShapeOne isSelected={outline === "cream1"} />
    },
    { 
      onClick: () => setOutline("cream2"),
      isSelected: outline === "cream2",
      Item: () => <ShapeTwo isSelected={outline === "cream2"} />
    },
    { 
      onClick: () => setOutline("cream3"),
      isSelected: outline === "cream3",
      Item: () => <ShapeThree isSelected={outline === "cream3"} />
    },
  ];
  const decoShapeList = [
    { 
      onClick: () => setDeco("cream"),
      isSelected: deco === "cream",
      Item: () => <DecoCream isSelected={deco === "cream"} />
    },
    { 
      onClick: () => setDeco("line"),
      isSelected: deco === "line",
      Item: () => <DecoLine isSelected={deco === "line"} />
    },
    { 
      onClick: () => setDeco("sprinkles"),
      isSelected: deco === "sprinkles",
      Item: () => <DecoSprinkles isSelected={deco === "sprinkles"} />
    },
    { 
      onClick: () => setDeco("heart"),
      isSelected: deco === "heart",
      Item: () => <DecoHeart isSelected={deco === "heart"} />
    },
    { 
      onClick: () => setDeco("flower"),
      isSelected: deco === "flower",
      Item: () => <DecoFlower isSelected={deco === "flower"} />
    },
    { 
      onClick: () => setDeco("carrot"),
      isSelected: deco === "carrot",
      Item: () => <DecoCarrot isSelected={deco === "carrot"} />
    },
  ];
  const getCakeFrame = () => {
    switch (cakeShape) {
      case 'circle':
        return <Circle color={cakeColor} />
      case 'rectangle':
        return <Rectangle color={cakeColor} />
    }
  };

  const getOutlineStyle = () => {
    switch (outline) {
      case "cream1":
        return <CreamOne color={outlineColor} shape={cakeShape} />
      case "cream2":
        return <CreamTwo color={outlineColor} shape={cakeShape} />
      case "cream3":
        return <CreamThree color={outlineColor} shape={cakeShape} />
    }
  };
  const getDecoStyle = () => {
    switch (deco) {
      case "cream":
        return <Cream color={decoColor}  />
      case "line":
        return <Line  />
      case "sprinkles":
        return <Sprinkles  />
      case "heart":
        return <Heart color={decoColor}  />
      case "flower":
        return <Flower  />
      case "carrot":
        return <Carrot  />
    }
  };

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
    outlineShapeList,
    decoShapeList,
    getCakeFrame,
    getOutlineStyle,
    getDecoStyle,
  };

  return <CreateCakeContext.Provider value={value}>{children}</CreateCakeContext.Provider>;
};

export const cakeShapeStyle: { [key in CakeShape]: CSSProperties } = {
  circle: {
    width: "256px",
    height: "256px",
    borderRadius: "50%",
  },
  rectangle: {
    width: "224px",
    height: "224px",
    borderRadius: "30px",
  },
};

export const defaultColors = [
  { color: 'white', },
  { color: '#CE8FFF', },
  { color: '#EE9998', },
  { color: '#98C5E8', },
  { color: '#86D180', },
  { color: '#FFC416', },
];

export const textColors = [
  { color: 'white', },
  { color: '#1F2227', },
  { color: '#61666C', },
  { color: '#950E0E', },
  { color: '#175444', },
  { color: '#001582', },
];
