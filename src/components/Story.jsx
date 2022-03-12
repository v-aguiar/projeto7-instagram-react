export default function Story(props) {
  const {image, alt, title} = props

  return (
    <div class="story">
      <div class="storyBg">
        <a href="/">
          <img src={image} alt={alt} />
        </a>
      </div>
      <p>
        {title}
      </p>
    </div>
  )
}