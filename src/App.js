import './App.css';
import configureStore from './store/configurStore';
import * as actions from './store/bugs';
import * as projectAction from './store/projects'
// import customStore from './customStore';

function App() {
  const store = configureStore();
  store.subscribe(() => {
    console.log("State Changed")
    console.log(store.getState());
  })
  const dispatch = () => {
    store.dispatch(actions.bugAdded({ description: "Bug 1" }))
    store.dispatch(projectAction.projectAdded())
  }
  const dispatchBugRemoved = () => {
    // store.dispatch(actions.bugRemove({ id: 3 }))
    store.dispatch(projectAction.projectRemove({ id: 2 }))
  }
  const dispatchBugResolved = () => {
    store.dispatch(actions.bugResolved({ id: 2 }))
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
