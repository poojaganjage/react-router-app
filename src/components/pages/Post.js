import {useParams, useLocation} from "react-router-dom";
const Post = () => {
    let {category} = useParams();
    let location = useLocation();
    console.log(location);
    return(
        <>
            <h1>Post Page: {category}</h1>
        </>
    );
}
export default Post;
