
const EducationCard = ({instituteName,course,courseShortForm,instituteImage,Major,Marks}:{
    instituteName:string,course:string,courseShortForm:string,instituteImage:string,Major:string,Marks?:string
}) => {
  return (
    
    <div className=' text-white  not-md:flex-col-reverse hover:bg-gray-200 hover:drop-shadow-teal-100 hover:text-black transform duration-500  border p-6 rounded-xl flex justify-between w-10/12 mx-auto  border-[#51CFB3]/30 my-6 '>
      <div className='h-full '>
        <div className=' text-2xl'>
        {instituteName}
        </div>
        <p>
          <span className='text-md mr-2'>
            {course}
          </span>
          <span className='text-md mx-2'>
            {`(${courseShortForm})`}
          </span>   

          <div>
            {Major}
            </div>
            {Marks&&
                <div>
                {Marks}%
                </div> 
            }        
        </p>
      </div>
      {/* <div className={`${SCHOOL?"w-6/12":College?"w-[100px]":"w-[150px]"}`}>
        <img 
        className={`w-full transform drop-shadow-lg drop-shadow-teal-200  `}
        src={instituteImage} alt="" />
      </div> */}
      <div className='h-[120px] not-md:mb-6 min-w-[100px]'>
        <img 
        className={`h-full transform drop-shadow-lg drop-shadow-teal-200  `}
        src={instituteImage} alt="" />
      </div>
    </div>
  )
}

export default EducationCard