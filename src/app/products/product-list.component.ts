import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({

    selector: 'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']

})
export class ProductListComponent implements OnInit{
    
   
pageTitle:string="Product List";
imageWidth=50;
imageMargin=2;
showImage=false;
private _listFilter='';

get listFilter():string{
    return this._listFilter
}
set listFilter(value: string){
    this._listFilter=value;
    console.log("in setter",value);
    this.filteredProducts=this.performFilter(value);
}
filteredProducts:IProduct[]=[];
products: IProduct[]=[];
constructor(private productService:ProductService){} // injection of the service

ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.filteredProducts=this.products;
   
}
onRatingClicked(message:string):void{


    this.pageTitle='ProductList '+message;

}
performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

 toggleImage():void{
     this.showImage=!this.showImage;
 }

  

}