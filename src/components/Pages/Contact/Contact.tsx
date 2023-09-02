import { FunctionComponent, useState } from 'react';
import CreateContact from '../../CreateContact/CreateContact';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import ContactDetails from '../../ContactDetails/ContactDetails';

type Contact ={
    id: number;
    firstname: string;
    lastname: string;
    status: string;
}

const Contact: FunctionComponent = () => {
    const contacts = useSelector((state: RootState) => state.contacts)
    const [contactFormActive, setContactFormActive] = useState<boolean>(false)
    const [updateContact,setUpdateContact]=useState<boolean>(false)
    const [updateContactData,setUpdateContactData]=useState<Contact>()

    return (
        <div>
            {/* contact page header */}
            <div className='bg-blue-200 text-center py-3'>
                <h2 className='text-2xl font-medium'>Contact Page</h2>
            </div>

            {/* contact page body */}

            <div >
                {/* create contact button */}
                {!contactFormActive && <div className='text-center mt-10'>
                    <button onClick={() => setContactFormActive(true)} className='border-[2px] border-black text-lg rounded px-2 py-1 hover:bg-black hover:text-white transition-all ease-in'>Create Contact</button>
                </div>}

                {/* no contact found message */}
                {!contactFormActive &&
                    contacts?.length == 0 && <div className='border border-red-300 sm:w-[30%] w-[80%] mx-auto rounded mt-10'>
                        <div className='flex items-center py-5 px-3 gap-2'>
                            <p className='text-3xl'>&#10060;</p>
                            <p className='text-xl'>No contact found please add contact from create contact button</p>
                        </div>
                    </div>
                }
                {/* showing all contacts */}
                {!contactFormActive &&
                    contacts?.length > 0 &&
                    <div className='grid grid-cols-1 px-5 sm:px-0 sm:grid-cols-2 sm:w-[80%] lg:w-[40%] mx-auto gap-5 mt-10 '>
                        {contacts.map((item)=>(
                            <ContactDetails {...item} setUpdateContact={setUpdateContact} setUpdateContactData={setUpdateContactData} setContactFormActive={setContactFormActive}/>
                        ))}
                    </div>
                }

                {/* create contact form */}

                {contactFormActive && <div className='h-[calc(100vh-56px)] flex justify-center items-center'>
                    <CreateContact setContactFormActive={setContactFormActive} {...(updateContact && { updateContactData })} setUpdateContactData={setUpdateContactData}/>
                </div>}

            </div>

        </div>
    );
};

export default Contact;