import React from 'react';
import { ERROR_TYPES, detectErrorCode, generateRayId, formatUTCTime } from '../utils/errorUtils';
import { StatusIndicator } from './StatusIndicator';
import iconBrowser from '../images /cf-icon-browser.png';
import iconCloud from '../images /cf-icon-cloud.png';
import iconServer from '../images /cf-icon-server.png';
import iconOk from '../images /cf-icon-ok.png';
import iconError from '../images /cf-icon-error.png';

export const CloudmaskDisplay = ({ 
  error,
  serviceName = 'Cloudflare'
}) => {
  const finalErrorCode = detectErrorCode(error);
  const [ipRevealed, setIpRevealed] = React.useState(false);
  const errorInfo = ERROR_TYPES[finalErrorCode] || ERROR_TYPES[500];
  const currentRayId = generateRayId();
  const timestamp = formatUTCTime();
  const hostName = window.location.hostname;

  return (
    <div className="cloudmask-wrapper" style={{ background: '#fff', minHeight: '100vh' }}>
      <div id="cf-error-details" className="cf-p-0">
        <header className="cf-mx-auto cf-pt-10 cf-lg:pt-6 cf-lg:px-8 cf-w-240 cf-lg:w-full cf-mb-8">
          <h1 className="cf-inline-block cf-sm:block cf-sm:mb-2 cf-font-light cf-text-60 cf-lg:text-4xl cf-text-black-dark cf-leading-tight cf-mr-2">
            <span className="cf-inline-block">{errorInfo.title}</span>
            <span className="code-label" style={{ marginLeft: 8 }}>Error code {finalErrorCode}</span>
          </h1>
          <div>
            Visit <a href={errorInfo.link || 'https://www.cloudflare.com'} target="_blank" rel="noopener noreferrer">cloudflare.com</a> for more information.
          </div>
          <div className="cf-mt-3">{timestamp}</div>
        </header>

        <div className="cf-my-8 cf-bg-gradient-gray">
          <div className="cf-w-240 cf-lg:w-full cf-mx-auto">
            <div className="cf-clearfix cf-md:px-8">
              <StatusIndicator
                icon={iconBrowser}
                statusIcon={iconOk}
                label="Browser"
                sublabel="You"
                status="Working"
                isError={false}
              />
              <StatusIndicator
                icon={iconCloud}
                statusIcon={iconOk}
                label={serviceName}
                sublabel="Singapore"
                status="Working"
                isError={false}
                link="https://www.cloudflare.com/5xx-error-landing"
              />
              <StatusIndicator
                icon={iconServer}
                statusIcon={iconError}
                label="Host"
                sublabel={hostName}
                status="Error"
                isError={true}
              />
            </div>
          </div>
        </div>

        <div className="cf-w-240 cf-lg:w-full cf-mx-auto cf-mb-8 cf-lg:px-8">
          <div className="cf-clearfix">
            <div id="what-happened-section" className="cf-w-half cf-md:w-full cf-float-left cf-pr-6 cf-md:pb-10 cf-md:pr-0 cf-leading-relaxed">
              <h2 className="cf-text-3xl cf-font-normal cf-leading-1.3 cf-mb-4">What happened?</h2>
              <p>{errorInfo.message}</p>
            </div>
            <div className="cf-w-half cf-md:w-full cf-float-left cf-leading-relaxed">
              <h2 className="cf-text-3xl cf-font-normal cf-leading-1.3 cf-mb-4">What can I do?</h2>
              <p className="cf-mb-6">Please try again in a few minutes.</p>
            </div>
          </div>
        </div>

        <div className="cf-error-footer cf-w-240 cf-lg:w-full cf-py-10 cf-sm:py-4 cf-sm:px-8 cf-mx-auto cf-text-center cf-sm:text-left cf-border-solid cf-border-0 cf-border-t cf-border-gray-300">
          <p className="cf-text-13">
            <span className="cf-footer-item cf-sm:block cf-sm:mb-1">
              {serviceName} Ray ID: <strong className="cf-font-semibold">{currentRayId}</strong>
            </span>
            <span style={{ padding: '0 2px' }} className="cf-footer-separator cf-sm:hidden">•</span>
            <span className="cf-footer-item cf-sm:block cf-sm:mb-1">
              Your IP:{' '}
              {!ipRevealed ? (
                <button 
                  type="button" 
                  className="cf-footer-ip-reveal-btn"
                  onClick={() => setIpRevealed(true)}
                >
                  Click to reveal
                </button>
              ) : (
                <span>Hidden for privacy</span>
              )}
              <span className="cf-footer-separator cf-sm:hidden">•</span>
            </span>
            <span className="cf-footer-item cf-sm:block cf-sm:mb-1">
              <span>Performance & security by</span>{' '}
              <a rel="noopener noreferrer" href="https://www.cloudflare.com" target="_blank">Cloudflare</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
