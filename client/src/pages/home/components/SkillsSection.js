import React from 'react';
import skillsContent from './skills-content';
import SkillsProgress from './SkillProgress';

const SkillsSection = () => {
  return(
    <>
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="row skills-content">
            <SkillsProgress technologies={skillsContent.native} />
            <SkillsProgress technologies={skillsContent.framework} />
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillsSection;