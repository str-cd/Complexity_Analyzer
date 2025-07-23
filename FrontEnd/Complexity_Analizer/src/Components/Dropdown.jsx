import { useState } from "react";

function Dropdown({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Language");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (language) => {
    setTitle(language);
    setIsOpen(false); // Close dropdown after selection
    onSelect(language);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="text-white px-4 py-2 border border-white rounded-lg shadow hover:bg-blue-700 w-30"
      >
        {title}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-28 bg-white border rounded-md shadow-lg z-10">
          <ul className="py-1 text-gray-700">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect("Java")}
            >
              Java
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect("C++")}
            >
              C++
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect("JavaScript")}
            >
              JavaScript
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect("Python")}
            >
              Python
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
