import Post from './Post';
import './Post.css';

const Post1 = () => {
  return (
    <div className="app-container">
      <Post
        author="JohnDoe"
        subredittitle="Help"
        hour="10"
        title="Come and say nice things. I'm feeling down today :C"
        description="Everyone deserves good vibes!"
        imageUrl="https://via.placeholder.com/80"
      />

      <Post
        author="Nanny"
        subredittitle="Hello!"
        hour="9"
        title="Hello guy! howd you doin!"
        description="what do you think about burnout?"
        imageUrl="https://via.placeholder.com/80"
      />

      <Post
        author="Maria"
        subredittitle="Hello!"
        hour="9"
        title="Hello guy! howd you doin!"
        description="what do you think about burnout?"
        imageUrl="https://via.placeholder.com/80"
      />

      <Post
        author="Alfonso"
        subredittitle="Hello!"
        hour="7"
        title="Hello guy! howd you doin!"
        description="what do you think about burnout?"
        imageUrl="https://via.placeholder.com/80"
      />

      <Post
        author="Tiburcio"
        subredittitle="Hello!"
        hour="10"
        title="Hello guy! howd you doin!"
        description="what do you think about burnout?"
        imageUrl="https://via.placeholder.com/80"
      />

      <Post
        author="Alejandro"
        subredittitle="Hello!"
        hour="12"
        title="Hello guy! howd you doin!"
        description="what do you think about burnout?"
        imageUrl="https://via.placeholder.com/80"
      />

      <Post
        author="Reina"
        subredittitle="Hello!"
        hour="12"
        title="Hello guy! howd you doin!"
        description="what do you think about burnout?"
        imageUrl="https://via.placeholder.com/80"
      />
    </div>
  );
};

export default Post1;
