import React from 'react'
import HeroSection from '../components/hero'
import PhotoGrid from '../components/photoGrid'
import WriteUp from '../components/writeUp'
import ProjectsSection from '../components/projectsSection'

export default function Home(): JSX.Element {
  return (
    <div>
        <HeroSection/>
        <PhotoGrid/>
        <WriteUp/>
        <ProjectsSection/>
    </div>
  )
}
