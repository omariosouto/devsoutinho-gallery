/* This example requires Tailwind CSS v2.0+ */
export default function Container({ children, wrapperClassName, className }) {
  return (
    <div className={`${wrapperClassName}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </div>
    </div>
  )
}
