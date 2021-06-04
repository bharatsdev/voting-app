import { Component, OnInit } from '@angular/core';
import { Vote } from './_models/vote';
import { VoterRestService } from './_services/voterrest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Vote UI';
  header = "Welcome to voting app..!"

  vote: Vote = new Vote(1, 1);

  constructor(private rest: VoterRestService) { }

  ngOnInit(): void {
    console.log("[INFO] : Load voting....")

    this.rest.addVote(this.vote).subscribe(
      (data: Vote) => { console.log(data) },
      (err) => { console.log(err) }
    )

  }

  doVote(votestr: Number): void {
    console.log("[INFO] : Do voting.....!")
    console.log(votestr)
    this.vote = new Vote(votestr, 1)

    this.rest.addVote(this.vote).subscribe(
      (data: Vote) => { console.log(data) },
      (err) => { console.log(err) }
    )

  }
}
