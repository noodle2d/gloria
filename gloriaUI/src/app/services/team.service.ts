import { Injectable } from '@angular/core';
import {TeamMember} from "../model/team-member";
import {TEAM_MEMBERS} from "../mocks/TEAM_MEMBERS";

@Injectable()
export class TeamService {

  constructor() { }

  getTeamMembers(): Promise<TeamMember[]> {
    return Promise.resolve(TEAM_MEMBERS);
  }
}
