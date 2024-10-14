export default function Modal({ open, children, className, ...props }) {
  if (open === false) {
    return null
  }

  return (
    <article className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-40">
      <div className="min-h-20 w-full max-w-content px-content">
        <div
          className={`h-full w-full rounded-lg bg-white p-5 ${className ?? ""}`}
          {...props}
        >
          {children}
        </div>
      </div>
    </article>
  )
}
