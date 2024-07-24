import { ContactManager } from "../contactContext";
import CreateNewContact from "./CreateNewContact";
import MainContacts from "./MainContacts";


export default function ContactManagement() {
  const { contacts } = ContactManager();
   
  return (

    <div className="flex flex-col justify-center  items-center  relative">
       <img src="./src/assets/Ellipse-680.png" className="absolute right-0 w-56 top-0 hidden lg:block" alt="" />
       <img src="./src/assets/Ellipse-681.png" className="absolute left-0 w-40 top-80 hidden lg:block " alt="" />
      <h1 className="text-2xl mb-7 font-semibold font-serif mt-10" >وب اپلیکیشن مدیریت مخاطبین</h1>
      <CreateNewContact/>
      <div className="grid grid-cols-1 gap-x-44 gap-y-14 mt-8 mb-8 md:grid-cols-2 lg:grid-cols-3">
      {contacts.map((t) => (
        <MainContacts key ={t.id} contact={t} />
      ))}
      </div>
    </div>
  )
}
