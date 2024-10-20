import React from 'react'

const Home = () => {
  return (
  
      <div className="mainContainer">
      <div className="card mx-auto border border-black bg-gray-900 text-white h-96 w-3/5 mt-32 flex">

        <div className="leftCard w-1/2 flex justify-center items-center">
          Welcome to our chatApp
        </div>

        <div className="rightCard w-1/2 bg-gray-700 flex justify-center items-center flex-col">
          <div className="h-1/3">
            <img src="#" alt="Logo" />
          </div>
          <div className="flex justify-between gap-20">
            <button className=" border border-blue-200 px-14 py-2">Login</button>
            <button className=" border border-blue-200 px-14 py-2">Signup</button>
          </div>
        </div>

      </div>
    </div>
  
  )
}

export default Home
