import TimeTracker from './components/TimeTracker/TimeTracker';
import TimeLogList from './components/TimeLogLIst/TimeLogList';
import './App.css';

const App = () => {
  return (
    <div className="xl:px-0 px-4 xl:w-1/2 xl:mx-auto py-8">
      <TimeTracker />
      <TimeLogList />
    </div>
  )
}

export default App
