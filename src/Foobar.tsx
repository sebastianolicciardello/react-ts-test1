import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import React, { useState } from "react";

function Foobar() {
  const [numeri, setNumeri] = useState<(string | number)[]>([]);

  const stampaNumeri = () => {
    const numeriOutput: (string | number)[] = [];
    for (let i = 1; i <= 100; i++) {
      let output = "";

      if (i % 3 === 0) {
        output += "Foo";
      }

      if (i % 5 === 0) {
        output += "Bar";
      }

      numeriOutput.push(output || i);
    }
    setNumeri(numeriOutput);
  };


  return (
    <div>
      <Link to="/" className="absolute top-0 left-0 m-4 text-gray-800 text-lg font-semibold flex items-center">
        <IoMdArrowRoundBack className="mr-2" />
        Home
      </Link>
      <h1 className="text-5xl mb-4 mt-4">Foobar</h1>
      <button onClick={stampaNumeri} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Esegui
      </button>
      <ul className="mt-4">
        {numeri.map((numero, index) => (
          <li key={index} className="text-lg">{numero}</li>
        ))}
      </ul>
    </div>
  );
}

export default Foobar;