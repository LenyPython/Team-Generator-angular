import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Team Generator'
  newMember: string = ''
  teamMembers: string[] = []
  teams: string[][] = []
  teamNo: number | '' = ''
  error: string = ''

  addMember(): void {
    if(!this.newMember){
      this.error = 'You must specify name'
      setTimeout(()=>this.error='',4000)
      return
    } 
      this.teamMembers.push(this.newMember)
      this.newMember = ''
  }
  onInput(member: string) {
    this.newMember = member
  }
  updateNo(no: string) {
    this.teamNo = +no
  }
  generateTeams(){
    if(!this.teamNo || this.teamNo <= 0){
      this.error = 'Number of team must be a positive number'
      setTimeout(()=>this.error='', 3500)
      return
    }
    if(this.teamMembers.length < this.teamNo){
      this.error = 'Not enough players'
      setTimeout(()=>this.error='',3500)
      return
    }
    let teams: string[][] = []
    let noOfPlayers = this.teamMembers.length / this.teamNo
    for(let player of this.teamMembers){
      let team = Math.floor(Math.random() * (this.teamNo - 1))
      while(teams[team] !== undefined && teams[team].length >= noOfPlayers){
        team++
        if(team >= this.teamNo) team = 0
      }
      teams[team] !== undefined ? teams[team].push(player) : teams[team] = [player]
    }
    this.teams = teams


  }
}
