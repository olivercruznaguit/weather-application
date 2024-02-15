import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Dashboard from './dashboard';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App text-primary">
      <QueryClientProvider client={queryClient}>
          <Dashboard/>
      </QueryClientProvider>
      
    </div>
  );
}

export default App;
