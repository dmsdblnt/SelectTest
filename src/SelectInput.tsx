import React from "react";

interface SelectInputProps<T> {
  options: Array<T>;
  selected: string | null;
  handleChange: (object: T) => void;
  render: (o: T) => JSX.Element;
}

interface SelectInputState {
  isVisible: boolean;
}

export default class SelectInput<T> extends React.Component<
  SelectInputProps<T>,
  SelectInputState
> {
  private constructor(props: SelectInputProps<T>) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  private handleClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="dropdown" onClick={this.handleClick}>
        {this.props.selected || "Select an input"}
        {this.props.options.map((o: T, index) => {
          return (
            <div
              key={index}
              className={
                this.state.isVisible ? "input-visible" : "input-hidden"
              }
              onClick={() => this.props.handleChange(o)}
            >
              {this.props.render(o)}
            </div>
          );
        })}
      </div>
    );
  }
}
