import React from 'react'

const Signup = () => {
  return (
    <div className="flex w-full h-screen text-center justify-center bg-[#0F172A]">
        <div className="w-[50%] my-auto p-16 rounded-xl">
            <div>
                <h1 className="text-2xl text-white font-bold mb-5">Signup</h1>
            </div>
            <form>
                <input type="text" className="w-full py-2 px-3 rounded-md mb-2" placeholder="Username"/>
                <input type="tel" className="w-full py-2 px-3 rounded-md mb-2" placeholder="Phone"/>
                <input type="password" className="w-full py-2 px-3 rounded-md mb-5" placeholder="password"/>
                <button className="bg-sky-700 w-full py-2 px-3 rounded-md text-white texl-2xl" type="submit" >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Signup