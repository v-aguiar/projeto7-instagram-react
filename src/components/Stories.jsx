import Story from "./Story";

export default function Stories() {
  const stories = [
    {
      title: "9gag",
      image: "assets/stories/9gag.png",
      alt: "9gag profile",
    },
    {
      title: "meowed",
      image: "assets/stories/meowed.png",
      alt: "meowed profile",
    },
    {
      title: "barked",
      image: "assets/stories/barked.png",
      alt: "barked profile",
    },
    {
      title: "nathanwpyle...",
      image: "assets/stories/nathanwpylestrangeplanet.png",
      alt: "nathanwpylestrangeplanet profile",
    },
    {
      title: "wawawiwac...",
      image: "assets/stories/wawawiwacomicsa.png",
      alt: "wawawiwacomicsa profile",
    },
    {
      title: "respondeai",
      image: "assets/stories/respondeai.png",
      alt: "respondeai profile",
    },
    {
      title: "filomoderna",
      image: "assets/stories/filomoderna.png",
      alt: "filomoderna profile",
    },
    {
      title: "memeriago...",
      image: "assets/stories/memeriagourmet.jpeg",
      alt: "memeriagourmet profile",
    }
  ]

  return (
    <div className="stories">
      <button className="storiesArrowButton">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </button>

      {stories.map((story) => <Story image={story.image} alt={story.alt} title={story.title} />)}

    </div>
  )
}