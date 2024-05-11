const getShapeOutlineStyle = (isSelected: boolean) => isSelected ? "border-[#175428] bg-[#E6F6F5]" : "border-gray-300 bg-white";

export interface ShapeListProps {
  title: string;
  items: { onClick: () => void; isSelected: boolean; Item: React.FC }[];
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
              className={`flex justify-center items-center border-2 rounded-2xl bg-white min-w-24 w-24 h-24 ${getShapeOutlineStyle(isSelected)}`}
              onClick={onClick}
            >
              <Item />
            </li>)
        }
      </ul>
    </>
  )
};