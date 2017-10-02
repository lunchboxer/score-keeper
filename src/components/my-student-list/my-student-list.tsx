import { Component, Prop, Method, Element } from '@stencil/core';


@Component({
  tag: 'my-student-list',
  styleUrl: 'my-student-list.scss'
})

export class MyStudentList {

  @Element() studentListEl: HTMLElement;

  @Prop() selectedGroup: string
  // prelaod the audio files
  @Prop() yoy = new Audio('assets/ui-confirmation-alert-a5min.wav')
  @Prop() furt = new Audio('assets/quick-fart.wav')

  // eventually this will reside in a db, for now, this will do.
  students = {
    'B1 class' : ['Kevin', 'Paul', 'Apple', 'Michael', 'Marco', 'Amanda'],
    'B2 class' : ['Jenny', 'Maggie', 'Helen', 'Eno', 'Dora', 'Eric' ],
    'A class' : ['Peter', 'Elsa', 'Tim', 'Kevin', 'Alisa'],
    'C class' : ['Andy', 'Harry', 'Jack', 'Sam', 'Heather', 'Lee', 'little Andy']
  }
  studentScores = this.students[this.selectedGroup]

  @Method() addStarHandler(ev) {
    let star = document.createElement('my-star')
    let studentId = ev.target.getAttribute('data-id')
    let studentIdString = 'student' + studentId
    let studentStarsDiv = this.studentListEl.getElementsByClassName(studentIdString + " stars")[0]
    studentStarsDiv.appendChild(star)
    let yay = new Audio('assets/ui-confirmation-alert-a5min.wav')
    yay.play()
  }
  @Method() removeStarHandler(ev) {
    let studentId = ev.target.getAttribute('data-id')
    let studentIdString = 'student' + studentId
    let studentStars = this.studentListEl.getElementsByClassName(studentIdString + " stars")[0]
    if (studentStars.children.length > 0) {
      studentStars.removeChild(studentStars.lastChild)
    }
    let fart = new Audio('assets/quick-fart.wav')
    fart.play()
  }

  render() {
    return ([
      <h2>{this.selectedGroup}</h2>,
      <table>
        <thead>
          <th>Name</th>
          <th>Stars</th>
        </thead>
        <tbody>
        {this.students[this.selectedGroup].map((student, id) => (
          <tr class={"student" + id }>

            <td>
              <span onClick={this.addStarHandler.bind(this)} class="studentName" data-id={id}>{student}</span>
              <span onClick={this.removeStarHandler.bind(this)} class="removeStar" data-id={id}>x</span>
            </td>

            <td class={"student" + id + " stars"}>
            </td>

          </tr>
          ))}
          </tbody>
      </table>
    ]);
  }
}
