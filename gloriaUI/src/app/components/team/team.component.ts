import { Component, OnInit } from '@angular/core';
import {TeamMember} from "../../model/team-member";
import {TeamService} from "../../services/team.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMembers: TeamMember[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.loadTeamMembers();
  }

  loadTeamMembers(): void {
    this.teamService.getTeamMembers().then(teamMembers => this.teamMembers = teamMembers);
  }

}
