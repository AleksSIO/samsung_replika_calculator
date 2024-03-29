import React, { useEffect, useState } from "react";
import { BiRuler } from "react-icons/bi";
import { TbClockHour3 } from "react-icons/tb";
import { IoBackspaceOutline } from "react-icons/io5";
import { AiOutlineFunction } from "react-icons/ai";
import { Link } from "react-router-dom";
import History from "./History";
import { HiOutlineCalculator } from "react-icons/hi";

const BasicCalc = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [disabled, setDisabled] = useState(true); // Définir à true au départ
  
    const [openHistory, setOpenHistory] = useState(false);

    const handleHistory = () => {
        setOpenHistory(!openHistory);
    };

    useEffect(() => {
      if (input === "") {
        setDisabled(true); // Désactiver le bouton lorsque l'entrée est vide
      } else {
        setDisabled(false); // Activer le bouton lorsque l'entrée n'est pas vide
      }
    }, [input]); // Mettre à jour lorsque l'entrée change
  
    const handleInput = (e) => {
      let value = e.target.textContent;
  
      // Convertir x en *
      if (value === "×") {
        value = "*";
      } else if (value === "÷") {
        value = "/";
      }
  
      if (value === "=") {
        try {
          setInput(result);
          setResult("");
        } catch (error) {
          setResult("");
        }
      } else if (value === "C") {
        // Effacer la dernière entrée
        setInput((prevInput) => prevInput.slice(0, -1));
      } else {
        // Ajouter à l'entrée
        setInput((prevInput) => prevInput + value);
      }
    };
  
    // Mettre à jour le résultat à chaque changement de l'entrée
    useEffect(() => {
      try {
        const newResult = eval(input);
        setResult(newResult.toString());
      } catch (error) {
        setResult("");
      }
    }, [input]);

  return (
    <><div className="w-[440px] h-[90vh] bg-black flex flex-col items-center">
          <div className="w-[90%] h-[25%] px-4 rounded-3xl mt-5 flex flex-col items-end justify-end">
            <div id="input" className="text-white mb-[7rem]  absolute text-[45px] px-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none text-white w-full h-full text-right" />
            </div>
            <div id="result" className="text-white/50 mb-2 absolute text-[25px] px-2">
              {result}
            </div>
          </div>
          <div className="border-b-[0.1px] w-[90%] border-gray-400/20">
            <div className="flex ml-2 gap-8 mb-6">
              {!openHistory && (
              <button onClick={handleHistory} className="hover:bg-gray-700 p-3 rounded-full cursor-pointer">
                <TbClockHour3 color="white" size={27} />
              </button>
            )}
            {openHistory && (
              <button onClick={handleHistory} className="hover:bg-gray-700 p-3 rounded-full cursor-pointer">
                <HiOutlineCalculator color="white" size={27} />
              </button>
            )}
              <Link to="/c" className="hover:bg-gray-700 p-3 rounded-full cursor-pointer">
                <BiRuler color="white" size={27} />
              </Link>
              <Link to="/s" className="hover:bg-gray-700 p-3 rounded-full cursor-pointer">
                <AiOutlineFunction color="white" size={27} />
              </Link>
              <button
                disabled={disabled}
                onClick={() => setInput(input.slice(0, -1))} // Utiliser setInput pour effacer le dernier caractère
                className={`${disabled ? "" : "hover:bg-gray-700"} ml-[5rem] p-3 rounded-full cursor-pointer`}
              >
                <IoBackspaceOutline color={disabled ? "gray" : "white"} size={27} />
              </button>
            </div>
          </div>
          {openHistory && <History basic="true"/>}
          <div className="grid w-[90%] mt-5 h-[20vh] gap-5 rounded-3xl grid-cols-4 text-white">
            <button onClick={handleInput} className="btn text-[#eb2517]">
              C
            </button>
            <button onClick={handleInput} className="btn-alt" dangerouslySetInnerHTML={{ __html: "( )" }}></button>
            <button onClick={handleInput} className="btn" dangerouslySetInnerHTML={{ __html: "%" }}></button>
            <button onClick={handleInput} className="btn" dangerouslySetInnerHTML={{ __html: "÷" }}></button>
            <button onClick={handleInput} className="btn">
              7
            </button>
            <button onClick={handleInput} className="btn">
              8
            </button>
            <button onClick={handleInput} className="btn">
              9
            </button>
            <button onClick={handleInput} className="btn" dangerouslySetInnerHTML={{ __html: "×" }}></button>
            <button onClick={handleInput} className="btn">
              4
            </button>
            <button onClick={handleInput} className="btn">
              5
            </button>
            <button onClick={handleInput} className="btn">
              6
            </button>
            <button onClick={handleInput} className="btn">
              -
            </button>
            <button onClick={handleInput} className="btn">
              1
            </button>
            <button onClick={handleInput} className="btn">
              2
            </button>
            <button onClick={handleInput} className="btn">
              3
            </button>
            <button onClick={handleInput} className="btn">
              +
            </button>
            <button onClick={handleInput} className="btn-alt" dangerouslySetInnerHTML={{ __html: "+/-" }}></button>
            <button onClick={handleInput} className="btn">
              0
            </button>
            <button onClick={handleInput} className="btn">
              ,
            </button>
            <button onClick={handleInput} className="btn-equal">
              =
            </button>
          </div>
        </div></>
  )
}

export default BasicCalc