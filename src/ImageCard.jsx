import { useState } from "react";

function ImageCard({ url, title, description, author, uploadedDatetime, onGlobalLike, onGlobalDislike }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const likeClick = () => {
    setLike((prev) => prev + 1);      
    onGlobalLike();                   
  };

  const dislikeClick = () => {
    setDislike((prev) => prev + 1);   
    onGlobalDislike();                
  };

  const addComment = () => {
    const trimmed = commentText.trim();
    if (trimmed === "") return;
    setComments((prev) => [...prev, trimmed]);
    setCommentText("");
  };

  return (
    <div style={{
         textAlign: 'center',
         padding: '15px',
         border: '1px solid #ccc',
         borderRadius: '10px',
         margin: '-5px auto',
         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
         backgroundColor: '#ffffff',
         fontFamily: 'sans-serif',
         fontSize: '18px',
         color: '#555',
    }}>

      <img
        src={url}
        alt={title}
        style={{
        width: '380px',
        height: '250px',
        borderRadius: '5px',
      }}/>

      <h2 style={{marginTop: '15px', color: '#273347',}}>{title}</h2>
      <p style={{marginTop: '-10px'}}>{description}</p>
      <p><span style={{fontWeight: 'bold', color: '#273347'}}>Author: </span>{author}</p>
      <p style={{marginBottom: '5px'}}><span style={{fontWeight: 'bold', color: '#273347'}}>Uploaded: </span>{uploadedDatetime}</p>

      <div style={{display: 'flex', justifyContent: 'center', margin: '20px'}}>
        <button onClick={likeClick} style={{padding: '10px 18px 10px 18px', fontSize: '15px', fontWeight: 'bold'}}>&#x1F44D; {like}</button>
        <button onClick={dislikeClick} style={{padding: '10px 18px 10px 18px', fontSize: '15px', fontWeight: 'bold'}}>&#x1F44E; {dislike}</button>
      </div>

      <div style={{display: 'flex', justifyContent: 'center', margin: '-20px'}}>
        <input
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          style={{height: '18px', width: '50%', marginTop: '9px', border: '1px solid #555', borderRadius: '3px', fontSize: '12px'}}
        />
        <button onClick={addComment} style={{padding: '10px 18px 10px 18px', fontSize: '15px', fontWeight: 'bold'}}>Add</button>
      </div>

      <ul style={{listStyleType: 'disc', textAlign: 'left'}}>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
export default ImageCard;