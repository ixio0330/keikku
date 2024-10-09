export default function Modal({ open, children }) {
  if (open === false) {
    return null
  }

  return (
    <article className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center">
      <div className="max-w-content min-h-20 w-full px-content">
        <div className="w-full h-full bg-white rounded-lg p-5">{children}</div>
      </div>
    </article>
  )
}
