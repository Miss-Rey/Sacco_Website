import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
    document.getElementById('root')
  );

ReactDOM.render(<App />, document.getElementById('root'));

