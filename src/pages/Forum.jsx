import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Post1 from "../components/post/Post1"
import CommentCard from "../components/post-comment-secction/CommentCard";

//portada del foro con enlace a los distintos posts y 
//dentro de los posts s e encontrara la caja de comentarios

function Forum() {
  return (
    <>
      <Navbar />
      <Post1 />
      <CommentCard />
      <Footer />
    </>
  );
}

export default Forum;

