import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../_service/cidade.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss']
})
export class CidadeComponent implements OnInit {

  constructor(private service: CidadeService) { }

  ngOnInit(): void {
    this.service.listarTodos().subscribe(result => {
      console.log('->',result)
    }, error => {
      console.log
    })
  }

}
