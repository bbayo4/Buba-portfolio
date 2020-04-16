import React from 'react';

const CommentsList = ({comments}) => {
  return(
    <>
      <div id="comments">
        <h4 className="font-accident-one-light uppercase">{comments && comments.length} comments:</h4>
        <ul className="media-list">
          {comments.map((comment, key) => (
            <li className="media comments-list" key={key}>
              <div className="media-left">
                <a href="!#">
                  <img className="media-object"  alt="64x64" src="/assets/img/profile-img3.jpg" />
                </a>
              </div>
              <div className="media-body">
                <div className="post-data">
                  <div className="post-date">2014 Jun, 14</div>
                  <div className="post-author"><a href="!#">{comment.username}</a></div>
                </div>
                <p>{comment.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CommentsList;