
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  descriere: string = "Scurta descriere pentru Home";
  myimg:string = "https://w7.pngwing.com/pngs/311/952/png-transparent-angular-logo-landscape-tech-companies-thumbnail.png";
  showImage:boolean = true;
  salut(){
    this.descriere  = "S-a schimbat descrierea";
  }
  showImg(){
    this.showImage = !this.showImage;
  }
}
