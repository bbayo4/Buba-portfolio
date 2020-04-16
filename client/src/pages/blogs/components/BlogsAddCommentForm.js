import React, { useState } from 'react';

const AddCommentForm = ({blogName, setBlogInfo}) => {
  const [username, setUsername] = useState('');
  const [commentText, setCommnentText] = useState('');

  const addComment = async () => {
    const result = await fetch(`/api/blogs/${blogName}/add-comment`, {
      method: 'post',
      body: JSON.stringify({
        username,
        text: commentText
      }),
      headers:{
        'Content-Type': 'application/json',
      }
    });

    const body = await result.json();
    setBlogInfo(body);
    setUsername('');
    setCommnentText('');
  }
  return (
    <section id="contact" className="contact add-comment">
      <div className="container">
        <div className="row" data-aos="fade-in">
          <div className="col-lg-12 ">
            <div className="php-email-form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Comment</label>
                <textarea className="form-control" value={commentText} onChange={(event) => setCommnentText(event.target.value)} name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div className="validate"></div>
              </div>
              <div className="text-center">
                <button onClick={() => addComment()}>Add Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddCommentForm;