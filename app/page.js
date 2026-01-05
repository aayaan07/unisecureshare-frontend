import Link from 'next/link'
import React from 'react'

export default function page( ){
  return (
    <div className='w-fit flex flex-col items-center space-y-3 mx-auto mt-60'>
      <b>SignIn page (under progress)</b>
      <Link className='p-2 bg-gray-300 rounded-md cursor-pointer hover:scale-[1.02]' href={'/student'}>Student Role</Link>
      <Link className='p-2 bg-gray-300 rounded-md cursor-pointer hover:scale-[1.02]' href={'/faculty'}>Faculty Role</Link>
    </div>
  )
}