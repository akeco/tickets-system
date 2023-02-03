import React, { Fragment } from "react";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import Button from "components/shared/Button/Button";

type DialogProps = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose(): void;
  onSuccess(): void;
};

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  title,
  children,
  onClose,
  onSuccess,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <HeadlessDialog
        className="flex justify-center relative z-10"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <HeadlessDialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HeadlessDialog.Panel className="w-[300px] bg-white rounded-md p-4">
                <HeadlessDialog.Title className="mb-2">
                  {title}
                </HeadlessDialog.Title>
                <div className="mb-6">{children}</div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="ml-auto"
                    onClick={onSuccess}
                  >
                    Create
                  </Button>
                  <Button variant="outline" onClick={onClose}>
                    Close
                  </Button>
                </div>
              </HeadlessDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  );
};

export default Dialog;
