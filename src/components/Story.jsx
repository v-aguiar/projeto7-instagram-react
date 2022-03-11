export default function Story(props) {
  return (
    <div class="story">
      <div class="storyBg">
        <a href="/">
          <img src={props.image} alt={props.alt} />
        </a>
      </div>
      <p>
        {props.title}
      </p>
    </div>
  )
}