import React from 'react'
import { useUserStore } from "../Store/UserStore";
const Home = () => {
  const {allUsersData} = useUserStore()
  const count = allUsersData.length;
  return (
    <div>
      <div className='max-w-md mx-auto mt-[20vh] p-6 bg-white shadow-md rounded-xl'>
      <h2 className='text-center text-4xl mt-1 text-blue-500'>User Details</h2>
      <h2 className='text-center text-xl mt-5'>Total Users Data: {count}</h2>
      </div>
    </div>
  )
}

export default Home
