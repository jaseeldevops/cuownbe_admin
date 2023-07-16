import { Component } from "react";
import "./index.css";

export class ProductInput extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
  }

  componentDidMount(): void {
    this.setState({ value: this.props.value });
  }

  _onChange = (e: any) => {
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.value);
  };

  _onSelect = (it: any) => {
    this.setState({ value: it.name });
    this.props.onSelect(it);
  };

  render() {
    const { value }: any = this.state;
    return (
      <div
        className={this.props.className + " prodectInput"}
        style={this.props.style}
      >
        <input onChange={this._onChange} className="a" value={value} />
        {this.props.datas?.length > 0 ? (
          <div className="b">
            {this.props.datas.map((it: any, k: any) => (
              <div className="bA" onClick={() => this._onSelect(it)}>
                {it.name}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
