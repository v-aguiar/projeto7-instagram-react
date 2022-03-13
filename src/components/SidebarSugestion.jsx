export default function SidebarSugestion(props) {
  const {image, alt, name} = props;

  return (
    <div className="sidebarSugestion">
      <div>
        <img src={image} alt={alt} />
        <div className="sugestionDescription">
          <h4>{name}</h4>
          <p>Segue você</p>
        </div>
      </div>
      <h4 className="--blue">Seguir</h4>
    </div>
  )
}