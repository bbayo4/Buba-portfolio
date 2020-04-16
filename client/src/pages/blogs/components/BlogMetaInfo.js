import React, { useState, useEffect} from 'react';

const BlogMetaInfo = ({name}) => {
  const [blogInfo, setBlogInfo] = useState({
    upvotes: 0,
    comments: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/blogs/${name}`)
      const body = await result.json();
      console.log(body)
      setBlogInfo(body);
    }
    fetchData();
  }, [name])
  return (
    <>
      <div className="metas">
        <i className="icofont-thumbs-up"></i> <a href="#!" className="meta-date">{blogInfo ? blogInfo.upvotes: 0}</a> |&nbsp;
        <i className="icofont-user"></i> <a href="#!" className="meta-author">admin</a> |&nbsp;
        <i className="icofont-comment"></i>&nbsp;<a href="#!" className="meta-comment">{ blogInfo ? blogInfo.comments.length : 0 }</a>
      </div>
    </>
  )
}

export default BlogMetaInfo;