export default function Spinner({ children }) {
  return (
    <article className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-40">
      <div className="box-border inline-block h-10 w-10 animate-rotation rounded-full border-4 border-white border-b-primary" />
      {children}
    </article>
  )
}
