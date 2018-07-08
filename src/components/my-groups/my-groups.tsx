import { Component, Method, State } from "@stencil/core";

@Component({
  tag: "my-groups",
  styleUrl: "my-groups.scss"
})
export class MyGroups {
  @State() studentGroup: any;

  // replace this with a call to the server
  @State()
  groups = [
    {
      id: 0,
      name: "A Class",
      students: [
        { id: 0, name: "Peter" },
        { id: 1, name: "Elsa" },
        { id: 2, name: "Tim" },
        { id: 3, name: "Kevin" },
        { id: 4, name: "Alisa" },
        { id: 5, name: "Sally" }
      ]
    },
    {
      id: 1,
      name: "B1 Class",
      students: [
        { id: 0, name: "Kevin" },
        { id: 1, name: "Kloe" },
        { id: 2, name: "Henry" },
        { id: 3, name: "Michael" },
        { id: 4, name: "Alice" },
        { id: 5, name: "Marco" }
      ]
    },
    {
      id: 2,
      name: "B2 Class",
      students: [
        { id: 0, name: "Jenny" },
        { id: 1, name: "Paul" },
        { id: 2, name: "Helen" },
        { id: 3, name: "Eno" },
        { id: 4, name: "Dora" },
        { id: 5, name: "Eric" }
      ]
    },
    {
      id: 3,
      name: "C Class",
      students: [
        { id: 0, name: "Shadow" },
        { id: 1, name: "Harry" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Sam" },
        { id: 4, name: "Heather" },
        { id: 5, name: "Daisy" },
        { id: 6, name: "Andy" }
      ]
    },
    {
      id: 4,
      name: "D Class",
      students: [
        { id: 0, name: "Amy" },
        { id: 1, name: "Sam" },
        { id: 2, name: "Fiona" },
        { id: 3, name: "Hank" },
        { id: 4, name: "Sunny" },
        { id: 5, name: "Kevin" },
        { id: 6, name: "Emily" }
      ]
    }
  ];

  @Method()
  setGroupHandler(ev) {
    let groupId = ev.target.getAttribute("data-id");
    this.studentGroup = this.groups[groupId];
    console.log("student group:", this.studentGroup);
  }
  @Method()
  groupResetHandler() {
    this.studentGroup = null;
  }
  @Method()
  renderGroups(groups) {
    return groups.map((group, id) => (
      <li>
        <button onClick={this.setGroupHandler.bind(this)} data-id={id}>
          {group.name}
        </button>
      </li>
    ));
  }

  render() {
    if (this.studentGroup) {
      return [
        <button onClick={this.groupResetHandler.bind(this)}>
          Back to class selection
        </button>,
        <my-student-list studentGroup={this.studentGroup} />
      ];
    } else {
      return (
        <div>
          <h3>Choose a class</h3>
          <ul>{this.renderGroups(this.groups)}</ul>
        </div>
      );
    }
  }
}
