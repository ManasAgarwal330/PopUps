import { useState } from "react";
import ConfirmDialog from "./components/ConfirmDialog";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute inset-0 justify-center flex items-center bg-gray-200">
      <span
        className="text-lg text-blue-700 font-semibold cursor-pointer"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        Click to Open Confirm Modal
      </span>
      <ConfirmDialog
        title="Are you sure?"
        description="Do you really want to delete these records? This process cannot be undone"
      />
    </div>
  );
}

export default App;
