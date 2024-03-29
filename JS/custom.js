/*JS Document */

/****Load**** */
$(window).on('load', function(event) {
    $('body').removeClass('preloading'); // xóa class
// 	// $('.load').delay(1000).fadeOut('fast');
    $('.loader').delay(1200).fadeOut('fast');
});

 /******Back to top***** */
 $(document).ready(function(){ 
	$(window).scroll(function(){ 
     
		if ($(this).scrollTop() > 500) { 
            $('#back-to-top').fadeIn();//thực hiện lệnh điều kiện Khi lăn chuột xuống dưới 
            $("#back-to-top").css({
                "visibility": "visible",
                "opacity":"1",
                "transition": "1s",
            })

			 //Xuất hiện nút
		} else { 
            $("#back-to-top").css({
                "visibility": "hidden",
                "opacity":"0",
                "transition": "1s",
            })
			 //Ngược lại thì ẩn nút
		} 
	}); 
	$('#back-to-top').click(function(){ 
		$("html, body").animate({ scrollTop: 0 }, 600); //Animation giúp hoạt ảnh scroll ngược lên đầu trang sẽ mượt hơn
		return false; 
	}); 
});
//************Menu***************/

$(window).scroll(function(e){
    var vitri=$('body,html').scrollTop()
    
    if(vitri>=500)
    {
        $(".top-bar").css({
            "opacity":"0",
            "transition": "1s",
            "height":"0px"
            
        });
        $(".nav-menu-header").css({
            "padding": "1.5em",
            "background": "rgba(49, 18, 75, 0.8)",
            "transition": "1.5s"
            
        })
        
       
    }
    else{
        $(".top-bar").css({
            "display": "block",
             "opacity":"1",
            "transition": "1s",
            "height": "38px"
        });
        $(".nav-menu-header").css({
            "padding": "2.5rem 1rem",
             "background": "#00000040",
             "transition": "1.5s", 
              "z-index":"13"
                     })

    }
})

/*************************
Slider
**************************/

//slider//
$.global = new Object();

$.global.item = 1;
$.global.total = 0;

$(document).ready(function () {

  var WindowWidth = $(window).width();//Lấy kích thước màn hình theo chiều rộng
  var SlideCount = $('#slides li').length;// lấy số phần tử li
  console.log(SlideCount);
  var SlidesWidth = SlideCount * WindowWidth;//

  $.global.item = 0;
  $.global.total = SlideCount;//3

  $('.slide').css(
      'width', WindowWidth + 'px'
      );//class .slide with width = WindowWidth
  $('#slides').css(
      'width', SlidesWidth + 'px'
    );//id #slide with width = SlidesWidth

//   $("#slides li:nth-child(1)").addClass('alive');

  $('#left').click(function () { //click vào button left
      Slide('back');
 });
  $('#right').click(function () { //click vào button right
      Slide('forward');
    });

});

function Slide(direction) {

  if (direction == 'back') { 
      var $target = $.global.item - 1;
 }
  if (direction == 'forward') {
       var $target = $.global.item + 1; 
}

  if ($target == -1) {
       DoIt($.global.total - 1);
 }
  else if ($target == $.global.total) {
       DoIt(0); 
 }
  else {
       DoIt($target); 
    }


}

function DoIt(target) {

  var $windowwidth = $(window).width();// lấy chiều rộng màn hình 
  var $margin = $windowwidth * target; // 
  var $actualtarget = target + 1;

  $("#slides li:nth-child(" + $actualtarget + ")").addClass('alive');

  $('#slides').css('transform', 'translate3d(-' + $margin + 'px,0px,0px)');

  $.global.item = target;

  $('#count').html($.global.item + 1);

}


$('#owl_tesimonials').owlCarousel({
    loop:true,
    dots:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.Hotels .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

//counter js 

const counters = document.querySelectorAll('.counter-count');
const speed = 1000; 
var temp = 1 ; 
$(window).scroll(function(e){
    var vitri_1=$('body,html').scrollTop()
    if (vitri_1 >1000)
    {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = + counter.getAttribute('data-target');
                const count = + counter.innerText;
                const inc = target / speed;
                if (count < target) {
                    counter.innerText = count + inc;
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }
})

//-----Login-------//

$(function () {
    $('#login').click(function (e) { 
        $(".email-signup").hide();
        $("#signup-box-link").click(function(){
          $(".email-login").fadeOut(100);
          $(".email-signup").delay(100).fadeIn(100);
          $("#login-box-link").removeClass("active");
          $("#signup-box-link").addClass("active");
        });
        $("#login-box-link").click(function(){
          $(".email-login").delay(100).fadeIn(100);;
          $(".email-signup").fadeOut(100);
          $("#login-box-link").addClass("active");
          $("#signup-box-link").removeClass("active");
        });
      //xử lý class
      $('.dangnhap').addClass('noidunghienra');
      //xử lý class cho nền
      $('.lot').addClass('lothienra');
      $('body').css("overflow-y" ,"hidden");
    });
    $('.lot').click(function (e) { 
        $('.dangnhap').removeClass('noidunghienra');
        $('.lot').removeClass('lothienra');
        $('body').css("overflow-y" ,"scroll");
    });
  });
  $(function () {
    $('#Register').click(function (e) { 
        $(".email-login").hide();
        $("#signup-box-link").click(function(){
            $(".email-login").fadeOut(100);
               $(".email-signup").delay(100).fadeIn(100);
              $("#login-box-link").removeClass("active");
              $("#signup-box-link").addClass("active");
            });
        $("#login-box-link").click(function(){
             $(".email-login").delay(100).fadeIn(100);;
               $(".email-signup").fadeOut(100);
              $("#login-box-link").addClass("active");
              $("#signup-box-link").removeClass("active");
            });
        
      //xử lý class
      $('.dangnhap').addClass('noidunghienra');
      //xử lý class cho nền
      $('.lot').addClass('lothienra');
      $('body').css("overflow-y" ,"hidden");
    });
    $('.lot').click(function (e) { 
        $('.dangnhap').removeClass('noidunghienra');
        $('.lot').removeClass('lothienra');
        $('body').css("overflow-y" ,"scroll");
    });
  });
  ///--------End Login------------//

//Text-svg//

var cdtimeline = anime.timeline();
cdtimeline.add({
    targets:'.text_svg g path',
    strokeDashoffset:[anime.setDashoffset,0],
    duration:2000,
    delay:1350,
    easing:'easeOutSine',
    direction:'alternate',
    loop:true
})
















