
import Post from './Post';
import './Post.css'; 

const Post1 = () => {
  return (
    <div className="app-container">
      <Post
        author="JohnDoe"
        subredittitle= "Help"
        hour= "10"
        title="Come and say nice things. I'm feeling down today :C"
        description="Everyone deserves good vives!."
        imageUrl="https://via.placeholder.com/80"
      />
    </div>
  );
};

export default Post1;
