import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
myArray :any =[];
myCommande : any={
  id:'',
  name:'',
  type:'',
  prix:''

}
myCondition =false;
  constructor(private myVar: CommandeService) { }

  ngOnInit(){
    this.getCommande();
  }
  getCommande()
  {
    this.myVar.getAll().subscribe(data =>{
      this.myArray=data
    })
  }

  /*deleteCommande(id:number){
    this.myVar.delete(id).subscribe(()=>{
      this.myArray=this.myArray.filter
      (myVariable => myVariable.id !=id)
    })

  }*/
  /*delete(commandes:any)
  {
    this.myVar.delete(commandes).subscribe(Response => {
      this.myVar.getAll().subscribe(Response=> this.myArray = Response)
      console.log(Response)
    })
    
  }*/
  deleteCommande(id:any)
  {
    this.myVar.delete(id).subscribe(()=>{
      this.myArray=this.myArray.filter((myVariable: { id: any; }) =>myVariable.id != id)
    })
  }

  postCommande(){
    this.myVar.postCo(this.myCommande).subscribe((myVariable)=>{
      this.myArray=[myVariable, ...this.myArray];
      this.videInput();
    })
  }

  videInput(){
    this.myCommande={
      id:'',
      name:'',
      type:'',
      prix:''
    }
  }

  editCommande(myVariable:any){
    this.myCommande = myVariable ;
    this.myCondition=true;
  }

  updateMyCommande()
  {
    this.myVar.update(this.myCommande).subscribe(commande =>{
      this.videInput();
      this.myCondition=false;
    } )
  }




}
