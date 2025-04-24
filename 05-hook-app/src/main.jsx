import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffec/Layout'
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHook'
// import { HookApp } from './HookApp.jsx'
// import { CounterApp } from './01-useState/CounterApp'
// import { Memorize } from './06-memos/Memorize';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';
// import { CallbackHook } from './06-memos/CallbackHook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHooks />
  </React.StrictMode>
)
