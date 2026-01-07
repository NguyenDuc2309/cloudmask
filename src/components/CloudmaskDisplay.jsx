import React, { useEffect, useRef, useState } from 'react';
import { ERROR_TYPES, detectErrorCode, generateRayId, formatUTCTime } from '../utils/errorUtils';
import { StatusIndicator } from './StatusIndicator';
import iconBrowser from '../images /cf-icon-browser.png';
import iconCloud from '../images /cf-icon-cloud.png';
import iconServer from '../images /cf-icon-server.png';
import iconOk from '../images /cf-icon-ok.png';
import iconError from '../images /cf-icon-error.png';

export const CloudmaskDisplay = ({ 
  error,
  serviceName = 'Cloudflare',
  isDev = false,
  onDismiss
}) => {
  const finalErrorCode = detectErrorCode(error);
  const [ipRevealed, setIpRevealed] = useState(false);
  const [showDevDetails, setShowDevDetails] = useState(true);
  const devDetailsRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (devDetailsRef.current) {
      setContentHeight(devDetailsRef.current.scrollHeight);
    }
  }, [showDevDetails, error]);
  const errorInfo = ERROR_TYPES[finalErrorCode] || ERROR_TYPES[500];
  const currentRayId = generateRayId();
  const timestamp = formatUTCTime();
  const hostName = window.location.hostname;

  useEffect(() => {
    if (!isDev) return;
    
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (onDismiss) {
          onDismiss();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDev, onDismiss]);

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

        {isDev && error && (
          <div className="cf-w-240 cf-lg:w-full cf-mx-auto cf-mb-8 cf-lg:px-8">
            <div style={{ backgroundColor: '#2d2d2d', borderRadius: '8px', overflow: 'hidden', border: '1px solid #444' }}>
              <div 
                onClick={() => setShowDevDetails(!showDevDetails)}
                style={{ display: 'flex', alignItems: 'center', padding: '14px 18px', backgroundColor: '#3a3a3a', cursor: 'pointer' }}
              >
                <span style={{ color: '#ff6b6b', fontWeight: '600', fontSize: '14px', flex: 1 }}>
                  {error.name || 'Error'}: {!showDevDetails ? error.message?.substring(0, 80) + (error.message?.length > 80 ? '...' : '') : ''}
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" style={{ transform: showDevDetails ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.15s' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div 
                ref={devDetailsRef}
                style={{ 
                  maxHeight: showDevDetails ? (contentHeight || 1000) + 'px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease-in-out, opacity 0.25s ease-in-out',
                  opacity: showDevDetails ? 1 : 0
                }}
              >
                <div style={{ padding: '16px 18px' }}>
                  <p style={{ color: '#fff', fontSize: '15px', fontWeight: '500', margin: '0 0 16px 0', lineHeight: '1.5' }}>{error.message}</p>
                  {error.stack && (
                    <pre style={{ margin: 0, fontFamily: 'Consolas, Monaco, monospace', fontSize: '12px', lineHeight: '1.7', overflowX: 'auto', color: '#bbb' }}>
                      {error.stack.split('\n').map((line, i) => (
                        <div key={i} style={{ padding: '4px 0', color: i === 0 ? '#ff6b6b' : (line.includes('node_modules') ? '#777' : '#ddd') }}>
                          {line}
                        </div>
                      ))}
                    </pre>
                  )}
                  {onDismiss && (
                    <div style={{ marginTop: '16px', textAlign: 'right' }}>
                      <button onClick={onDismiss} style={{ backgroundColor: '#555', color: '#fff', border: 'none', borderRadius: '4px', padding: '8px 16px', fontSize: '13px', cursor: 'pointer' }}>
                        Dismiss
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

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
