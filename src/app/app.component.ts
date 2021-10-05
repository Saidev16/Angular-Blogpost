import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


  courses:any ;

  addCourse(){
    this.courses.push( {id:6, title:'formation react native'} );
  }
  deleteCourse(course:any){
    let index = this.courses.indexOf( course );
    console.log(index);
    this.courses.splice(index);
  }
  editCours(id:any){
     id.title = 'Updated' 
  }

  loadCourses(){
      this.courses =  [
        { id:1 , title : 'learn javascript' },
        { id:2 , title : 'learn REACT' },
        { id:3 , title : 'learn Angular' },
        { id:4 , title : 'learn flutter' },
    
      ];
  }
}
