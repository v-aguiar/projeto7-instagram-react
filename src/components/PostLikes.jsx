export default function PostLikes(props) {
  const {image, alt, description} = props;

  return (
    <span class="postLikes">
      <img src={image} alt={alt} class="likesImage" />
      {description}
    </span>
  )
}