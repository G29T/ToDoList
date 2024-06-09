import React from 'react';
import ListContainer from './components/list-container/list-container.component';
import InputContainer from './components/input-container/input-container.component';
import Counter from './components/tasks-counter/counter.component';

function App() {
  return (
    <div className="flex h-screen bg-slate-100">
      <div className="m-auto mt-10 p-5 min-w-md bg-slate-50 rounded-xl shadow-lg block space-y-5">
        <div className="flex justify-center">
          <InputContainer />
        </div>
        <ListContainer />
        <Counter />
      </div>
    </div>
  );
}

export default App;
