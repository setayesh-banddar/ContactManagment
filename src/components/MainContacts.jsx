import { Icon } from "@iconify/react";
import { ContactManager } from "../contactContext";
import ConfirmationModal from "./ConfirmationModal";



export default function MainContacts({contact}) {
    const{name ,lastName, phone, email , relation, id } = contact;
    const{deleteContact} =  ContactManager();


  return (
        <div className="" >
            <div className="flex bg-[#4e54c8] gap-3 px-3 py-2 rounded-md relative">
            <div className="flex flex-col  ">
              <p  className="text-white mb-4 font-serif font-semibold ">{name} {lastName}</p>
              <p  className="text-white mb-4 font-serif ">{phone}</p>
              <p  className="text-white mb-4 font-serif font-semibold ">{relation}</p>
              <p  className="text-white mb-4 font-serif ">{email}</p>
            </div>
            <div className="absolute left-3 ">
                <button><Icon icon="bxs:edit" className="text-white"/></button>
                <ConfirmationModal handleConfirm ={deleteContact}>
                 <Icon icon="ph:trash" className="text-white" />
                </ConfirmationModal> 
            </div>
            </div>
        </div>
  )
}
