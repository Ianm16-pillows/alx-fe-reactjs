export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">TailwindReact</h1>
      <ul className="flex gap-4">
        <li className="hover:text-gray-300 cursor-pointer transition">Home</li>
        <li className="hover:text-gray-300 cursor-pointer transition">About</li>
        <li className="hover:text-gray-300 cursor-pointer transition">Contact</li>
      </ul>
    </nav>
  )
}
