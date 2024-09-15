export default function CakeFrame({ children }) {
  return (
    <div className="relative m-auto border rounded-2xl w-80 h-80 bg-background flex justify-center items-center">
      {children}
    </div>
  )
}
