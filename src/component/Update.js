import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams ,useNavigate} from 'react-router-dom';
import { updateUser } from '../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';

function Update(){
    const {id} = useParams();
    const users = useSelector((state)=> state.users);
    const existingUser = users.filter(f => f.id == id);
    console.log(existingUser);
    const {name,email} = existingUser[0];
    const [updateName , setUpdateName] = useState(name);
    const[updateEmail , setUpdateEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

     
    const handleUpdate =(event) =>{
        event.preventDefault();
        dispatch(updateUser({
            id:id,name:updateName,email:updateEmail
        }))
        navigate('/');
    }

    return (
        <>
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <form onSubmit={handleUpdate}> 
                    <h3>Update User</h3>
                    <div>
                        <label htmlFor="name"> Name: </label>
                        <input type="text" name='name' className="form-control" placeholder="enter name" value={updateName} onChange={e => setUpdateName(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="email"> Email: </label>
                        <input type="email" name='email' className="form-control" placeholder="enter email" value={updateEmail} onChange= {e => setUpdateEmail(e.target.value)}></input>
                    </div><br/>
                    <button className="btn btn-info"> Update </button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Update;
