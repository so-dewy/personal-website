import NavigationItem from './NavigationItem';

function NavigationList() {
  return (
    <ul className="NavigationList">
      <NavigationItem path="/" text="Home"/>
      <NavigationItem path="/about" text="About"/>
      <NavigationItem path="/blog" text="Blog"/>
      <NavigationItem path="/resume" text="Resume"/>
    </ul>
  );
}

export default NavigationList;