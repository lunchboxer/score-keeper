import { Component } from "@stencil/core";
import "@stencil/router";

@Component({
  tag: "my-main",
  styleUrl: "my-main.scss"
})
export class MyMain {
  render() {
    return (
      <div class="container">
        <h2>Score-keeper</h2>
        <my-groups />
      </div>
    );
  }
}
