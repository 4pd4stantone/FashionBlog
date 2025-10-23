import Nav from './Nav.jsx';
import Title from './Title.jsx';
import Subtitle from './Subtitle.jsx';


function Header(props) {
  

  return (
    <div>
        <Title className="title" title="Sartre's List"/>
        <Subtitle subtitle="Better-Dressed People"/>
        <div className="nav-bar-links">
            <Nav links="Women's"/>
            <Nav links="Men's"/>
            <Nav links="On the Street"/>
            <Nav links="The Catwalk"/>
            <Nav links="AdWatch"/>
            <Nav links="About"/>
        </div>
    </div>
  )
}

export default Header