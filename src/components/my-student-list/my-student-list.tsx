import { Component, Prop, Method, Element } from '@stencil/core';


@Component({
  tag: 'my-student-list',
  styleUrl: 'my-student-list.scss'
})

export class MyStudentList {

@Element() studentListEl: HTMLElement;

@Prop() selectedGroup: string

// eventually this will reside in a db, for now, this will do.
students = {
  'B1 class' : ['Kevin', 'Paul', 'Apple', 'Micheal', 'Marco', 'Amanda'],
  'B2 class' : ['Jenny', 'Maggie', 'Helen', 'Eno', 'Dora', 'Eric' ],
  'A class' : ['Peter', 'Elsa', 'Tim', 'Kevin', 'Alisa'],
  'C class' : ['Andy', 'Harry', 'Jack', 'Sam', 'Heather', 'Lee', 'little Andy']
}
studentScores = this.students[this.selectedGroup]

@Method() addStarHandler(ev) {
  let star = document.createElement('span')
  star.innerText = '*'
  star.className = 'star'
  let studentId = ev.target.getAttribute('data-id')
  let studentIdString = 'student' + studentId
  let studentStarsDiv = this.studentListEl.getElementsByClassName(studentIdString + " stars")[0]
  studentStarsDiv.appendChild(star)
}
@Method() removeStarHandler(ev) {
  let studentId = ev.target.getAttribute('data-id')
  let studentIdString = 'student' + studentId
  let studentStarsDiv = this.studentListEl.getElementsByClassName(studentIdString + " stars")[0]
  if (studentStarsDiv.children.length > 0) {
    studentStarsDiv.removeChild(studentStarsDiv.lastChild)
  }
}

  render() {
    return ([
      <h2>{this.selectedGroup}</h2>,
      <div>
        {this.students[this.selectedGroup].map((student, id) => (
          <div class={"row " + "student" + id }>

            <div class="column column-25">
              <span onClick={this.addStarHandler.bind(this)} class="studentName" data-id={id}>{student}</span>
              <span onClick={this.removeStarHandler.bind(this)} class="removeStar" data-id={id}>x</span>
            </div>

            <div  class={"student" + id + " stars column column-75"}>

            </div>

          </div>
          ))}
      </div>
    ]);
  }
}
