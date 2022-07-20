import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase_config";
import { useNavigate } from "react-router-dom";

function AddPost({ isAuth }) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();
    const addPost = async () => {
        await addDoc(postsCollectionRef, { title, postText, author : {name: auth.currentUser.displayName, id: auth.currentUser.uid }, 
        });
        navigate("/");
    };

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="addPostPage">
            <div className="apContainer">
                <h1>Add a Post</h1>
                <div className="inputGp">
                    <label>Title: </label>
                    <input 
                    placeholder="Title..." 
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}/>
                </div>
                <div className="inputGp">
                    <label>Post: </label>
                    <textarea 
                    placeholder="Post..." 
                    onChange={(event) => {
                        setPostText(event.target.value);
                    }}/>
                </div>
                <button onClick={addPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default AddPost;