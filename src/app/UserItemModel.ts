import { ItemModel } from "./ItemModel"
import { TripModel } from "./TripModel"

export class UserItemModel{

userName:String
tripModel: TripModel = new TripModel("")
items:ItemModel[]=[]
constructor(
    userName:String,
    tripModel:TripModel,
    items:ItemModel[]
){
    this.userName="",
    this.tripModel=tripModel,
    this.items=[]

}

}