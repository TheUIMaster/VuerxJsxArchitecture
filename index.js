import { reactive } from "@vue/reactivity";
import { render, cleanup } from "vuerx-jsx";
import Test from "./Test";

function App() {
  let stati = 0;
  const counter = reactive({ count: 0 }),
    timer = setInterval(() => { (counter.count += 1); stati = stati + 1;}, 1000);
  cleanup(() => clearInterval(timer));
  return <div><span>{stati}</span><div>{counter.count}</div><Test text={counter.count}/></div>;
}

render(App, document.getElementById("app"));
