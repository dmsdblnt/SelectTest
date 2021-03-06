import React, { Component } from "react";
import SelectInput from "./SelectInput";
import { IOption, IName } from "../utils/types";
import { createName } from "../utils/functions";
import { names, options } from "../utils/data";
import "../css/App.css";

interface AppProps {}
interface AppState {
  optionSelected: IOption | null;
  nameSelected: IName | null;
}

export default class App extends Component<AppProps, AppState> {
  private constructor(props: AppProps) {
    super(props);
    this.state = {
      optionSelected: null,
      nameSelected: null,
    };
  }

  private handleChange = (object: IOption) => {
    this.setState({
      optionSelected: object,
    });
  };

  private handleNameChange = (object: IName) => {
    this.setState({
      nameSelected: object,
    });
  };

  render() {
    return (
      <div>
        <SelectInput
          options={options}
          selected={this.state.optionSelected}
          handleChange={this.handleChange}
          render={(o: IOption | null) => (
            <div
              className={
                o && this.state.optionSelected?.id === o.id
                  ? "input-selected"
                  : ""
              }
            >
              {o ? o.label : "Select an input"}
            </div>
          )}
        />
        <SelectInput
          options={names}
          selected={this.state.nameSelected}
          handleChange={this.handleNameChange}
          render={(o: IName | null) => (
            <div
              className={
                o && this.state.nameSelected?.id === o.id
                  ? "input-selected"
                  : ""
              }
            >
              {o ? createName(o.firstName, o.lastName) : "Select an input"}
            </div>
          )}
        />
      </div>
    );
  }
}
