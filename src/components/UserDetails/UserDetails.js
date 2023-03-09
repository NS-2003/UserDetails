import { useEffect } from "react";
import { Link } from "react-router-dom";
import FetchDetails from "../FetchDetails";

const UserDetails = () => {
    const {data: blogs, isPending, error} = FetchDetails("http://localhost:8080/get");
    const title = "User List !"
    return ( 
        <div className="home">
            <h2>{ title }</h2>
            <button> <Link to={'/add'}>Add User</Link> </button>
            {blogs?.map((blog) => (
                <div className="blog-preview" key={ blog.userId }>
                    <Link to={`/${blog.userId}`}>
                    <h2> { blog.userName } </h2>
                    <p> Lives In { blog.user_Address } </p>
                    </Link>
                </div>
            ))}
      </div>
     );
}
 
export default UserDetails;