import React from 'react';

const Card = () => {
  return (
    <div className="max-w-xs m-5 rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-96" src="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor auctor velit, eget
          cursus tortor pretium ut.
        </p>
      </div>

      <div className="px-6 py-4">
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="selectOption"
            name="selectOption"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            {/* Add more options as needed */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.293 13.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 1.414l-4 4z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
