import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperateComponent } from './operate/operate.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  { path: 'operate', component: OperateComponent },
  { path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
