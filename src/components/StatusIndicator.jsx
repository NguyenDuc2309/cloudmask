import React from 'react';

export const StatusIndicator = ({ icon, statusIcon, label, sublabel, status, isError, link }) => (
  <div className={`cf-relative cf-w-third cf-md:w-full cf-py-15 cf-md:p-0 cf-md:py-8 cf-md:text-left cf-md:border-solid cf-md:border-0 cf-md:border-b cf-md:border-gray-400 cf-overflow-hidden cf-float-left cf-md:float-none cf-text-center ${isError ? 'cf-error-source' : ''}`}>
    <div className="cf-relative cf-mb-10 cf-md:m-0">
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt={label} className="cf-block cf-md:hidden cf-h-20 cf-mx-auto" style={{ width: 'auto', height: '5rem' }} />
          <img src={statusIcon} alt={status} className="cf-w-12 cf-h-12 cf-absolute cf-left-half cf-md:left-auto cf-md:right-0 cf-md:top-0 cf-ml-6-neg cf-bottom-4-neg" style={{ width: '3rem', height: '3rem' }} />
        </a>
      ) : (
        <>
          <img src={icon} alt={label} className="cf-block cf-md:hidden cf-h-20 cf-mx-auto" style={{ width: 'auto', height: '5rem' }} />
          <img src={statusIcon} alt={status} className="cf-w-12 cf-h-12 cf-absolute cf-left-half cf-md:left-auto cf-md:right-0 cf-md:top-0 cf-ml-6-neg cf-bottom-4-neg" style={{ width: '3rem', height: '3rem' }} />
        </>
      )}
    </div>
    <span className="cf-md:block cf-w-full cf-truncate">{sublabel}</span>
    <h3 className="cf-md:inline-block cf-mt-3 cf-md:mt-0 cf-text-2xl cf-text-gray-600 cf-font-light cf-leading-1.3" style={{ marginBottom: 0 }}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">{label}</a>
      ) : label}
    </h3>
    <span className={`cf-leading-1.3 cf-text-2xl ${isError ? 'cf-text-red-error' : 'cf-text-green-success'}`}>
      {status}
    </span>
  </div>
);
