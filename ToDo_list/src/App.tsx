import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/header/header';
import Taskboard from './components/taskboard/taskboard';
import Remover from './components/remover/remover';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <div className='todo'>
        <Header/>
        <Taskboard />
        <Remover />
    </div>
    </QueryClientProvider>
  )
}
export default App
