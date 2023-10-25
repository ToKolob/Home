import '../styles/components/MainContent.sass'
import  AboutContainer  from './AboutContainer'
import  ProjectsContainer  from './ProjectsContainer'
import  TechnologiesContainer from './TechnologiesContainer'
export default function MainContent() {
  return (
    <main id="main">
      <TechnologiesContainer/>
      <AboutContainer />      
      <ProjectsContainer/>
    </main>
  )
}


