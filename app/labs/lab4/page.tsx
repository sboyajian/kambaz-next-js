"use client";
import Link from "next/link";
import store from "./store";
import { Provider } from "react-redux";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExample from "./redux/hello";
export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <Provider store={store}>
      <div id="wd-passing-functions">
        <h2>Lab 4</h2>
        <Link href="./lab4/redux">Redux Examples</Link>

        <ReduxExample />
        <Link href="./lab4/react-context">React Context Examples</Link>

        <PassingFunctions theFunction={sayHello} />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
        <Link href="./lab4/react-context">React Context Examples</Link>
        <br />
        <Link href="./lab4/zustand">Zustand Examples</Link>
      </div>
    </Provider>
  );
}
