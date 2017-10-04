import { Component, Method, State, Prop } from '@stencil/core';

@Component({
  tag: 'my-groups',
  styleUrl: 'my-groups.scss'
})
export class MyGroups {

@State() studentGroup: any
@State() groups: [any]

@Prop() apiRootUrl: string = 'http://localhost:1337/api/graphql';

@Method() setGroupHandler(ev) {
  let groupId = ev.target.getAttribute('data-id')
  this.studentGroup = this.groups[groupId]
  console.log(this.studentGroup)
}
@Method() groupResetHandler() {
  this.studentGroup = null
}
@Method() getStudentsFromServer(){
  const query = '{groups { id name student { id name }}}'
  fetch(`${this.apiRootUrl}?query=${query}`).then(res => {
     return res.json();
   }).then(data => {
     this.groups = data.data.groups
     console.log(this.groups)
   }).catch((err) => {
     console.error('Could not load data', err);
   })
}
@Method() renderGroups(groups) {
  return groups.map((group, id) => (
    <li>
      <button onClick={this.setGroupHandler.bind(this)} data-id={id}>{group.name}</button>
    </li>
  ))
}

componentWillLoad() {
  this.getStudentsFromServer();
}

  render() {
    if (this.studentGroup) {
      return ([
        <button onClick={this.groupResetHandler.bind(this)}>Back to class selection</button>,
        <my-student-list studentGroup={this.studentGroup}></my-student-list>
      ])
    } else {

      return (
        <div>
          <h2>Choose a class</h2>
          <ul>
            {this.renderGroups(this.groups)}
          </ul>
        </div>
      );
    }
  }
}
