import { Component } from '@stencil/core';


@Component({
  tag: 'my-main',
  styleUrl: 'my-main.scss'
})


export class MyMain {

  render() {
    return(
      <div class="container">
        <h1>Score-keeper</h1>
        <my-groups></ my-groups>
      </div>
    )
  }
}
