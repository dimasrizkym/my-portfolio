import React from 'react';
import useExpanded from '../../hooks/useExpanded';

const CardExperience = (props) => {
  const { position, companyName, periode, desc } = props;
  
  const [expanded, toggleExpanded] = useExpanded()

  return (
    <>
      <h4>{position}</h4>
      <p>{companyName}</p>
      <p className='text-gray-500 mb-1'>{periode}</p>
      <p className={`line-clamp-${expanded ? 'none' : '2'}`}>{desc}</p>
      {desc.length > 2 && (
        <button onClick={toggleExpanded} className="text-base md:text-lg font-medium text-gray-600 leading-relaxed text-justify mb-2">
          {expanded ? 'see less' : 'see more'}
        </button>
      )}
    </>
  );
};

export default CardExperience;
