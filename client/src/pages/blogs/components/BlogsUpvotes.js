import React from 'react';

const UpvotesSection = ({blogName, upvotes, setBlogInfo}) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/blogs/${blogName}/upvote`, {
      method: 'post',
    });
    const body = await result.json();
    setBlogInfo(body);
  }
  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteArticle()}><i className="icofont-thumbs-up"></i> Likes ({upvotes})</button>
    </div>
  );
}

export default UpvotesSection;