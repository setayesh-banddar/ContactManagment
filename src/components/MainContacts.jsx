import { useContext } from "react";
import { ContactContext } from "../contactContext";
import { Icon } from "@iconify/react";
import ConfirmationModal from "./ConfirmationModal";



export default function MainContacts({contact}) {
    const{name ,lastName, phone, email , relation, id } = contact;
    const{deleteContact} = useContext(ContactContext)

  return (
        <div className="" >
            <div className="flex bg-[#014397] gap-3 px-3 py-2 rounded-md relative">
            <div className="flex flex-col  ">
              <p  className="text-white mb-4 ">{name} {lastName} </p>
              <p  className="text-white mb-4">{phone}</p>
              <p  className="text-white mb-4">{relation}</p>
              <p  className="text-white mb-4">{email}</p>
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
