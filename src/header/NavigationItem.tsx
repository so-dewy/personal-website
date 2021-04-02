import {
  Link
} from "react-router-dom";

function NavigationItem(props: { path: string, text: string }) {
  return (
    <li>
      <Link to={props.path}>{props.text}</Link>
    </li>
  );
}

export default NavigationItem;