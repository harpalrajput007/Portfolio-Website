import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught error:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="container-page py-10">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-2">Something went wrong.</h2>
            <pre className="text-sm whitespace-pre-wrap text-white/70">{String(this.state.error)}</pre>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}