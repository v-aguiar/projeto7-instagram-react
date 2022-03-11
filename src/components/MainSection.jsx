export default function MainSection() {
  return (
    <section id="mainSection">
      <div class="stories">
        <button class="storiesArrowButton">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </button>
        <div class="story">
          <div class="storyBg">
            <a href="/">
              <img src="assets/stories/9gag.png" alt="9gag profile" />
            </a>
          </div>
          <p>
            9gag
          </p>
        </div>

        <div class="story">
          <div class="storyBg">
            <a href="/">
              <img src="assets/stories/meowed.png" alt="meowed profile" />
            </a>
          </div>
          <p>
            meowed
          </p>
        </div>

        <div class="story">
          <div class="storyBg">

            <a href="/">
              <img src="assets/stories/barked.png" alt="barked profile" />
            </a>
          </div>
          <p>
            barked
          </p>
        </div>

        <div class="story">
          <div class="storyBg">

            <a href="/">
              <img src="assets/stories/nathanwpylestrangeplanet.png" alt="nathanwpylestrangeplanet profile" />
            </a>
          </div>
          <p>
            nathanwpyle...
          </p>
        </div>

        <div class="story">
          <div class="storyBg">

            <a href="/">
              <img src="assets/stories/wawawiwacomicsa.png" alt="wawawiwa comic profile" />
            </a>
          </div>
          <p>
            wawawiwac...
          </p>
        </div>

        <div class="story">
          <div class="storyBg">

            <a href="/">
              <img src="assets/stories/respondeai.png" alt="respondeai profile" />
            </a>
          </div>
          <p>
            respondeai
          </p>
        </div>

        <div class="story">
          <div class="storyBg">

            <a href="/">
              <img src="assets/stories/filomoderna.png" alt="filomoderna profile" />
            </a>
          </div>
          <p>
            filomoderna
          </p>
        </div>

        <div class="story">
          <div class="storyBg">

            <a href="/">
              <img src="assets/stories/memeriagourmet.jpeg" alt="memeriagourmet profile" />
            </a>
          </div>
          <p>
            memeriago.
          </p>
        </div>
      </div>

      <div class="feed">
        <div class="post">
          <div class="postTop">
            <span>
              <img src="assets/stories/meowed.png" alt="meowed profile" />
              <h4>meowed</h4>
            </span>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>

          <img
            src="https://s3-alpha-sig.figma.com/img/5dc6/c10c/ad550a8d08d64e5a1d6ddf9ddfe839d8?Expires=1643587200&Signature=a7W4ynQ537pBNoj5bpfmw5NfA6t4EgVC5syVL6sw4R2mkeZ7luzz5vyaLj2oRrEo72QZc74hC6DOcC3vhJ9Lu2xtWmLD4OtH0kiQ-KsOOaHCthhJTrT6LSC~samF-hfr0g3v3ZEfNqp4~rhTHlB1aeazCyjU9FHi2ntEQwoKonjMiowD2um9fNQXrR9e0JYgpcl~LAzMRls96mVwsof5xd35TTiG1Gf9ptqzipSYoXVKMwWddBTKsCjWtF1ZmzjgL-I9iAlvldWEu~spY2JmEONEBnRZWX~EdejTtnogYaf8bVP~36n9bYYt-U7SmRv41i92RSfi6IRqZEuYSGQIaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="Imagem principal do post" class="postImage" />

          <div class="postBottom">
            <div class="postInteractions">
              <span class="postIcons">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </span>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>

            <span>
              <img src="assets/respondeai-logo.svg" alt="Imagem pequena de quem curtiu" class="likesImage" />
              <p>Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></p>
            </span>

            <div class="postComments">
              <span class="commentLine">
                <span>
                  <h4>meowed</h4>
                  <p>Descrição do post do gatineo 🐱</p>
                </span>
              </span>

              <small>Ver todos os 13 comentários</small>

              <span class="commentLine">
                <span>
                  <h4>Fulano</h4>
                  <p>Comentário de Fulano</p>
                </span>
                <ion-icon name="heart-outline"></ion-icon>
              </span>

              <span class="commentLine">
                <span>
                  <h4>Ciclano</h4>
                  <p>Comentário de Ciclano</p>
                </span>
                <ion-icon name="heart-outline"></ion-icon>
              </span>

              <span class="commentLine">
                <span>
                  <h4>Beltrano</h4>
                  <p>Comentário de Beltrano</p>
                </span>
                <ion-icon name="heart-outline"></ion-icon>
              </span>

              <small class="postedTime">HÁ 1 DIA</small>

              <div class="commentInput">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..." />
                <a href="/">
                  <h4>Publicar</h4>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="post">
          <div class="postTop">
            <span>
              <img src="assets/stories/barked.png" alt="barked profile" />
              <h4>barked</h4>
            </span>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>

          <img
            src="https://s3-alpha-sig.figma.com/img/0a12/afdc/ce6fdaa2f15ccda3387decdf5e32ee78?Expires=1643587200&Signature=e~qnSl76IoloC9XOEgzodElQfvUdbcnibnb6ofIfLCzk8rzVPBhYrTzLVBS0ZJM1mCYWjZGgxPWVPdRoJJz5YePRibpIC7SMI-Z7ApHuotJJrY~KK1TcioBadItvTGo1Pn34YWZ0I5PA0pJWmI8G-Th6780bTzhVhD9torrlI-Ef566BW7cXEvPHeXW1jldfRDgDkgjL3kbZchwky5-uBC0m8-E5alIEzWBo2MigGDV5QvADlcM~-Z0pE2D3BzofmuMUoQmxXkZLm9idNPxYBMBuPn0ITxiorF4rGCe5wnlkIvYju2WqQf3YPib5p11ZteUw4ejRZNlOHKgVU0gcwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="Doguinho dormindinho" class="postImage" />

          <div class="postBottom">
            <div class="postInteractions">
              <span class="postIcons">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </span>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>

            <span>
              <img src="assets/adorableanimals-logo.svg" alt="Imagem pequena de quem curtiu" class="likesImage" />
              <p>Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong></p>
            </span>

            <div class="postComments">
              <span class="commentLine">
                <span>
                  <h4>barked</h4>
                  <p>Descrição do post do doguineo 🐶 </p>
                </span>
              </span>

              <small>Ver todos os 13 comentários</small>

              <span class="commentLine">
                <span>
                  <h4>Fulano</h4>
                  <p>Comentário de Fulano</p>
                </span>
                <ion-icon name="heart-outline"></ion-icon>
              </span>

              <span class="commentLine">
                <span>
                  <h4>Ciclano</h4>
                  <p>Comentário de Ciclano</p>
                </span>
                <ion-icon name="heart-outline"></ion-icon>
              </span>

              <span class="commentLine">
                <span>
                  <h4>Beltrano</h4>
                  <p>Comentário de Beltrano</p>
                </span>
                <ion-icon name="heart-outline"></ion-icon>
              </span>

              <small class="postedTime">HÁ 1 DIA</small>

              <div class="commentInput">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..." />
                <a href="/">
                  <h4>Publicar</h4>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="post">
          <div class="postTop">
            <span>
              <img src="assets/stories/meowed.png" alt="meowed profile" />
              <h4>meowed</h4>
            </span>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>

          <video class="postVideo" autoplay muted loop>
            <source src="assets/video.mp4" type="video/mp4" />
            <source src="assets/video.ogv" type="video/ogv" />
            Seu navegador não suporta vídeos.
          </video>

          <div class="postBottom">
            <div class="postInteractions">
              <span class="postIcons">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </span>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>

            <span>
              <img src="assets/respondeai-logo.svg" alt="Imagem pequena de quem curtiu" class="likesImage" />
              <p>Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></p>
            </span>

            <div class="postComments">
              <span class="commentLine">
                <span>
                  <h4>meowed</h4>
                  <p>Descrição do video</p>
                </span>
              </span>

              <small>Ver todos os 13 comentários</small>

              <span class="commentLine">
                <span>
                  <h4>Fulano</h4>
                  <p>Comentário de Fulano</p>
                </span>
                <ion-icon name="heart-outline"></ion-icon>
              </span>

              <span class="commentLine">
                <span>
                  <h4>Ciclano</h4>
                  <p>Comentário de Ciclano</p>
                </span>
                <ion-icon name="heart-outline"></ion-icon>
              </span>

              <span class="commentLine">
                <span>
                  <h4>Beltrano</h4>
                  <p>Comentário de Beltrano</p>
                </span>
                <ion-icon name="heart-outline"></ion-icon>
              </span>

              <small class="postedTime">HÁ 1 DIA</small>

              <div class="commentInput">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..." />
                <a href="/">
                  <h4>Publicar</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}