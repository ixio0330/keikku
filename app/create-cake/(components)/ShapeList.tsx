const getShapeOutlineStyle = (isSelected: boolean) => 
  isSelected 
  ? {
    backgroundColor: "#E6F6F5",
    borderColor: "#175428", 
  }
  : {
    backgroundColor: "white",
    borderColor: "#d1d5db",
  };

export type ShapeListItem = { 
  onClick: () => void;
  isSelected: boolean;
  Item: () => React.ReactNode;
}

export interface ShapeListProps {
  title: string;
  items: ShapeListItem[];
}

export default function ShapeList({ title, items }: ShapeListProps) {
  return (
    <>
      <h2 className="font-bold text-lg">{title}</h2>
      <ul className="mt-3 flex space-x-5 overflow-hidden overflow-x-auto">
        {
          items.map(({ onClick, isSelected, Item }: any, index: number) => 
            <li
              key={index} 
              className="flex justify-center items-center border-2 rounded-2xl bg-white min-w-24 w-24 h-24"
              onClick={onClick}
              style={getShapeOutlineStyle(isSelected)}
            >
              <Item />
            </li>)
        }
      </ul>
    </>
  )
};