import About from './About'
import Resume from './Resume'
import Section, { Headline } from './Section'
import Skills from './Skills'
import mainStyles from './AboutPage.module.css'

export default function AboutPage () {
  const { content, detail, skill, skills } = mainStyles

  return (
    <>
      <About />
      <Skills />
      <Resume />
    </>
  )
}
