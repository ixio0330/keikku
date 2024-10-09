export default function Spinner({ children }) {
  return (
    <article className="fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center">
      <div className="w-10 h-10 border-4 border-white border-b-primary rounded-full inline-block box-border animate-rotation" />
      {children}
    </article>
  )
}
