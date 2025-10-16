import HostedProject from './HostedProject'
import GithubProjectCard from './GithubProjectCard'

const Projects = () => {


  return (
    <div className=' transform w-11/12  justify-start  gap-6 md:pl-6 mx-auto flex flex-wrap  '>

        <HostedProject Url={'https://agroadvisors.ddns.net'} Name={'AgroAdvisors'}/>
        <HostedProject Url={'https://brainly.tajinder.xyz'} Name={'Brainly'}/>
        <GithubProjectCard Name={'Tutty'} ImageUrl={'https://res.cloudinary.com/dcpz5001o/image/upload/v1759562428/Screenshot_from_2025-10-04_11-56-01_dq9gkr.png'} GithubUrl={'https://github.com/TajinderS22/Course-Selling-App-'}/>
        <GithubProjectCard Name={'Enchat'} ImageUrl={'https://res.cloudinary.com/dcpz5001o/image/upload/v1759573462/Screenshot_from_2025-10-04_15-53-59_akhn1n.png'} GithubUrl={'https://github.com/TajinderS22/Enchat'}/>
        <GithubProjectCard Name={'Netflix-GPT'} ImageUrl={'https://res.cloudinary.com/dcpz5001o/image/upload/v1759581932/Screenshot_from_2025-10-04_18-13-26_ttscvf.png'} GithubUrl={'https://github.com/TajinderS22/netflix-gpt/'}/>
    </div>
  )
}

export default Projects