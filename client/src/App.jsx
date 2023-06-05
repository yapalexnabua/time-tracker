import TimeTracker from './components/TimeTracker/TimeTracker';
import TimeLogList from './components/TimeLogList/TimeLogList';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [newTimeLog, setNewTimeLog] = useState(null);

  return (
    <div className="xl:px-0 px-4 xl:w-1/2 xl:mx-auto py-8">
      <TimeTracker onTimeLogged={setNewTimeLog} />
      <TimeLogList newTimeLog={newTimeLog} />
    </div>
  )
}

export default App
