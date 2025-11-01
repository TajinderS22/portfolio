
const EducationCard = ({instituteName,course,courseShortForm,instituteImage,Major,Marks}:{
    instituteName:string,course:string,courseShortForm:string,instituteImage:string,Major:string,Marks?:string

}) => {

  const NIT='Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR'

  return (
    
    <div className={`w-11/12 mx-auto bg-white z-10 dark:bg-black/20 not-md:h-92 md:${instituteName==NIT?'z-10':""} text-black sticky md:top-20  rounded-xl top-20 dark:text-indigo-100     not-md:flex-col-reverse `}>
      <div className={` bg-stone-200 h-full dark:bg-stone-700/60 backdrop-blur-3xl  hover:bg-stone-50/70  hover:text-black transform duration-500  border p-6 rounded-xl flex justify-between w-full    border-indigo-400/40 my-6 `}>
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
          className={`h-full transform drop-shadow-lg drop-shadow-stone-600  `}
          src={instituteImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default EducationCard