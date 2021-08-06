import { FC, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { XIcon, ExclamationIcon } from "@heroicons/react/solid";

interface Props {
  title: string;
  description?: string;
  okText?: string;
  cancelText?: string;
  open: boolean;
  setOpen: (open: false) => void;
}

const ConfirmDialog: FC<Props> = (props) => {
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog open={props.open} onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transform duration-500 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-40"
          entered="opacity-50"
          leave="transform duration-500 ease-in-out"
          leaveFrom="opacity-40"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="absolute inset-0 bg-gray-500 " />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transform ease-in-out duration-500"
          enterFrom="opacity-0 -translate-y-full"
          enterTo="opacity-100 translate-y-0"
          entered="opacity-100"
          leave="transform ease-in-out duration-500"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-full"
        >
          <div
            className="bg-white h-80 w-96 rounded-lg relative dura
           flex flex-col items-center 
           top-40 mx-auto"
          >
            <button
              className="absolute right-2 top-2"
              onClick={() => props.setOpen(false)}
            >
              <XIcon className="text-black h-6 w-6" />
            </button>
            <ExclamationIcon className="text-red-500 h-24 w-24 mt-8" />
            <h1 className="text-3xl font-semibold mb-4">{props.title}</h1>
            {props.description && (
              <p className="text-sm text-center mb-4">{props.description}</p>
            )}
            <div className="flex">
              <button
                className="w-24 py-1 border-none text-md text-white bg-gray-500 
              hover:bg-gray-700 rounded-sm mr-3"
                onClick={() => props.setOpen(false)}
              >
                {props.cancelText}
              </button>
              <button className="text-md text-white w-24 py-1 border-none bg-red-500 hover:bg-red-700 rounded-sm mr-3">
                {props.okText}
              </button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

ConfirmDialog.defaultProps = {
  okText: "OK",
  cancelText: "Cancel",
};

export default ConfirmDialog;
