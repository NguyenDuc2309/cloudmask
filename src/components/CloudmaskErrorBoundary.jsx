import { Component } from 'react';
import { CloudmaskDisplay } from './CloudmaskDisplay';

export class CloudmaskErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error('Cloudmask caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <CloudmaskDisplay 
          error={this.state.error}
          serviceName={this.props.serviceName}
          isDev={this.props.isDev}
        />
      );
    }
    return this.props.children;
  }
}
