import './App.css';
import { CloudmaskDisplay } from './components/CloudmaskDisplay';
import { CloudmaskErrorBoundary } from './components/CloudmaskErrorBoundary';

const Cloudmask = ({ error, serviceName }) => {
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
        error={error}
        serviceName={serviceName}
      />
    </div>
  );
};

export { CloudmaskDisplay, CloudmaskErrorBoundary, Cloudmask };
export default Cloudmask;
