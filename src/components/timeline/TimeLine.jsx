import React, { useEffect, useState } from 'react'
import "./TimeLine.css";
import Share from '../share/Share';
import Post from '../post/Post';
// import { Posts } from "../../dummyData";
import axios from "axios"

export default function TimeLine() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts/timeline/64a4df423074c2dfa5b8dcaa");
      // console.log(response);
      setPosts(response.data);
    }
    fetchPosts();
  },)

  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}
