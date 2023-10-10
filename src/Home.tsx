import { ImListNumbered } from "react-icons/im";
import { FaHandScissors } from "react-icons/fa";

function Home() {
    const handleClick = (name: string) => {
      console.log(`Hai cliccato su ${name}`);
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl mb-4">Seleziona</h1>
        <div className="flex">
          <button
            onClick={() => handleClick("Foobar")}
            className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 cursor-pointer transition duration-300 hover:border-gray-300 mr-4"
          >
            <ImListNumbered className="text-4xl mb-2" />
            <span className="text-gray-800 text-xl font-semibold">FOOBAR</span>
          </button>
          <button
            onClick={() => handleClick("Carta, forbice e sasso")}
            className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 cursor-pointer transition duration-300 hover:border-gray-300"
          >
            <FaHandScissors className="text-4xl mb-2" />
            <span className="text-gray-800 text-xl font-semibold">CARTA, FORBICE E SASSO</span>
          </button>
        </div>
      </div>
    );
  }
  
  export default Home;