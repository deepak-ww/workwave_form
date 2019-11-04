import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        error: false,
        info: {
            componentStack: String
        }
    };

    componentDidCatch(error: Error | any, info: object) {
        this.setState({ error, info });
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <h4>Something went wrong</h4>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.info.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

export { ErrorBoundary };