import { NgClass, NgIf, NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector:"app-produs",
    standalone: true,
    templateUrl:"./produs.component.html",
    styleUrl:"./produs.component.css",
    imports:[NgIf, NgClass, NgStyle]
})
export class ProdusComponent{
    @Input() nume="NUME PRODUS"
    @Input() pretOferta:number|null=null
    @Input() pret=999
    @Input() stoc=0
    @Input() poza="default.png"
    @Input() nameClr="black"



    getCurrentPrice(){
        if(this.pretOferta!=null) return this.pretOferta
        return this.pret
    }

}