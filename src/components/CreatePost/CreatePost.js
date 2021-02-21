import { CardMedia, TextField } from '@material-ui/core'
import React from 'react';
import  { useState, useEffect } from 'react';
import {  Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';

import {addPost} from '../../actions/Posts'

const CreatePost = () => {

    const [postData, setPostData] = useState({  Title: '', Caption: '', myFile:null});

//   const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

  const dispatch = useDispatch();

  const classes = useStyles();
//   useEffect(() => {
//     if (post) setPostData(post);
//   }, [post]);

  const clear = () => {
    setPostData({ Title: '', Caption: '', myFile:null} );
    var reader = new FileReader();
 reader.onload = function()
 {
  var output = document.getElementById('preview_image');
  output.src ='' ;
 }
 setPosted(false);
 
  };
  const [posted,setPosted]= useState(false)
  const handleSubmit = async (e) => {
     e.preventDefault();

     const formData = new FormData();

    formData.append('Title', postData.Title );
    formData.append('Caption',postData.Caption );
    if(postData.myFile !== null ){
        formData.append('myFile', postData.myFile);
    }
    dispatch(addPost(formData));
    
    clear();

    setPosted(true);

   
  };
  const handleImageUpload =(e) =>{
    setPostData({...postData, myFile: e.target.files[0]});
    var reader = new FileReader();
 reader.onload = function()
 {
  var output = document.getElementById('preview_image');
  output.src = reader.result;
 }
 reader.readAsDataURL(e.target.files[0]);

  }


    return (
      
      <Paper className={classes.paper}>
        <h3>Create New Post</h3>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        
        
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.Title} onChange={(e) => setPostData({ ...postData, Title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Description" fullWidth multiline rows={4} value={postData.Caption} onChange={(e) => setPostData({ ...postData, Caption: e.target.value })} />
        <input type="file" name="myFile"  onChange={handleImageUpload}/>
        <div></div>
        <img id="preview_image" height="200" alt=""></img>
          
        {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, myFile: base64 })} /></div> */}
        <Button className={classes.button} variant="contained" color="primary" size="small" type="submit" fullWidth>Submit</Button>
        <Button className={classes.button} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        {posted && <h1>Success</h1>}
      </form>
    </Paper>
    )
    
}

export default CreatePost;
