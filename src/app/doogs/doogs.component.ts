import { Component, OnInit } from '@angular/core';
import { DoogsService } from '../doogs.service';

@Component({
  selector: 'app-doogs',
  templateUrl: './doogs.component.html',
  styleUrls: ['./doogs.component.scss']
})
export class DoogsComponent  implements OnInit{
  data: any;

  constructor( private doogsService:DoogsService){}
  ngOnInit(): void {
      this.doogsService.getGet().subscribe(Response=>{
        this.data=Response
        console.log(this.data)
      })
    
  }
  // onSubmit() {
   
    
  //   this.doogsService.getGet().subscribe(Response=>{
  //     console.log(Response);
  
  //   })
  // }
}
