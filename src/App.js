import './App.css';
import Counter from './Counter';
import Array from './Array';
import Boolean from './Boolean';
import UserForm from './UserForm';
import Theme from './Theme';
import HookCounterOne from './useEffectComponents/HookCounterOne';
import DataFetching from './useEffectComponents/DataFetching';
import TodoList  from './CRUD-operations/TodoList';
import Parent from './useContext/Parent';
function App() {
  return (
    <div className="App">
     {/* <Counter/> */}
     {/* <Array/> */}
     {/* <Boolean/> */}
     {/* <UserForm/> */}
     {/* <Theme/> */}
     {/* <HookCounterOne/> */}
     {/* <DataFetching/> */}
     {/* <TodoList/> */}
     <Parent/>
    </div>
  );
}

export default App;
