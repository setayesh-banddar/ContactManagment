"use client";
import React, { useState } from "react";

import {

  Modal,

  ModalContent,

  ModalHeader,

  ModalBody,

  ModalFooter,

  Button,

  useDisclosure,

} from "@nextui-org/react";

import { twMerge } from "tailwind-merge";
import { toast } from "react-toastify";


const ConfirmationModal = ({ handleConfirm, projectName, children, color, varient, className }) => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const notify = () => toast("مخاطب حذف شد" , {
    className: " bg-red-400 text-white  font-semibold",
    bodyClassName: "grow-font-size",
    progressClassName: "fancy-progress-bar",
  });

  return (

    <>

      <button

        className={twMerge(

          className && className,

          ""

        )}

        color={color ? color : "default"}

        onClick={onOpen}

      >

        {children}

      </button>

      <Modal

        isOpen={isOpen}

        onOpenChange={onOpenChange}

        classNames={{

          wrapper: "z-[50000000]",

        }}

      >

        <ModalContent>

          {(onClose) => (

            <>

              <ModalHeader className="flex flex-col gap-1">

               

              </ModalHeader>

              <ModalBody>

                آیا مطمئن به حذف مخاطب مورد نظر هستید؟

                {projectName && " ${projectName} " } 

              </ModalBody>

              <ModalFooter>

                
              <Button

                  color="primary"

                  onPress={() => {

                    handleConfirm();
                    notify();
                    onClose();

                  }}

                  >

                  بله

                  </Button>

                <Button color="default" variant="light" onPress={onClose}>

                 خیر

                </Button>

              </ModalFooter>

            </>

          )}

        </ModalContent>

      </Modal>


    </>

  );

};


export default ConfirmationModal;