import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-student-list',
  styleUrl: 'my-student-list.scss'
})

export class MyStudentList {

  @Prop() studentGroup: any

  // preload the audio files
  @Prop() yoy = new Audio('assets/ui-confirmation-alert-a5min.wav')
  @Prop() furt = new Audio('assets/quick-fart.wav')

  @State() studentData: any

  render() {

    return ([
      <h3>{this.studentGroup.name}</h3>,
      <table>
      {this.studentGroup.students.map(student => (
          <my-student-row student={student}></my-student-row>
        ))}
      </table>
    ]);
  }
}
