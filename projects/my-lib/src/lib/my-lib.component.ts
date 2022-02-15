import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <div class="content mb-2" style="background-color: #000;">
    <div class="container my-3 mt-5 pt-5 ">
        <div class="row ">
            <h1 class="menu_home_title line_after_heading2" style=" text-transform: uppercase;font-weight: bold;"><strong>NEWS </strong><a href="" class="btn btn-outline-light" style="float:right; width:200px; height:40px;text-transform: uppercase; color:#ea8025; font-weight: bold;">All News</a>                <br></h1>
            <div class="col-md-12 bg-light pt-3 ">
                <img src="assets/img/free.jpg" alt="" width="100%" height="350px"> <br><br>
            </div>

            <div class="col-md-12 bg-light" style=" margin-bottom: 50px; ">
                <p style="font-size:18px; font-weight: bold;color: #ea8025">NEWS</p>
                <h1 style="font-size:20px; font-weight: bold; color: #000">Join "buy 1 get 2 free" - Double offer, double gift from...</h1>
                <p style="font-size:18px;color: #000">Join "buy 1 get 2 free" - Double offer, double gift from 14/02 to 20/02 <a href="" class="list-unstyled" style="color: #ea8025;float: right">Xem thêm...</a></p>

                <br>
                <br>
            </div>
            <div class="row-sm-6 col-md-4 bg-light pt-3" style=" margin-bottom: 50px; ">
                <div class="img">
                    <img src="assets/img/music.jpg" alt="" width="100%" height="200px"> <br><br>

                </div>
                <div class="content2" style=" margin-bottom: 50px;  color: #000 ">
                    <p style="font-size:18px; font-weight: bold;color: #ea8025">NEWS</p>
                    <h1 style="font-size:20px; font-weight: bold; ">Join the "music arena" - Converging ...</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore, libero placeat odit molestias magni quasi nostrum nemo dolorum explicabo, ea in atque optio temporibus nobis corrupti qui maiores ut! <a href="" class="list-unstyled" style="color: #ea8025;float: right">Xem thêm</a></p>

                </div>
            </div>

            <div class="row-sm-6 col-md-4 bg-light pt-3" style=" margin-bottom: 50px;  ">
                <div class="img">
                    <img src="assets/img/pban.jpg" alt="" width="100%" height="200px"> <br><br>

                </div>
                <div class="content2" style=" margin-bottom: 50px; color: #000 ">
                    <p style="font-size:18px; font-weight: bold;color: #ea8025">NEWS</p>
                    <h1 style="font-size:20px; font-weight: bold; ">The new version is arrived...</h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet fuga, tempore possimus facere iste. Architecto doloribus iure rerum a quisquam? Sequi quia, quaerat itaque deserunt eos cupiditate eaque minima. <a href="" class="list-unstyled" style="color: #ea8025;float: right">Xem thêm</a></p>

                </div>
            </div>

            <div class="row-sm-6 col-md-4 bg-light pt-3" style=" margin-bottom: 50px;  ">
                <div class="img">
                    <img src="assets/img/lol.jpg" alt="" width="100%" height="200px"> <br><br>

                </div>
                <div class="content2" style=" margin-bottom: 50px; color: #000 ">
                    <p style="font-size:18px; font-weight: bold;color: #ea8025">NEWS</p>
                    <h1 style="font-size:20px; font-weight: bold; ">The new version is arrived...</h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet fuga, tempore possimus facere iste. Architecto doloribus iure rerum a quisquam? Sequi quia, quaerat itaque deserunt eos cupiditate eaque minima. <a href="" class="list-unstyled" style="color: #ea8025;float: right">Xem thêm</a></p>

                </div>
            </div>



        </div>
    </div>
</div>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
