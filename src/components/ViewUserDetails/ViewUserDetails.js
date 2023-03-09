import { useNavigate,useParams } from "react-router-dom";
import FetchDetails from "../FetchDetails";
// import useFetch from "./useFetch";

const ViewUserDetails = () => {

    const { id } = useParams();
    const { data:blog, isPending, error } = FetchDetails('http://localhost:8080/' + id);

    const navigate = useNavigate();
    const handleDelete = () => {
        fetch('http://localhost:8080/delete/' + blog.userId, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    const handleUpdate = () => {
        navigate('/update/'+ id);
    }
    return ( 
        <div className="blog-details">
        { isPending && <div>Loading....</div>}
        { error && <div>{ error }</div>}
        { blog && (
            <article>
                <h2>{ blog.userName }</h2>
                <p>{ blog.age }</p>
                <p>{ blog.bloodGroup }</p>
                <p>{ blog.dateOfBirth}</p>
                <p>{ blog.emailId }</p>
                <div>{ blog.phoneNumber }</div>
                <div>{ blog.user_Address }</div>
                <button onClick={handleDelete}>delete</button>
                <button onClick={handleUpdate}>Update</button>
            </article>
        )}
        </div>
     );
}
 
export default ViewUserDetails;