import { createContext, useState, useContext, useEffect, useCallback } from 'react';

const CloudmaskContext = createContext();

export const useCloudmask = () => {
  return useContext(CloudmaskContext);
};

const detectErrorCode = (error) => {
  if (!error) return 500;
  
  const errorMessage = error.message?.toLowerCase() || '';
  const errorName = error.name?.toLowerCase() || '';
  
  if (errorMessage.includes('network') || errorMessage.includes('fetch') || errorMessage.includes('gateway')) {
    return 502;
  }
  
  if (errorMessage.includes('timeout') || errorName.includes('timeout')) {
    return 504;
  }
  
  if (errorMessage.includes('unavailable') || errorMessage.includes('maintenance')) {
    return 503;
  }
  
  return 500;
};

export const CloudmaskProvider = ({ 
  children, 
  serviceName = 'Cloudmask',
  enableGlobalErrorHandling = true,
  onError 
}) => {
  const [error, setError] = useState(null);
  const [errorCode, setErrorCode] = useState(null);

  const triggerError = useCallback((err, code) => {
    const detectedCode = code || detectErrorCode(err);
    setError(err);
    setErrorCode(detectedCode);
    
    if (onError) {
      onError(err, detectedCode);
    }
  }, [onError]);

  const clearError = useCallback(() => {
    setError(null);
    setErrorCode(null);
  }, []);

  useEffect(() => {
    if (!enableGlobalErrorHandling) return;

    const handleGlobalError = (event) => {
      console.error('Cloudmask: Global error caught', event.error);
      triggerError(event.error || new Error(event.message));
      event.preventDefault();
    };

    const handleUnhandledRejection = (event) => {
      console.error('Cloudmask: Unhandled rejection caught', event.reason);
      triggerError(event.reason || new Error('Unhandled Promise Rejection'));
      event.preventDefault();
    };

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [enableGlobalErrorHandling, triggerError]);

  return (
    <CloudmaskContext.Provider value={{ 
      error, 
      errorCode,
      triggerError, 
      clearError,
      serviceName 
    }}>
      {children}
    </CloudmaskContext.Provider>
  );
};
