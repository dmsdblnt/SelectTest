import React, { Component } from "react";
import SelectInput from "./SelectInput";
import { IOption, IName } from "./types";
import { createName } from "./functions";
import { names, options } from "./data";
import "./App.css";

interface AppProps {}
interface AppState {
  optionSelected: string | null;
  optionId: number;
  nameSelected: string | null;
  nameId: number;
}

export default class App extends Component<AppProps, AppState> {
  private constructor(props: AppProps) {
    super(props);
    this.state = {
      optionSelected: null,
      optionId: -1,
      nameSelected: null,
      nameId: -1,
    };
  }

  private handleChange = (object: IOption) => {
    this.setState({
      optionSelected: object.label,
      optionId: object.id,
    });
  };

  private handleNameChange = (object: IName) => {
    this.setState({
      nameSelected: createName(object.firstName, object.lastName),
      nameId: object.id,
    });
  };

  render() {
    return (
      <div>
        <SelectInput
          options={options}
          selected={this.state.optionSelected}
          handleChange={this.handleChange}
          render={(o: IOption) => (
            <div
              key={o.id}
              className={this.state.optionId === o.id ? "input-selected" : ""}
            >
              {o.label}
            </div>
          )}
        />
        <SelectInput
          options={names}
          selected={this.state.nameSelected}
          handleChange={this.handleNameChange}
          render={(o: IName) => (
            <div
              key={o.id}
              className={this.state.nameId === o.id ? "input-selected" : ""}
            >
              {createName(o.firstName, o.lastName)}
            </div>
          )}
        />
      </div>
    );
  }
}
