export function IconGallery({ children }) {
  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
}

IconGallery.Item = ({ icon, description }) => (
  <div className="col-span-1 flex shadow-sm rounded-md">
    <div className="bg-neutral-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">
      {icon}
    </div>
    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
      <div className="flex-1 px-4 py-2 text-sm truncate">
        <p className="text-neutral-900">{description}</p>
      </div>
    </div>
    {/* {children} */}
  </div>
);
