import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='absolute inset-0 justify-center flex items-center bg-gray-200'>
      <span className='text-lg text-blue-700 font-semibold cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}>Click to Open Confirm Modal</span>
    </div>
  );
}

export default App;
