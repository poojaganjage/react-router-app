import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  let isActive = true;
  const category = ["mobile", "desktop"];
  const postCategory = category.map((item) => {
    if(item == "mobile") {
        console.log(item);
        return item;
    }
    //else { return "";}
  }).join('');
  return (
    <>
        {/*<ul> It cannot possible because here page is reloading and for that to overcome we are using a react router.
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>*/}
        {/*<ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>*/}
        <ul>
            <li><NavLink to="/"  style={({isActive}) => ({
              color: isActive ? 'red' : ''
            })}>Home</NavLink></li>
            <li><NavLink to="/about" style={({isActive}) => ({
              color: isActive ? 'red' : ''
            })}>About</NavLink></li>
            <li><NavLink to="/contact" style={({isActive}) => ({
              color: isActive ? 'red' : ''
            })}>Contact</NavLink></li>
            {/*<li><NavLink to={"/post?=" + postCategory} style={({isActive}) => ({
              color: isActive ? 'red' : ''
            })}>Post</NavLink></li>*/}
            <li><NavLink to="/post/mobile" style={({isActive}) => ({
              color: isActive ? 'red' : ''
            })}>Post</NavLink></li>
        </ul>
    </>
  );
}
export default Navbar;
