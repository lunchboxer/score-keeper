import { Component, Method, State, Prop } from '@stencil/core';

@Component({
  tag: 'my-groups',
  styleUrl: 'my-groups.scss'
})
export class MyGroups {

@State() studentGroup: any

// replace this with a call to the server
@State() groups: [any] = [
  {
    id: 0,
    name: 'A Class',
    students: [
      {id:0, name:'Peter'},
      {id:1, name:'Elsa'},
      {id:2, name:'Tim'},
      {id:3, name:'Kevin'},
      {id:4, name:'Alisa'}
    ]
  },
  {
    id: 1,
    name: 'B1 Class',
    students: [
      {id:0, name:'Kevin'},
      {id:1, name:'Paul'},
      {id:2, name:'Apple'},
      {id:3, name:'Michael'},
      {id:4, name:'Amanda'},
      {id:5, name:'Marco'}
    ]
  },
  {
    id: 2,
    name: 'B2 Class',
    students: [
      {id:0, name:'Jenny'},
      {id:1, name:'Maggie'},
      {id:2, name:'Helen'},
      {id:3, name:'Eno'},
      {id:4, name:'Dora'},
      {id:5, name:'Eric'}
    ]
  },
  {
    id: 3,
    name: 'C Class',
    students: [
      {id:0, name:'Andy'},
      {id:1, name:'Harry'},
      {id:2, name:'Jack'},
      {id:3, name:'Sam'},
      {id:4, name:'Heather'},
      {id:5, name:'Lee'},
      {id:6, name:'Little Andy'}
    ]
  },
  ]

@Prop() apiRootUrl: string = 'http://localhost:1337/graphql';

@Method() setGroupHandler(ev) {
  let groupId = ev.target.getAttribute('data-id')
  this.studentGroup = this.groups[groupId]
  console.log("student group:", this.studentGroup)
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
  // this.getStudentsFromServer();
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
