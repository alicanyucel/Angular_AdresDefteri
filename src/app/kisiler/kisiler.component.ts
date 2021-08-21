import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { KisilerModel } from './kisiler.model';
@Component({
  selector: 'app-kisiler',
  templateUrl: './kisiler.component.html',
  styleUrls: ['./kisiler.component.css']
})
export class KisilerComponent implements OnInit {

  formvalues!:FormGroup;
  personmodelobject:KisilerModel =new KisilerModel();
  persondata!:any;

constructor(private formbuilder:FormBuilder,
 private api:ApiService){}
 


    ngOnInit(): void {
this.formvalues=this.formbuilder.group({
  firstname!: [''],
  lastname!: [''],
  email:[''],
  telefon:[''],
  adres:[''],
})
this.getAllPerson();
}
postPersonDetay()
{
this.personmodelobject.firstname=this.formvalues.value.firstname;
this.personmodelobject.lastname=this.formvalues.value.lastname;
this.personmodelobject.email=this.formvalues.value.email;
this.personmodelobject.telefon=this.formvalues.value.telefon;
this.personmodelobject.adres=this.formvalues.value.adres;
this.api.postPerson(this.personmodelobject)
.subscribe(res=>{
  console.log(res);
  alert("kişi eklendi");
  
 this.formvalues.reset();
 this.getAllPerson();
})
}
getAllPerson()
{
this.api.getPerson()
.subscribe(res=>{
 this.persondata=res; 
})
}
deletePerson(row:any)
{
 this.api.deletePerson(row.id)
.subscribe(res=>{
  alert("sildim");
  this.getAllPerson();
})  
 }

 onGuncelle(row:any)
 {
this.personmodelobject.id=row.id;
this.formvalues.controls['firstname'].setValue(row.firstname);
this.formvalues.controls['lastname'].setValue(row.lastname);
this.formvalues.controls['email'].setValue(row.email);
this.formvalues.controls['telefon'].setValue(row.telefon);
this.formvalues.controls['adres'].setValue(row.adres);

 }
 UpdatePersonDetay()
 {
this.personmodelobject.firstname=this.formvalues.value.firstname;
this.personmodelobject.lastname=this.formvalues.value.lastname;
this.personmodelobject.email=this.formvalues.value.email;
this.personmodelobject.telefon=this.formvalues.value.telefon;
this.personmodelobject.adres=this.formvalues.value.adres; 
this.api.updatePerson(this.personmodelobject,this.personmodelobject.id)

.subscribe(res=>{

  alert("güncelledim");
  let ref=document.getElementById('cancel');
  ref?.click();
  this.formvalues.reset();
  this.getAllPerson();
})
}
}