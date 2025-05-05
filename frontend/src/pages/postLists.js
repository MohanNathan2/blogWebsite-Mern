import React ,{useState,useEffect}from 'react';
import Post from '../components/Posts';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostLists = () => {
    const [posts , setPosts] = useState([]);
    const [categories , setcategories] = useState([]);


    useEffect(() => {
        fetchPosts();
        fetchcategories();
    },[])

    const fetchPosts = async() => {
      const res = await axios.get('http://localhost:8000/api/posts')
      setPosts(res.data)
    }

    const fetchcategories = async() => {
      const res = await axios.get('http://localhost:8000/api/categories')
      setcategories(res.data)
    }

    console.log(posts)

  return (
    <>
    
      <main>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mb-4">Latest Posts</h1>
              {posts.length > 0 ? posts.map(posts => <Post post={posts} />):<h4>No posts available!</h4>}
            </div>

            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">About Me</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Categories</h5>
                  <ul className="list-group">
                   {categories.map(category => <Link to={`/posts/category/${category._id}`} className="list-group-item"><a href="#" className="text-black">{category.name}</a></Link>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default PostLists;
