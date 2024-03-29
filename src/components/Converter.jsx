import React, {useState} from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { unites } from '../constants';
import ScrollableList from './design/ScrollableList';

const Converter = () => {

    const [active,setActive] = useState("Aire");

  return (
    <><div className="w-[440px] h-[90vh] bg-black flex flex-col items-center">
        <div className='mt-4 flex gap-3 flex-row items-center -ml-28'>
        <Link to="/"><IoIosArrowBack size={30} color='white' /></Link>
        <h1 className='text-white font-bold text-[25px]'>Convertisseur d'unités</h1>
        </div>
        <ScrollableList>
    <div className='flex px-2 gap-2 mt-7 '>
      {unites.map((item, index) => (
        <button key={index} onClick={() => setActive(item.title)} className={`text-white ${active === item.title ? "bg-gray-500/25" : ""}  px-3 rounded-full py-[5px]`}>{item.title}</button>
      ))}
    </div>
  </ScrollableList>
    </div></>
  )
}

export default Converter