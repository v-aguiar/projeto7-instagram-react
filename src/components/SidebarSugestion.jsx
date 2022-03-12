export default function SidebarSugestion(props) {
  const {image, alt, name} = props;

  return (
    <div class="sidebarSugestion">
      <div>
        <img src={image} alt={alt} />
        <div class="sugestionDescription">
          <h4>{name}</h4>
          <p>Segue você</p>
        </div>
      </div>
      <h4 class="--blue">Seguir</h4>
    </div>
  )
}