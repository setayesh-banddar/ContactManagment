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


const ConfirmationModal = ({ handleConfirm, projectName, children, color, varient, className }) => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  return (

    <>

      <button

        className={twMerge(

          className && className,

          "flex items-start justify-start w-full gap-2"

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

                Are you sure ?

              </ModalHeader>

              <ModalBody>

                Are you sure do you want delete

                {projectName && " ${projectName} " } project ?

              </ModalBody>

              <ModalFooter>

                <Button color="default" variant="light" onPress={onClose}>

                  No

                </Button>

                <Button

                  color="primary"

                  onPress={() => {

                    handleConfirm();

                    onClose();

                  }}

                >

                  Yes

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