import React from 'react'

const GithubProjectCard = ({Name,ImageUrl,GithubUrl}:{Name:string; ImageUrl:string; GithubUrl:string}) => {
  return (
    <div>
        <a href={GithubUrl}  target="__blank" rel="noopener noreferrer" >
            <div className=' hover:shadow-md transform duration-500 hover:scale-105 rounded-lg p-[2px] pb-2 border border-teal-200/40 max-w-[400px] w-screen   min-w-[300px]  shadow-teal-300'>
                <div className="relative  bg-white h-[250px] overflow-hidden rounded-lg border-2 border-gray-300">
                  <img
                    src={ImageUrl}
                    className=" scale-[1] origin-top-left h-full"
                    alt={Name}
                  />
                </div>
                <div className='text-lg mt-2 flex items-center justify-center w-full mb-0 text-white'>
                    {Name}
                </div>
            </div>
        </a>

    </div>
  )
}

export default GithubProjectCard