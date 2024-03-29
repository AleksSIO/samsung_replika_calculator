import React from 'react'

const History = ({basic}) => {
  return (
    <div className={`z-[500] text-white border-r-[1px] border-gray-400/40 absolute flex flex-col items-end justify-end bg-black ${basic === "true" ? "w-[20rem]  h-[32.5rem] bottom-[5%] left-[37%]" : " w-[19rem]  h-[14rem] bottom-[26%] left-[28.5%]"}`}>
   <button className={`text-black  font-bold bg-white w-[70%] h-[2rem] rounded-3xl ${basic === "true" ? "mr-12 mb-8" : "mr-12 mb-5"}`}>Effacer l'historique</button>
    </div>
  )
}

export default History