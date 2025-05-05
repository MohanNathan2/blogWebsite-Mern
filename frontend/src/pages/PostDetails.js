import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
        const [posts , setPosts] = useState([]);
        const {id} = useParams();

        useEffect(() => {
            fetchPosts(id)
        },[])
    
        const fetchPosts = async (id) => {
            try {
                const res = await axios.get(`http://localhost:8000/api/posts/${id}`)
                setPosts(res.data);
            } catch (error) {
                console.log({message : error.message})
            }
        }

        if(!posts){
            return <div>Loading....</div>
        }

        const formattedDate = Intl.DateTimeFormat('en-US',{
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }).format(new Date (posts.createdAt))
  return (
    <div>
        <main class="container my-4">
        <div class="row">
            <article class="col-lg-8">
                <h2 class="blog-post-title">{posts.title}</h2>
                <p class="blog-post-meta">{formattedDate} by <a href="#">{posts.author}</a></p>

                <img class="mb-3 img-fluid" src="https://via.placeholder.com/300" alt=""/>
                <div class="blog-post-content">
                    <p>{posts.content}</p>
                </div>
            </article>
        </div>
    </main>
    </div>
  )
}

export default PostDetails
