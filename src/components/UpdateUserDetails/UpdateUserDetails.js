import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUserDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const userId = id;
  const [userName, setUserName] = useState("");
  const [user_Address, setUserAddress] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPending, setIsPending] = useState(false);

  const user = {
    age,
    bloodGroup,
    dateOfBirth,
    emailId,
    phoneNumber,
    userId,
    userName,
    user_Address
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/put", user)
      
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    navigate('/');
    window.location.reload();
  };

  return (
    <div className="update-parent">
      <h2>Add a New User</h2>
      <form onSubmit={handleUpdate}>
        <label>Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <label>Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <label>Address</label>
        <textarea
          value={user_Address}
          onChange={(e) => setUserAddress(e.target.value)}
          required
        ></textarea>

        <label>Email</label>
        <input
          type="email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          required
        />

        <label>BloodGroup</label>
        <input
          type="text"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          required
        />

        <label>D.O.B</label>
        <input
          type="text"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />

        {!isPending && <button>Update Details</button>}
        {isPending && <button>Wait</button>}
      </form>
    </div>
  );
};

export default UpdateUserDetails;
