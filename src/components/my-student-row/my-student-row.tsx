import { Component, Prop, Method, State } from "@stencil/core";

@Component({
  tag: "my-student-row",
  styleUrl: "my-student-row.scss"
})
export class MyStudentRow {
  @Prop() student: any;
  @State() score: number = 0;

  // preload the audio files
  @Prop() yoy = new Audio("assets/ui-confirmation-alert-a5min.wav");
  @Prop() furt = new Audio("assets/quick-fart.wav");

  @Method()
  addStarHandler() {
    this.score++;
    let yay = new Audio("assets/ui-confirmation-alert-a5min.wav");
    yay.play();
  }
  // JSX doesn't allow us to use a for loop,
  // so we're building an arrary from a number to use map instead. #HACK
  @Method()
  buildScoresArray() {
    return Array.apply(null, { length: this.score }).map(Number.call, Number);
  }

  @Method()
  removeStarHandler() {
    if (this.score > 0) {
      this.score--;
      let fart = new Audio("assets/quick-fart.wav");
      fart.play();
    }
  }

  // TODO:  Needs somekinda websocket tells us when the db changes
  // HTML doesn't love wrappign a tablerow in a custom element
  render() {
    return (
      <tr class={"student" + this.student.id}>
        <td>
          <span
            onClick={this.addStarHandler.bind(this)}
            class="studentName"
            data-id={this.student.id}
          >
            {this.student.name}
          </span>
          <span
            onClick={this.removeStarHandler.bind(this)}
            class="removeStar"
            data-id={this.student.id}
          >
            &times;
          </span>
        </td>

        <td class={"student" + this.student.id + " stars"}>
          {this.buildScoresArray().map(id => <my-star rank={id} />)}
        </td>

        <td class={"student" + this.student.id + " score"}>{this.score}</td>
      </tr>
    );
  }
}
