
const HostedProject = ({ Url, Name }: { Url: string; Name: string }) => {
  return (
    <div>

         <a href={Url}  target="__blank" rel="noopener noreferrer" >
            <div className=' hover:shadow-md transform duration-500 hover:scale-105 rounded-lg p-[2px] pb-2 border border-teal-200/40 max-w-[400px] w-screen   min-w-[300px]  shadow-teal-300'>
                <div className="relative -z-10 bg-white h-[250px] overflow-hidden rounded-lg border-2 border-gray-300">
                  <div className='absolute w-2 h-2 m-2 animate-ping rounded-full bg-green-400 z-10'>
                    
                  </div>
                  
                  <iframe
                    src={Url}
                    className="absolute top-[0px] left-[0px] scale-[0.49] origin-top-left w-[800px] h-[800px] pointer-events-none"
                    title={Name}
                  ></iframe>
                  
                </div>
                <div className='text-lg mt-2 flex items-center justify-center w-full mb-0 text-white'>
                    {Name}
                </div>
            </div>
        </a>

    </div>
  )
}

export default HostedProject