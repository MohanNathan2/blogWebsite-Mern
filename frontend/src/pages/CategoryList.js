import React ,{useState,useEffect}from 'react';
import Post from '../components/Posts';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostLists = () => {
    const [posts , setPosts] = useState([]);
    const [category , setcategory] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetchPosts(id);
        fetchcategory();
    },[])

    const fetchPosts = async(id) => {
      const res = await axios.get(`http://localhost:8000/api/posts/category/${id}`)
      setPosts(res.data)
    }

    const fetchcategory = async() => {
      const res = await axios.get(`http://localhost:8000/api/categories/${id}`)
      setcategory(res.data)
    }

    console.log(posts)

    
    if(!category){
        return <div>Loading....</div>
    }

  return (
    <>
    <main>
        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-8">
                    <h1 class="mb-4">{category.name}</h1>
                        {posts.length > 0 ? posts.map(posts => <Post post={posts} />):<h4>No posts available!</h4>}
                </div>
            </div>
        </div>
    </main>

    </>
  );
};

export default PostLists;
