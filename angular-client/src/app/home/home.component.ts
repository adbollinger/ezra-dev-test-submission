import { Component, Inject } from '@angular/core'
import { Member, AddMemberRequest } from '../classes/member'
import { MemberService } from '../services/member.service'
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public members: Member[];
  public idForEdit: string;
  public memberForEdit: AddMemberRequest;
  public valid: boolean = false;

  constructor(private memberService: MemberService) {
    this.getMembers();
    this.memberForEdit = {
      Name: '',
      Email: ''
    };
  }

  getMembers() {
    this.memberService.GetMembers()
    .pipe(take(1))
    .subscribe(
      (result) => {
        this.members = result
      },
      (error) => console.error(error),
    )
  }

  deleteMember(id) {
    // (DONE) TODO
    this.memberService.DeleteMember(id)
    .pipe(take(1))
    .subscribe(
      (result) => {
        // The alternative would be getting the index of the deleted member, then splicing them from the array
        // Considering the relatively small size of members in this case, I decided to go with the api call
        this.getMembers();
      }
    )
  }

  openEditModal(member) {
    this.idForEdit = member.id;
    this.memberForEdit = {
      Name: member.name,
      Email: member.email
    };
    this.valid = false;
    $('#edit_member').modal('show');
  }

  setMember(value: any) {
    this.valid = value.valid;
  }

  editMember() {
    // TODO
    const member: Member = {
      Id: this.idForEdit,
      Name: this.memberForEdit.Name,
      Email: this.memberForEdit.Email
    };

    this.memberService.EditMember(member)
      .pipe(take(1))
      .subscribe(
        (result) => {
          // The alternative would be finding and updating the edited member in the array
          // Considering the relatively small size of members in this case, I decided to go with the api call
          this.getMembers();
          $('#edit_member').modal('hide');
        },
        (error) => console.error(error),
      );
  }
}
