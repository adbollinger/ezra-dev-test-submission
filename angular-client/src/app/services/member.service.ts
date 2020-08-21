import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Member, AddMemberRequest } from '../classes/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private basePath: string = 'http://localhost:5000/members';

  constructor(private http: HttpClient) { }

  GetMembers(): Observable<any> {
    return this.http.get<Member[]>(`${this.basePath}`);
  }

  AddMember(member: AddMemberRequest): Observable<any> {
    return this.http.put<Member[]>(`${this.basePath}/add`, member);
  }

  EditMember(member: Member): Observable<any> {
    return this.http.post<Member[]>(`${this.basePath}/update`, member);
  }

  DeleteMember(id): Observable<any> {
    return this.http.delete<Member[]>(`${this.basePath}/delete/${id}`);
  }

}
