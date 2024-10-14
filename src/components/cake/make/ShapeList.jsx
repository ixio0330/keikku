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
      <h2 className="text-lg font-bold">{title}</h2>
      <ul className="scrollbar-hide mt-3 flex space-x-5 overflow-hidden overflow-x-auto">
        {items.map(({ onClick, isSelected, Item }, idx) => (
          <li
            key={"shape" + idx}
            className="flex h-24 w-24 min-w-24 items-center justify-center rounded-2xl border-2 bg-white"
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
