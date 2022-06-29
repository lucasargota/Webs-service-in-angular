import { Component, OnInit } from '@angular/core';
import { MiTraductorService } from 'src/app/services/mi-traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {

  text!:string;
  source:string=''
  target!:string;
  tranlateText:string=''

  constructor(private miTraductor:MiTraductorService) { }

  traducir(){
    this.miTraductor.postTranslate(this.text,this.target,this.source).subscribe(
      (result)=>{
        this.tranlateText = result.data.translations[0].translatedText;
        console.log(result)
      },
      error=>{console.log(error)}


    )

  }
  cambiarSource(idioma:string){
    this.source= idioma
  }
  cambiarTarget(idioma:string){
    this.target=idioma
  }

  ngOnInit(): void {
  }

}
