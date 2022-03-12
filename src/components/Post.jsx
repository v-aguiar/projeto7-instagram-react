import PostBottom from "./PostBottom"
import PostContent from "./PostContent"
import PostTop from "./PostTop"

export default function Post() {
  const postsData = [
    {
      profile: {
        name: "meowed",
        image: "assets/stories/meowed.png",
        alt: "meowed profile"
      },
      image: "assets/posts/black-cat.jpg",
      alt: "Imagem principal do post",
      likes: {
        image: "assets/respondeai-logo.svg",
        alt: "Pequena imagem de prefil de quem curtiu",
        description: <p>Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></p>
      },
      comments: {
        name: "meowed",
        description: "Descrição do post do gatineo 🐱",
        seeAllCommentsText: "Ver todos os 13 comentários",
        commentsContainer: [
          {
            name: "Fulano",
            comment: "Comentário de Fulano"
          },
          {
            name: "Ciclano",
            comment: "Comentário de Ciclano"
          },
          {
            name: "Beltrano",
            comment: "Comentário de Beltrano"
          }
        ],
        postedTime: "HÁ 1 DIA"
      }
    },
    {
      profile: {
        name: "barked",
        image: "assets/stories/barked.png",
        alt: "barked profile"
      },
      image: "assets/posts/dog-yolo.jpg",
      alt: "Imagem principal do post",
      likes: {
        image: "assets/adorableanimals-logo.svg",
        alt: "Pequena imagem de prefil de quem curtiu",
        description: <p>Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong></p>
      },
      comments: {
        name: "barked",
        description: "Descrição do post do doguineo 🐶",
        seeAllCommentsText: "Ver todos os 13 comentários",
        commentsContainer: [
          {
            name: "Fulano",
            comment: "Comentário de Fulano"
          },
          {
            name: "Ciclano",
            comment: "Comentário de Ciclano"
          },
          {
            name: "Beltrano",
            comment: "Comentário de Beltrano"
          },
        ],
        postedTime: "HÁ 1 DIA"
      }
    }
  ]

  return (
    postsData.map((postData) => {
      return (
        <div class="post">
          <PostTop name={postData.profile.name} image={postData.profile.image} alt={postData.profile.alt} />
          <PostContent image={postData.image} alt={postData.alt} />
          <PostBottom comments={postData.comments} likes={postData.likes} />
        </div>
      )
    })
  )
} 