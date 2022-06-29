import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QrGeneratorService } from 'src/app/services/qr-generator.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  qrImg!: SafeHtml;
  submited: boolean = false;
  urlInput: string = ""
  constructor(private sanitizer: DomSanitizer,private qrGeneratorService: QrGeneratorService) { }

  ngOnInit(): void {
    
  }

  generar(){
    this.qrGeneratorService.generate(this.urlInput).subscribe(
      (data: any) => {
        this.qrImg = this.sanitizer.bypassSecurityTrustHtml(data.result);
      }
    )
    this.submited = true
  }

}
