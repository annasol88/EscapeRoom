import {Component, OnInit} from '@angular/core';
import {TeamDetailsService} from "../../services/team-details.service";

@Component({
  selector: 'app-puzzlelocations',
  templateUrl: './puzzlelocations.component.html',
  styleUrls: ['./puzzlelocations.component.css']
})
export class PuzzlelocationsComponent implements OnInit {
  answer: string;
  correctAnswer: boolean = false;
  showHint: boolean = false;
  incorrectCount: number = 0;
  teamDetailsService: TeamDetailsService;

  constructor(private _teamDetailsService: TeamDetailsService) {
    this.teamDetailsService = _teamDetailsService;
  }

  ngOnInit(): void {
  }

  update(value: string) {
    this.answer = value;
    if (/^.*science\s*centre.*$/.test(this.answer.toLowerCase())) {
      this.correctAnswer = true;
      this.incorrectCount = 0;
      this.showHint = false;
    } else {
      this.incorrectCount++;
    }

    if (this.incorrectCount > 1) {
      this.showHint = true;
      this.incorrectCount = 0;
    }
  }
}
