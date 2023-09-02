import {FunctionComponent} from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slices/contactSlice';

type Contact ={
    id: number;
    firstname: string;
    lastname: string;
    status: string;

  }

type ContactDetailsType={
    id: number;
    firstname: string;
    lastname: string;
    status: string;
    setUpdateContact:React.Dispatch<React.SetStateAction<boolean>>;
    setUpdateContactData: React.Dispatch<React.SetStateAction<Contact | undefined>>
    setContactFormActive:React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactDetails:FunctionComponent<ContactDetailsType> = ({id,firstname,lastname,status,setUpdateContact,setUpdateContactData,setContactFormActive}) => {
    const dispatch=useDispatch()

    const handleDelete=(id:number)=>{
        dispatch(deleteContact(id))
    }

    const handleEditContact=()=>{
        setUpdateContact(true)
        setUpdateContactData({
            id,
            firstname,
            lastname,
            status
        })
        setContactFormActive(true)
    }
    return (
        <div>
        <div className='border border-sky-300 rounded p-8'>
            <p className='text-lg capitalize'><span className='font-medium'>First Name: </span>{firstname}</p>
            <p className='text-lg capitalize'><span className='font-medium'>Last Name: </span>{lastname}</p>
            <p className='text-lg capitalize'><span className='font-medium'>Status: </span>{status}</p>
        </div>
        <div className='flex flex-col items-center gap-3 mt-2'>
            <button onClick={handleEditContact} className='bg-green-400 hover:bg-green-500 text-white w-[30%] px-2 py-1 rounded'>Edit</button>
            <button onClick={()=>handleDelete(id)} className='bg-red-400 hover:bg-red-500 text-white w-[30%] px-3 py-1 rounded'>Delete</button>
        </div>
        </div>
    );
};

export default ContactDetails;