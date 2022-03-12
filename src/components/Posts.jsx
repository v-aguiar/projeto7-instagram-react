import PostBottom from "./PostBottom"
import PostHeader from "./PostHeader"

export default function Posts() {
  const postsData = [
    {
      profile: {
        name: "meowed",
        image: "assets/stories/meowed.png",
        alt: "meowed profile"
      },
      media: <img src="assets/posts/black-cat.jpg" alt="Imagem principal do post" class="postImage"></img>,
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
      media: <img src="assets/posts/dog-yolo.jpg" alt="Imagem principal do post" class="postImage" />,
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
    },
    {
      profile: {
        name: "meowed",
        image: "assets/stories/meowed.png",
        alt: "meowed profile"
      },
      media:
        <video class="postVideo" autoPlay muted loop>
          <source src="assets/video.mp4" type="video/mp4" />
          <source src="assets/video.ogv" type="video/ogv" />
          Seu navegador não suporta vídeos.
        </video>,
      likes: {
        image: "assets/respondeai-logo.svg",
        alt: "Pequena imagem de prefil de quem curtiu",
        description: <p>Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></p>
      },
      comments: {
        name: "meowed",
        description: "Descrição do vídeo",
        seeAllCommentsText: "Ver todos os 28 comentários",
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
        postedTime: "HÁ 1 HORA"
      }
    }
  ]

  return (
    postsData.map((postData) => {
      return (
        <div class="post">
          <PostHeader name={postData.profile.name} image={postData.profile.image} alt={postData.profile.alt} />
          {postData.media}
          <PostBottom comments={postData.comments} likes={postData.likes} />
        </div>
      )
    })
  )
}
