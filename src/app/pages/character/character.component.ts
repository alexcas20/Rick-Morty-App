import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: any;
  id!:number;

  constructor(private api: ApiServiceService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const param = this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    }) 

    this.api.getCharacters(this.id)
      .subscribe(resp => {
        this.character = resp;
       
      })



  }

  status(status: string){
    if(status === 'Alive'){
      return 'status'
    } else if (status === 'Dead'){
      return 'statusD'
    } else return 'statusI'
  }

}
