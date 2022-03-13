export default function Story(props) {
  const {image, alt, title} = props

  return (
    <div className="story">
      <div className="storyBg">
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