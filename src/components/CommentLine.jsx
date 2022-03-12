export default function CommentLine(props) {
  const {name, comment} = props;
  return (
    <span class="commentLine">
      <span>
        <h4>{name}</h4>
        <p>{comment}</p>
      </span>
      <ion-icon name="heart-outline"></ion-icon>
    </span>
  )
}