import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";

function generaNumeri() {
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
  return numeriOutput;
}

function Foobar() {
  const [numeri, setNumeri] = useState<(string | number)[]>([]);

  const stampaNumeri = () => {
    const numeriOutput = generaNumeri();
    setNumeri(numeriOutput);
  };

  return (
    <div>
      <Link to="/" className="absolute top-0 left-0 m-4 text-gray-800 text-3xl font-semibold flex items-center hover:underline md:text-xl">
        <IoMdArrowRoundBack className="mr-2" />
        Home
      </Link>
      <h1 className="text-5xl mb-4 mt-10">Foobar</h1>
      <button onClick={stampaNumeri} className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-4 px-6 rounded w-full md:w-auto text-2xl md:text-xl">
        ESEGUI
      </button>
      <ul className="mt-4">
        {numeri.map((numero, index) => (
          <li key={index} className="text-xl md:text-lg">{numero}</li>
        ))}
      </ul>
    </div>
  );
}

export default Foobar;
