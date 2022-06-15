import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
     getAll():Foods[]{
         return[
             {
              id : 1 ,
              name : ' Burgger ' ,
              cookTime : '05 -10 ' ,
              price : 50 ,
              favorite : false ,
              origins : [ 'Canada ' ] ,
              star : 4.5 ,
              imageUrl : '/assets/food1.jfif' ,
              tags : [ ' FastFood ' , ' Pizza ' , ' Lunch ' ] ,    
             },
             {
              id : 2 ,
              name : ' Nuddles ' ,
              cookTime : '20 -30 ' ,
              price : 80 ,
              favorite : false ,
              origins : [ ' China ' ] ,
              star : 4 ,
              imageUrl : '/assets/food2.jfif' ,
              tags : [ ' FastFood ' , ' Pizza ' , ' Lunch ' ] ,    
             },
             {
              id : 3 ,
              name : ' Recipe ' ,
              cookTime : '40 -50 ' ,
              price : 10 ,
              favorite : false ,
              origins : [ ' india ' ] ,
              star : 3.5 ,
              imageUrl : '/assets/food3.jfif' ,
              tags : [ ' FastFood ' , ' Pizza ' , ' Lunch ' ] ,    
             },
             {
              id : 4 ,
              name : ' Frice Rice ' ,
              cookTime : '20 -30 ' ,
              price : 80 ,
              favorite : false ,
              origins : [ ' spanice ' ] ,
              star : 3 ,
              imageUrl : '/assets/food4.jfif' ,
              tags : [ ' FastFood ' , ' Pizza ' , ' Lunch ' ] ,    
             },
             {
              id : 5 ,
              name : ' Dinner Food ' ,
              cookTime : '30 -50 ' ,
              price : 150 ,
              favorite : false ,
              origins : [ ' Hindustaan ' ] ,
              star : 2.5 ,
              imageUrl : '/assets/food5.jfif' ,
              tags : [ ' FastFood ' , ' Pizza ' , ' Lunch ' ] ,    
             },
             {
              id : 6 ,
              name : ' South-Indian-Breakfast ' ,
              cookTime : '10 -15 ' ,
              price : 110 ,
              favorite : false ,
              origins : [ ' tamilnadu ' ] ,
              star : 2 ,
              imageUrl : '/assets/food6.jfif' ,
              tags : [ ' FastFood ' , ' Pizza ' , ' Lunch ' ] ,    
             },
             {
              id : 7 ,
              name : ' Indian BrakFast ' ,
              cookTime : '10 -20 ' ,
              price : 10 ,
              favorite : false ,
              origins : [ ' Bharat ' ] ,
              star : 1.5 ,
              imageUrl : '/assets/food7.jfif' ,
              tags : [ ' FastFood ' , ' Pizza ' , ' Lunch ' ] ,    
             },
             {
              id : 8 ,
              name : ' South moodfress ' ,
              cookTime : '05 -10 ' ,
              price : 5 ,
              favorite : false ,
              origins : [ '  Jambudweepa ' ] ,
              star : 1 ,
              imageUrl : '/assets/food8.jfif' ,
              tags : [ ' FastFood ' , ' Pizza ' , ' Lunch ' ] ,    
             },
                
         ]
     }
}
