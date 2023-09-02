import { FunctionComponent,useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact,updateContact } from '../../redux/slices/contactSlice';

type Contact ={
    id: number;
    firstname: string;
    lastname: string;
    status: string;
}

type CreateContactType={
    setContactFormActive:React.Dispatch<React.SetStateAction<boolean>>;
    setUpdateContactData: React.Dispatch<React.SetStateAction<Contact | undefined>>
    updateContactData?: Contact
}

const CreateContact: FunctionComponent<CreateContactType> = ({setContactFormActive,updateContactData,setUpdateContactData}) => {

    const dispatch=useDispatch()

    const [isupdateContact,setIsupdateContact]=useState(false)
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [status,setStaus]=useState("active")

    useEffect(()=>{
        setIsupdateContact(updateContactData?true:false)
        setFirstName(updateContactData?updateContactData.firstname:"")
        setLastName(updateContactData?updateContactData.lastname:"")
        setStaus(updateContactData?updateContactData.status:"active")
    },[])

    const handleFormSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(isupdateContact && updateContactData){
            dispatch(updateContact({id:updateContactData.id,firstname:firstName, lastname:lastName, status}))
        }else{
        dispatch(addContact({firstname:firstName, lastname:lastName, status}))
        }
        setContactFormActive(false)
        setUpdateContactData(undefined)
        
    }

    const handleFormClose=()=>{
        setUpdateContactData(undefined)
        setContactFormActive(false)
    }
    return (
        <div className='relative'>
            <form onSubmit={handleFormSubmit} className='border border-sky-300 rounded py-8 px-5 space-y-5'>
                <div>
                    <label className='text-lg'>First Name:</label>
                    <input className='border border-black ml-2 rounded' type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label className='text-lg'>Last Name:</label>
                    <input className='border border-black ml-2 rounded' type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div className='flex items-center'>

                    <p className='text-lg'>Status:</p>

                    <div className='flex flex-col ml-5'>
                        <div>
                            <input className='border border-black ml-2' type="radio" value="active"  name='status' checked={status=='active'} onChange={(e)=>setStaus(e.target.value)}/>
                            <label>Active</label>
                        </div>
                        <div>
                            <input className='border border-black ml-2' type="radio" value="inactive" name='status' checked={status=='inactive'} onChange={(e)=>setStaus(e.target.value)}/>
                            <label>Inactive</label>
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <button type='submit' className='border-[2px] border-black text-lg rounded px-2 py-1 hover:bg-black hover:text-white transition-all ease-in'>Save Contact</button>
                </div>

            </form>

            <div className='absolute -top-[10px] -right-[10px]'>
            <button onClick={handleFormClose}>&#10060;</button>
            </div>
        </div>
    );
};

export default CreateContact;