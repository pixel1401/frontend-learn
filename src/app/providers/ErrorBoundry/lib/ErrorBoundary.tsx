import React, { ErrorInfo } from 'react';

interface ErrorBoundaryProps {
    children : React.ReactNode
}

interface ErrorBoundaryState {
    hasError : boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props : ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error : Error) {
        return { hasError: true };
    }

    componentDidCatch(error : Error, info : ErrorInfo) {
        console.log(error);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;
        if (hasError) {
        // You can render any custom fallback UI
            return <div>aw</div>;
        }
        return (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
                { children }
            </>
        );
    }
}

export default ErrorBoundary;
