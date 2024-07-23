import { ContactManager } from "../contactContext";
import CreateNewContact from "./CreateNewContact";
import MainContacts from "./MainContacts";


export default function ContactManagement() {
  const { contacts } = ContactManager();
   
  return (

    <div className="flex flex-col justify-center  items-center mt-10">
      <h1 className="text-2xl mb-7 font-semibold font-serif" >وب اپلیکیشن مدیریت مخاطبین</h1>
      <CreateNewContact/>
      <div className="grid grid-cols-1 gap-x-44 gap-y-14 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {contacts.map((t) => (
        <MainContacts key ={t.id} contact={t} />
      ))}
      </div>
    </div>
  )
}
