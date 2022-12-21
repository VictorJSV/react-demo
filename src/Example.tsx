import React from "react";
import "./styles.css";

// Ahora se usa hooks
const Message = (props: { msg: string }) => {
  const [count, setCount] = React.useState(0);

  const handleClick = (): void => {
    setCount(count + 1);
  };
  return (
    <>
      <div>{props.msg} WOLIS</div>
      <button onClick={handleClick}>Counter</button>
      <span>{count}</span>
    </>
  );
};

// Antes se usaba clases
class App extends React.Component {
  customProps = {
    className: "App"
  };
  state: { title: string };
  constructor(props: any) {
    super(props);
    this.state = { title: "Hello :)" };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ title: "Pop" });
  }

  render() {
    return (
      <div {...this.customProps}>
        <h1 style={{ color: "red" }}>{this.state.title} CodeSandbox v1</h1>
        <br />
        <button onClick={this.onClick}>Clic here!</button>
        <h2>Start editing to see some magic happen!</h2>
        <Message msg="HOLIS" />
        <Message msg="MU" />
      </div>
    );
  }
}
