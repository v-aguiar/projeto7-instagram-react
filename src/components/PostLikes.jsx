export default function PostLikes(props) {
  const {image, alt, description} = props;

  return (
    <span className="postLikes">
      <img src={image} alt={alt} className="likesImage" />
      {description}
    </span>
  )
}