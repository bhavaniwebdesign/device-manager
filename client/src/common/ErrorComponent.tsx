import React from 'react';

type ErrorComponentProps = {
    message?: string;
};

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => (
    <div role="alert" aria-live="assertive" style={{ color: 'red', padding: '1rem', border: '1px solid red', borderRadius: '4px', background: '#ffe6e6' }}>
        <strong>Error:</strong> {message || 'Something went wrong.'}
    </div>
);

export default ErrorComponent;