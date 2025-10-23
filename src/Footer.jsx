import Foot from './Foot.jsx';

function Footer(props) {
  

  return (
    <>
        <div className="foot-box">
            <Foot footLinks="Home"/>
            <Foot footLinks="Women's"/>
            <Foot footLinks="Men's"/>
            <Foot footLinks="On the Street"/>
            <Foot footLinks="The Catwalk"/>
            <Foot footLinks="AdWatch"/>
            <Foot footLinks="About"/>
            <Foot footLinks="Tips"/>
        </div>
        <div>
            <p className="copyRight">© 2013 Valet Industries, Inc </p>
        </div>
    </>
  )
}

export default Footer