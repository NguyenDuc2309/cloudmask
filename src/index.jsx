import { CloudmaskProvider, useCloudmask } from './CloudmaskContext';
import { Cloudmask, CloudmaskDisplay, CloudmaskErrorBoundary } from './Cloudmask';
import './App.css';

const CloudmaskOverlay = () => {
  const { error, errorCode, serviceName } = useCloudmask();
  
  if (!error) return null;
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      zIndex: 999999 
    }}>
      <CloudmaskDisplay 
        errorCode={errorCode || 500}
        serviceName={serviceName}
      />
    </div>
  );
};

export { 
  CloudmaskProvider, 
  useCloudmask, 
  CloudmaskOverlay, 
  CloudmaskErrorBoundary,
  CloudmaskDisplay,
  Cloudmask 
};
