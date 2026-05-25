const Navbar = () => {

  return (

    <div className="h-[70px] bg-white shadow-md flex items-center justify-between px-8">

      <h1 className="text-2xl font-bold text-indigo-600">
        Admin Dashboard
      </h1>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 px-4 py-2 rounded-lg outline-none"
        />

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
          Profile
        </button>

      </div>

    </div>

  )
}

export default Navbar