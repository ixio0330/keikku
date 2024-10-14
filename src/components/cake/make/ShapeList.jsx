const getShapeOutlineStyle = (isSelected) =>
  isSelected
    ? {
        backgroundColor: "#E6F6F5",
        borderColor: "#175428",
      }
    : {
        backgroundColor: "white",
        borderColor: "#d1d5db",
      }

export default function ShapeList({ title, items }) {
  return (
    <div>
      <h2 className="font-bold text-lg">{title}</h2>
      <ul className="mt-3 flex space-x-5 overflow-hidden overflow-x-auto scrollbar-hide">
        {items.map(({ onClick, isSelected, Item }, idx) => (
          <li
            key={"shape" + idx}
            className="flex justify-center items-center border-2 rounded-2xl bg-white min-w-24 w-24 h-24"
            onClick={onClick}
            style={getShapeOutlineStyle(isSelected)}
          >
            <Item />
          </li>
        ))}
      </ul>
    </div>
  )
}
