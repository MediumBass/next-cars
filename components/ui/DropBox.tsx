import React from 'react';

export const DropBox: React.FC = ({
  title,
  payload,
  setState,
  selectedItem,
}) => {
  const [titles, setTitles] = React.useState([title]);
  return (
    <div className="relative group ">
      <button
        className={` bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-[6vw] rounded inline-flex items-center ${
          selectedItem ? 'bg-red-600' : 'bg-gray-700'
        }`}
      >
        <span className="mr-1">{titles}</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 0h20l-10 12L0 0z" />
        </svg>
      </button>
      <ul className="absolute hidden group-hover:block text-gray-700 pt-1  py-2 px-[6vw] min-w-[10rem]">
        {payload.map((item) => (
          <li key={item.Name}>
            <button
              className={`rounded-b py-2 px-4 block w-full text-left ${
                selectedItem === item.Name
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-400'
              }`}
              onClick={() => {
                setState(item.Id);
                setTitles(item.Name);
              }}
            >
              {item.Name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
