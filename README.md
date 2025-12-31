# Cloudmask

A React library that displays beautiful Cloudflare-style error pages when your app crashes.

## Features

- 🎨 **Beautiful UI** - Exact replica of Cloudflare's error page design
- 🛡️ **Error Boundary** - Catches React component crashes
- 🌐 **Global Error Handling** - Catches unhandled JavaScript errors and promise rejections
- 📦 **Lightweight** - Small bundle size with minimal dependencies
- ⚡ **Easy to Use** - Simple API with sensible defaults

## Installation

```bash
npm install cloudmask
```

## Usage

### Basic Usage with Error Boundary

Wrap your app with `CloudmaskErrorBoundary` to catch React component errors:

```jsx
import { CloudmaskErrorBoundary } from "cloudmask";
import "cloudmask/style.css";

function App() {
  return (
    <CloudmaskErrorBoundary errorCode={500} serviceName="My App">
      <YourApp />
    </CloudmaskErrorBoundary>
  );
}
```

### Advanced Usage with Context

For more control, use the `CloudmaskProvider` and `CloudmaskOverlay`:

```jsx
import { CloudmaskProvider, CloudmaskOverlay } from "cloudmask";
import "cloudmask/style.css";

function App() {
  return (
    <CloudmaskProvider serviceName="My App" enableGlobalErrorHandling={true}>
      <CloudmaskOverlay />
      <YourApp />
    </CloudmaskProvider>
  );
}
```

### Manual Error Triggering

You can manually trigger the error page:

```jsx
import { useCloudmask } from "cloudmask";

function SomeComponent() {
  const { triggerError } = useCloudmask();

  const handleError = () => {
    triggerError(new Error("Something went wrong"), 502);
  };

  return <button onClick={handleError}>Trigger Error</button>;
}
```

## API

### `CloudmaskErrorBoundary`

Props:

- `errorCode` (number, optional) - HTTP error code to display (500, 502, 503). Default: 500
- `serviceName` (string, optional) - Name of your service. Default: "Cloudmask"
- `hostName` (string, optional) - Hostname to display. Default: window.location.hostname

### `CloudmaskProvider`

Props:

- `serviceName` (string, optional) - Name of your service
- `enableGlobalErrorHandling` (boolean, optional) - Enable global error listeners. Default: true
- `onError` (function, optional) - Callback when error is triggered

### `useCloudmask`

Hook that returns:

- `error` - Current error object
- `errorCode` - Current error code
- `triggerError(error, code)` - Manually trigger error page
- `clearError()` - Clear current error
- `serviceName` - Service name from provider

## Error Codes

The library supports the following error codes:

- **500** - Internal Server Error
- **502** - Bad Gateway
- **503** - Service Unavailable

## License

MIT
