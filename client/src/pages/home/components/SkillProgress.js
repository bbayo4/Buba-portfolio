import React, {useEffect} from 'react';

import $ from 'jquery';

const SkillsProgress = ({technologies}) => {

  useEffect(() => {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, []);

  return(
    <>
      <div className="col-lg-6">
        {
          technologies.map((technology, key) => {
            return(
              <div className="progress" key={key}>
                <span className="skill">{technology.name} <i className="val">{technology.value}%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={technology.value} aria-valuemin="0" aria-valuemax={technology.value}></div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default SkillsProgress;