

function Blog(props) {
  

  return (
    <div>
        <h3>{props.date}</h3>
      <h2>{props.blogtitle}</h2>
      <img src={props.src} alt="" />
      <p>
        {props.paragraph}
      </p>
      <span>{props.cont}</span>
      <hr />
    </div>
  )
}

export default Blog