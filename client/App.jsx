import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Full-Stack MVP Starter</h1>
        <p className="mt-4 text-lg text-gray-600">{message}</p>
      </div>
    </div>
  );
}

export default App;