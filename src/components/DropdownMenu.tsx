const DropdownMenu = () => {
  return (
    <div className="relative w-64 group">
      <div className="px-4 py-2 bg-blue-600 text-white w-full cursor-pointer">
        Parent Menu
      </div>

      <div
        className="absolute border-0 max-h-0 group-hover:max-h-52 overflow-hidden transition-all duration-300 ease-in-out w-full bg-white rounded-b shadow"
      >
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Subitem 1</a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Subitem 2</a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Subitem 3</a>
      </div>
    </div>
  )
}

export default DropdownMenu