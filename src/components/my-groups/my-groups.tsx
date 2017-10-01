import { Component, Method, State } from '@stencil/core';

@Component({
  tag: 'my-groups',
  styleUrl: 'my-groups.scss'
})
export class MyGroups {

@State() selectedGroup: string

@Method() setGroupHandler(ev) {
  this.selectedGroup= ev.target.textContent
}
@Method() groupResetHandler() {
  this.selectedGroup = ''
}

groups = ['B1 class', 'B2 class', 'A class', 'C class']

  render() {
    if (this.selectedGroup) {
      return ([
        <button onClick={this.groupResetHandler.bind(this)}>Back to class selection</button>,
        <my-student-list selectedGroup={this.selectedGroup}></my-student-list>
      ])
    } else {
      return (
        <div>
          <h2>Choose a class</h2>
          <ul>
            {this.groups.map(groupname => (
              <li><button onClick={this.setGroupHandler.bind(this)}>{groupname}</button></li>
              ))}
          </ul>
        </div>
      );
    }
  }
}
