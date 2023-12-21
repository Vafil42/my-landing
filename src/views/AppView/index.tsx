import ContactsView from "./ContactsView";
import ExpirienceView from "./ExpirienceView";
import FirstView from "./FirstView";
import StackView from "./StackView";
import { wrapperStyles } from "./style.css";

interface AppViewInterface { }

export default function AppView({ }: AppViewInterface) {
  return (
    <div className={wrapperStyles}>
      <FirstView />
      <StackView />
      <ExpirienceView />
      <ContactsView />
    </div>
  );
}
