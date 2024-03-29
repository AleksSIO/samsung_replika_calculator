import React, { useEffect, useState } from "react";
import { BiRuler, BiMath } from "react-icons/bi";
import { TbClockHour3 } from "react-icons/tb";
import { IoBackspaceOutline } from "react-icons/io5";
import { AiOutlineFunction } from "react-icons/ai";
import { GoArrowSwitch } from "react-icons/go";
import { Link } from "react-router-dom";
import History from "./History";
import { HiOutlineCalculator } from "react-icons/hi";

const SpecialCalc = () => {
  const [second, setSecond] = useState(false);
  const [rad, setRad] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);

  const handleHistory = () => {
    setOpenHistory(!openHistory);
  };

  const handleSecond = () => {
    setSecond(!second);
  };

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [disabled, setDisabled] = useState(true); // Définir à true au départ

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

  const handleRad = () => {
    setRad(!rad);
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
    <>
      <div className="w-[900px] h-[440px] bg-black flex flex-col items-center justify-end">
        {rad && (
          <div className="text-white absolute bottom-[62%] left-[30%]">
            Rad
          </div>
        )}
        <div className="w-[72%] px-4 rounded-3xl mt-5 flex flex-col items-end justify-end">
          <div id="input" className="text-white mb-[4.5rem] absolute text-[45px] px-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none text-white w-full h-full text-right"
            />
          </div>
          <div id="result" className="text-white/50 mb-1.5 absolute text-[25px] px-2">
            {result}
          </div>
        </div>
        <div className="border-b-[0.1px] w-[77%] border-gray-400/20 mb-4 mr-2">
          <div className="flex ml-2 gap-8 mb-3">
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
            <Link to="/" className="hover:bg-gray-700 p-3 rounded-full cursor-pointer">
              <BiMath color="white" size={27} />
            </Link>
            <button
              disabled={disabled}
              onClick={() => setInput(input.slice(0, -1))} // Utiliser setInput pour effacer le dernier caractère
              className={`${disabled ? "" : "hover:bg-gray-700"} ml-[22.5rem] p-3 rounded-full cursor-pointer`}
            >
              <IoBackspaceOutline color={disabled ? "gray" : "white"} size={27} />
            </button>
          </div>
        </div>
        {openHistory && <History basic="false" />}
        <div className="mb-5 grid ml-5 gap-2 grid-cols-7 w-[80%] text-white">
          <button onClick={() => handleSecond()} className="small-btn">
            <GoArrowSwitch />
          </button>
          <button onClick={() => handleRad()} className="small-btn">
            {!rad ? "Rad" : "Deg"}
          </button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "√" : "∛"}
          </button>
          <button onClick={handleInput} className="small-btn-num text-[#eb2517]">
            C
          </button>
          <button onClick={handleInput} className="small-btn" dangerouslySetInnerHTML={{ __html: "( )" }}></button>
          <button onClick={handleInput} className="small-btn-num" dangerouslySetInnerHTML={{ __html: "%" }}></button>
          <button onClick={handleInput} className="small-btn-symbol" dangerouslySetInnerHTML={{ __html: "÷" }}></button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "sin" : "sin⁻¹"}
          </button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "cos" : "cos⁻¹"}
          </button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "tan" : "tan⁻¹"}
          </button>
          <button onClick={handleInput} className="small-btn-num">
            7
          </button>
          <button onClick={handleInput} className="small-btn-num">
            8
          </button>
          <button onClick={handleInput} className="small-btn-num">
            9
          </button>
          <button onClick={handleInput} className="small-btn-symbol">
            -
          </button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "ln" : "sinh"}
          </button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "log" : "cosh"}
          </button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "1/x" : "tanh"}
          </button>
          <button onClick={handleInput} className="small-btn-num">
            4
          </button>
          <button onClick={handleInput} className="small-btn-num">
            5
          </button>
          <button onClick={handleInput} className="small-btn-num">
            6
          </button>
          <button onClick={handleInput} className="small-btn-symbol">
            -
          </button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "eˣ" : "sinh⁻¹"}
          </button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "x²" : "cosh⁻¹"}
          </button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "xʸ" : "tanh⁻¹"}
          </button>
          <button onClick={handleInput} className="small-btn-num">
            1
          </button>
          <button onClick={handleInput} className="small-btn-num">
            2
          </button>
          <button onClick={handleInput} className="small-btn-num">
            3
          </button>
          <button onClick={handleInput} className="small-btn-symbol">
            +
          </button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "|x|" : "2ˣ"}
          </button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "π" : "x³"}
          </button>
          <button onClick={handleInput} className="small-btn">
            {!second ? "e" : "x!"}
          </button>
          <button onClick={handleInput} className="small-btn-num">
            +/-
          </button>
          <button onClick={handleInput} className="small-btn-num">
            0
          </button>
          <button onClick={handleInput} className="small-btn-num">
            ,
          </button>
          <button onClick={handleInput} className="small-btn-symbol">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default SpecialCalc;
