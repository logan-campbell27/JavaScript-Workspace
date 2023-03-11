import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Operation } from '../models/Operation';
import { OperationServiceService } from '../service/operation-service.service';
import { FormBuilder } from '@angular/forms'
import { NumberFormatStyle } from '@angular/common';
@Component({
  selector: 'app-operate',
  templateUrl: './operate.component.html',
  styleUrls: ['./operate.component.css']
})
export class OperateComponent {
  constructor(private route: ActivatedRoute, private service: OperationServiceService, private formBuilder: FormBuilder){}
  completedop = 0;
  num1 = 0;
  num2 = 0;
  operand = "";

  appForm = new FormGroup({
    num1: new FormControl(0),
    num2: new FormControl(0),
    operand: new FormControl('')
  });
  onSubmit(data: Partial<{num1: number | null; num2: number | null; operand: string | null}>){
    console.log("Form submitted");
    this.num1 = (data.num1 as number);
    this.num2 = (data.num2 as number);
    this.operand = (data.operand as string);
    let o = new Operation(this.num1, this.num2, this.operand);
    console.log(o);
    this.route.queryParams.subscribe(params=>{
      console.log("Getting data...");
      this.service.createOperation(o, (completed: number)=>
      {
        console.log(completed);
        this.completedop = completed;
      });
    });
  }
}
