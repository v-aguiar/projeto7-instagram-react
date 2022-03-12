export default function PostContent(props) {
  const {image, alt} = props

  return (
    <img src={image} alt={alt} class="postImage" />
  )
}