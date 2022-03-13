import PostComments from "./PostComments";
import PostLikes from "./PostLikes";

export default function PostBottom(props) {
  const {comments, likes} = props;

  return (
    <div className="postBottom">
      <div className="postInteractions">
        <span className="postIcons">
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </span>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>

      <PostLikes image={likes.image} alt={likes.alt} description={likes.description} />

      <PostComments comments={comments} />
    </div>
  )
}