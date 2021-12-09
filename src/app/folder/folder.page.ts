import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public depremler:any;

  constructor(private activatedRoute: ActivatedRoute,public servis:ApiService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("ben buradayım");
    this.servis.webService().subscribe(data=>{
      this.depremler = data;
    })

   /* burayı api.service.ts içerisine fonksiyon olarak ekledik.
    this.http.get('https://deprem.odabas.xyz/api/pure_api.php').subscribe(data=>{
      this.depremler = data;


    })    */
    

  }

}
