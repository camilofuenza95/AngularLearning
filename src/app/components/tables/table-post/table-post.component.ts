import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/interfaces/IPost';
import { PostServiceService } from '../../../services/post-service.service';
import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'table-post',
  templateUrl: './table-post.component.html',
  styleUrls: ['./table-post.component.css']
})
export class TablePostComponent implements OnInit {



  public posts: IPost[];
  // dataSource:Observable<IPost>;
  dataSource = new MatTableDataSource<IPost>();
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  constructor(public service:PostServiceService) { }

  ngOnInit() {
    let data=this.service.getAll().subscribe(
      posts => this.posts = posts as IPost[]);
      this.dataSource=  this.service.getAll() as any;
      this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {

  }


}
