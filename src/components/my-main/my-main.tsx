import { Component } from '@stencil/core';


@Component({
  tag: 'my-main',
  styleUrl: 'my-main.scss'
})


export class MyMain {

  render() {
    return(
      <div class="container">
        <h2>Score-keeper</h2>
        <my-groups></ my-groups>
      </div>
    )
  }
}
