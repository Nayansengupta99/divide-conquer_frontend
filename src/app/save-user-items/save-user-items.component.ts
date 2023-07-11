import { AppServiceService } from './../app-service.service';
import { Component, OnInit } from '@angular/core';
import { TripModel } from '../TripModel';
import { ItemModel } from '../ItemModel';
import { UserItemModel } from '../UserItemModel';
import { User } from '../user';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-save-user-items',
  templateUrl: './save-user-items.component.html',
  styleUrls: ['./save-user-items.component.css']
})
export class SaveUserItemsComponent implements OnInit {


  item: ItemModel = new ItemModel("", 0)
  tripModel: TripModel = new TripModel("")
  message: any
  itemPrice = ""
  user: User = new User("", 0)
  items: ItemModel[] = []
  userList: any
  userItem: UserItemModel = new UserItemModel(this.user.userName, this.tripModel, this.items)


  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }


  public loading = new Array(4);

  onClick(idx: number): void {

    if (!!this.loading[idx]) {
      clearTimeout(this.loading[idx]);
      this.loading[idx] = undefined;
    } else {
      this.loading[idx] = setTimeout(() => {
        this.loading[idx] = undefined;
      }, 3000);
    }
  }

  onChange(changeEvent: boolean, idx: number): void {
    console.log(changeEvent, idx)
  }

  public getAllUsers(): void {
    this.service.getAllUsers().subscribe(data => {
      //console.log(data);
      this.userList = data
    },
      error => console.log(error));
  }

  public saveUserItems() {
    this.item.itemPrice = Number(this.itemPrice)
    this.userItem.items.push(this.item)


    this.service.createUserItem(this.userItem).subscribe(
      data => {
        //console.log(data)
      }, error => console.log(error)
    )
    this.userItem.items = []

  }

}
