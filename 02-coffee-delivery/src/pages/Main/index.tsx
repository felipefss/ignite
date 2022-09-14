import { CoffeeList } from "./components/CoffeeList";
import { Intro } from "./components/Intro";

export function Main() {
  return (
    <div>
      <Intro />
      <CoffeeList />
    </div>
  );
}