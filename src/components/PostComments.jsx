import CommentLine from "./CommentLine";

export default function PostComments(props) {
  const {name, description, commentsContainer, seeAllCommentsText, postedTime} = props.comments;

  return (
    <div className="postComments">
      <span className="commentLine">
        <span>
          <h4>{name}</h4>
          <p>{description}</p>
        </span>
      </span>

      <small>{seeAllCommentsText}</small>

      {commentsContainer.map(data => <CommentLine name={data.name} comment={data.comment} />)}

      <small className="postedTime">{postedTime}</small>

      <div className="commentInput">
        <ion-icon name="happy-outline"></ion-icon>
        <input type="text" placeholder="Adicione um comentário..." />
        <a href="/">
          <h4>Publicar</h4>
        </a>
      </div>
    </div>
  )
}