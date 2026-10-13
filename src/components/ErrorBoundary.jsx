import React, { Component } from 'react';

/* --- ERROR BOUNDARY --- */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Portfolio error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '40px auto' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Something went wrong.</h2>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
            {this.state.error?.toString()}
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            style={{ padding: '8px 16px', background: '#111', color: '#fff', borderRadius: '20px', border: 'none', cursor: 'pointer' }}
          >
            Reload Homepage
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

