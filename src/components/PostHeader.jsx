export default function PostHeader(props) {
  const {name, image, alt} = props;
  return (
    <div className="postTop">
      <span>
        <img src={image} alt={alt} />
        <h4>{name}</h4>
      </span>
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  )
}