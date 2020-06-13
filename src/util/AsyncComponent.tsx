import React, { Component } from "react";
interface props {
  
}

export default function AsyncComponent(importComponent: { (): Promise<typeof import("../container/home/index")>; (): PromiseLike<{ default: any; }> | { default: any; }; }) {
  class AsyncComponent extends Component {
    constructor(props: Readonly<{}>) {
      super(props);

      this.state = {
        component: null
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component
      });
    }

    render() {
      // @ts-ignore
      const C=this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
