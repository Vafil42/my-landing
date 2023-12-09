import ExpirienceView from "./ExpirienceView";
import FirstView from "./FirstView";
import StackView from "./StackView";

interface AppViewInterface { }

export default function AppView({ }: AppViewInterface) {
  return (
    <div>
      <FirstView />
      <StackView />
      <ExpirienceView />
    </div>
  );
}
