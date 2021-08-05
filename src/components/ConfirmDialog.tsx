import { FC, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { XIcon, ExclamationIcon } from "@heroicons/react/solid";

interface Props {
  title: string;
  description?: string;
  okText?: string;
  cancelText?: string;
}

const ConfirmDialog: FC<Props> = (props) => {
  return (
    <Transition.Root>
      <div className="absolute inset-0 flex bg-gray-500 items-center justify-center">
        <div className="bg-white h-80 w-96 rounded-lg relative flex flex-col items-center">
          <button className="absolute right-2 top-2">
            <XIcon className="text-black h-6 w-6" />
          </button>
          <ExclamationIcon className="text-red-500 h-24 w-24 mt-8" />
          <h1 className="text-3xl font-semibold mb-4">{props.title}</h1>
          {props.description && (
            <p className="text-sm text-center mb-4">{props.description}</p>
          )}
          <div className='flex'>
            <button className='w-24 py-1 border-none text-md text-white bg-gray-500 hover:bg-gray-700 rounded-sm mr-3'>{props.cancelText}</button>
            <button className='text-md text-white w-24 py-1 border-none bg-red-500 hover:bg-red-700 rounded-sm mr-3'>{props.okText}</button>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
};

ConfirmDialog.defaultProps = {
  okText: "OK",
  cancelText: "Cancel",
};

export default ConfirmDialog;
