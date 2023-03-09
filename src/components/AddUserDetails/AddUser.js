import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {

    const navigate = useNavigate();
    const[userName, setUserName] = useState('');
    const[user_Address, setUserAddress] = useState('');
    const[age, setAge] = useState('');
    const[bloodGroup, setBloodGroup] = useState('');
    const[dateOfBirth, setDateOfBirth] = useState('');
    const[emailId, setEmailId] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = { age, bloodGroup, dateOfBirth, emailId, phoneNumber, userName, user_Address };
        
        setIsPending(true);

        fetch('http://localhost:8080/post',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(() => {
            console.log('New User added');
            setIsPending(false);
            navigate('/');
            })
    }
    return ( 
        <div className="create">
            <h2>Add a New User</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required />

                <label>Age</label>
                <input 
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required />

                <label>Phone Number</label>
                <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required />

                <label>Address</label>
                <textarea 
                value={user_Address}
                onChange={(e) => setUserAddress(e.target.value)}
                required
                >
                </textarea>

                <label>Email</label>
                <input 
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                required />

                <label>BloodGroup</label>
                <input 
                type="text"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                required />

                <label>D.O.B</label>
                <input 
                type="text"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required />
                
                {!isPending && <button>Add User</button>}
                {isPending && <button>Wait</button>}
            </form>
        </div>
     );
}
 
export default AddUser;