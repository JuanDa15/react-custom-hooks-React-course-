// import CounterApp from "./01-useState/CounterApp";
// import CounterWithCustomHook from "./01-useState/CounterWithCustomHooks";
// import FormWithCustomHook from "./02-useEffect/FormWithCustomHook";
// import SimpleForm from "./02-useEffect/SimpleForm";
// import UseFetchComponent from "./03-customHooks/UseFetchComponent";
// import FocusScreen from "./04-useRef/FocusScreen";
// import Layout from "./05-useLayoutEffect/Layout";
// import Memoize from "./06-memoize/Memoize";
// import UseMemoComponent from "./07-useMemo/UseMemoComponent";
// import CallbackHook from "./08-useCallback/CallbackHock";

import TodoList from "./09-useReducer/TodoList";

export default function App () {
  return (
    <section className="max-w-[85ch] mx-auto p-1">
      <h1 className="text-center text-4xl font-bold">Hooks App</h1>
      {/* <CounterApp />
      <CounterWithCustomHook />
      <SimpleForm />
      <FormWithCustomHook />
      <UseFetchComponent />
      <FocusScreen />
      <Layout />
      <Memoize />
      <UseMemoComponent />
      <CallbackHook />
       */}
       <TodoList />
    </section>
  )
}