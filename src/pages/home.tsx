import React from 'react'
import HeroSection from '../components/hero'
import PhotoGrid from '../components/photoGrid'
import WriteUp from '../components/writeUp'
import ProjectsSection from '../components/projectsSection'

export default function Home(): JSX.Element {
  return (
    <div className='Home py-9 mt-[70px]'>
        <HeroSection/>
        <PhotoGrid/>
        <WriteUp/>
        <ProjectsSection/>
    </div>
  )
}
