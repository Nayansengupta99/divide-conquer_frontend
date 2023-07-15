
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { TripModel } from '../TripModel';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-show-shares',
  templateUrl: './show-shares.component.html',
  styleUrls: ['./show-shares.component.css']
})
export class ShowSharesComponent implements OnInit {

  tripModel: TripModel = new TripModel("")
  eachShareJson: any
  eachExpenditureJson: any
  tripNames: any

  showTable: boolean = false;
  showTable1: boolean = false;
  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.getAllTripNames()

  }

  toggleShowTable(): void {
    this.showTable = !this.showTable;
    this.showTable1 = false
  }


  toggleShowTable1(): void {
    this.showTable1 = !this.showTable1;
    this.showTable = false
  }
  // @ViewChild('content') content: ElementRef;  

  // public SavePDF():void{  
  //   let content=this.content.nativeElement;  
  //   console.log(this.content)
  //   let doc = new jsPDF();  
  //   let _elementHandlers =  
  //   {  
  //     '#editor':function(element:any,renderer:any){  
  //       return true;  
  //     }  
  //   };  
  //   doc.fromHT(content.innerHTML,{  

  //     'width':190,
  //     'elementHandlers':_elementHandlers  

  //   });  

  //   doc.save('test.pdf');  
  // }  

  public showEachSharesByTripName() {
    this.service.getEveryOneShareByTripName(this.tripModel.tripName).subscribe(
      data => {
        this.eachShareJson = data
        //console.log(data)
      },
      err => console.error(err)
    )
  }

  getSelectedValue(event: any) {
    this.tripModel.tripName = event.target.value
  }

  public showEachExpenditureAmountByTripName() {
    this.service.getEveryoneTotalExpenditureByTripName(this.tripModel.tripName).subscribe(
      data => {
        this.eachExpenditureJson = data
        //console.log(data)
      },
      err => console.error(err)
    )
  }



  public getAllTripNames() {
    this.service.getAllTripNames().subscribe(
      data => {
        this.tripNames = data

      },
      err => console.log(err)
    )
  }

}
