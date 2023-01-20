import './App.css';
import configureStore from '../../src/store/configurStore';
import * as actions from './store/bugs';
// import customStore from './customStore';

function App() {
  const store = configureStore();
  store.subscribe(() => {
    console.log("State Changed")
    console.log(store.getState());
  })
  const dispatch = () => {
    store.dispatch(actions.bugAdded("Bug 1"))

  }

  const dispatchBugRemoved = () => {
    store.dispatch(actions.bugRemove(3))
  }
  const dispatchBugResolved = () => {
    store.dispatch(actions.bugResolved(2))
  }


  return (
    <div className="App">
      <button onClick={dispatch}>
        Dispatch Action
      </button>
      <button onClick={dispatchBugRemoved}>
        Remove Dispatch Action
      </button>
      <button onClick={dispatchBugResolved}>
        Resolve Dispatch Action
      </button>
    </div>
  );
}

export default App;
