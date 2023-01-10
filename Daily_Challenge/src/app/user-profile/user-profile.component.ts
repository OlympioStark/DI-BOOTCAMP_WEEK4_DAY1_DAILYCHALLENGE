import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  users = {
    firstName: "Gilles-Chris",
    lastName: "Maké",
    image: "https://media.licdn.com/dms/image/C4E03AQF-_6LL-45SGg/profile-displayphoto-shrink_200_200/0/1657709492790?e=1678924800&v=beta&t=lZAf5kaFFkmZv78ZLfV9g_HHWkYRqay9mnc5HTysD84"

  };

  get profilePictureUrl() {
    return this.users.image;
  };

  get fullName() {
    return this.users.lastName + " " + this.users.firstName;
  }

}
