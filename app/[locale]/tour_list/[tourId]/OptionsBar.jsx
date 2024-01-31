import './styles.css'
import { useState } from 'react';


const OptionsBar = ({ selectedOption,onOptionChange }) => {
    const [activeOption, setActiveOption] = useState('overview');
    

  return (
    <div
      className="package-details-options px-3 flex justify-between items-center text-[0.7rem] text-[#112211] bg-inherit border-b-2 font-medium border-gray-200 w-full font-poppins"
      id="package-details-options"
    >
      <button
        className={`px-2 py-4 ${selectedOption === 'overview' ? 'border-b-primary border-b-2' : ''}`}
        onClick={() => onOptionChange('overview')}
        id="button-overview"
      >
        Overview
      </button>
      <button
        className={`px-4 py-3 ${selectedOption === 'map' ? 'border-b-primary border-b-2' : ''}`}
        onClick={() => onOptionChange('map')}
        id="button-map"
      >
        Map
      </button>
      <button
        className={`px-2 py-4 ${selectedOption === 'program' ? 'border-b-primary border-b-2' : ''}`}
        id="button-program"
        onClick={() => onOptionChange('program')}
      >
        Program
      </button>
      <button
        className={`px-2 py-4 ${selectedOption === 'pdf' ? 'border-b-primary border-b-2' : ''}`}
        id="button-pdf"
        onClick={() => onOptionChange('pdf')}
      >
        Download PDF
      </button>
    </div>
  );
};

export default OptionsBar;
