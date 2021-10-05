import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector:"courses",
    template: `
        <div class='container' >
            <ul class='list-group'>
                <li class='list-group-item' >Titre: {{course.titre | lowercase | uppercase }}</li>
                <li class='list-group-item' >Rating: {{ course.avis | number:'2.2-2' }}</li>
                <li class='list-group-item' >Students {{ course.participants }}</li>
                <li class='list-group-item' >Price: {{ course.prix | currency:'EUR'}}</li>
                <li class='list-group-item' >realeseDate: {{ course.publicationDate| date:'fullDate' }}</li>
            </ul> 
        </div>
    ` ,
})

export class CoursesComponent {

    course = {
        titre:'Formation complete Sur Angular',
        avis : '4.9756',
        participants : 137,
        prix : 950.38,
        publicationDate : new Date(2021,11,12)
    }

}