import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,


  ],
  exports:[
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ]

})
export class MaterialModuleModule { }
