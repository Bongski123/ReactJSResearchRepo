import "./styles.css";
import { Title } from "../components/Title/Title";
import { Body } from "../components/Body/Body";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar/Navbar";

const PublicationList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        await axios.get('http://127.0.0.1:9000/api/publications')
            .then(({ data }) => {
                setPosts(data);
            });
    };

    return (
        <div className="publication">
            <div className="publication-form">
            <ul>
                    {posts.length > 0 && posts.map((post, index) => (
                        <li className="titlelist" key={index}>
                            {/* Make the title clickable */}
                            <a href={`/post/${post.id}`} style={{ fontSize: '15px', textDecoration: 'none' }}>{post.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
         
        </div>
    );
};

export default PublicationList;
