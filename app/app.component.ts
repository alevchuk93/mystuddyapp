import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {VideoListComponent} from './videolist.component';
import {VideoDetailComponent} from './videodetail.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [VideoListComponent, VideoDetailComponent]

})
export class AppComponent {
    title = Config.TITLE_PAGE;
    videos: Array<Video>;
    selectedVideo: Video;

    constructor(){
        this.videos = [
            new Video (1, "Test","www.test.com","Test Description"),
            new Video (2, "Test 2","www.test2.com")
        ]
 
   }
onSelectVideo(video){
    //console.log(JSON.stringify(video))9820983029eeeee;
    this.selectedVideo = video;

}
}
