import Blog from './Blog.jsx';
import Pic from "./assets/blog-image-1.jpg";
import Pic2 from "./assets/blog-image-2.jpg"

function Body() {
  

  return (
    <>
    <div>
        <Blog 
        date={"11/12/20"}
        blogtitle={"On the Street in Brooklyn"}
        src={Pic} 
        paragraph={" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita culpa atque illum ut sint maiores quas dolore alias, et repellendus, minima totam perspiciatis qui distinctio quidem ad facere error molestiae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptas autem? Eos quia dolores placeat! Voluptate unde quam dolore doloremque vel, neque quaerat assumenda itaque ea sint dolor excepturi corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro odio magnam recusandae nobis doloremque illum saepe, sunt incidunt eum debitis alias neque ex, eveniet numquam. Obcaecati fuga saepe labore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quae, repellat laudantium, quia officia, aut sunt nisi temporibus error dicta sint eum nemo ullam doloremque! Placeat temporibus nesciunt minus."}
        cont={"Continues..."}
        ></Blog>
    </div>
    <div>
        <Blog 
        date={"11/11/20"}
        blogtitle={"Vintage in Vogue"}
        src={Pic2} 
        paragraph={" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita culpa atque illum ut sint maiores quas dolore alias, et repellendus, minima totam perspiciatis qui distinctio quidem ad facere error molestiae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptas autem? Eos quia dolores placeat! Voluptate unde quam dolore doloremque vel, neque quaerat assumenda itaque ea sint dolor excepturi corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro odio magnam recusandae nobis doloremque illum saepe, sunt incidunt eum debitis alias neque ex, eveniet numquam. Obcaecati fuga saepe labore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quae, repellat laudantium, quia officia, aut sunt nisi temporibus error dicta sint eum nemo ullam doloremque! Placeat temporibus nesciunt minus."}
        cont={"Continues..."}
        ></Blog>
    </div>
    </>
  )
}

export default Body