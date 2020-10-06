// document.onmousemove=function(){
// var w=event.clientX*100/window.innerWidth+"%";
// var h=event.clientY*100/window.innerHeight+"%";


// function createShape(event){
//     var mouseX = event.clientX;
//     var mouseY = event.clientY;
//     $('body').append('<div class="red-box last"></div>');
//     $('.last').css('left', mouseX + 'px');
//     $('.last').css('top', mouseY + 'px');
//     $('.last').removeClass('last');
// }




// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }


// function showPage(){
//   document.getElementById("load").style.display = "none";
//   document.getElementsByClassName("everything").style.display = "block";
// }

var ball=document.getElementsByClassName("ball");

document.onmousemove=function(){
var w=event.clientX*100/window.innerWidth+"%";
var h=event.clientY*110/window.innerHeight+"%";

for(var i=0;i<2;i++){
    ball[i].style.left=h;
    ball[i].style.top=w;
    ball[i].style.transform="translate(-"+w+",-"+h+")";
  }

 }




window.onload=function(){

      $(".load").fadeOut("slow");


      $(".everything").css("display","block");
    //     var cursor=document.getElementById("cursor");
    // document.addEventListener('mousemove',function(e){
    //     var x=e.clientX;
    //     var y= e.clientY;
    //     cursor.style.left=x+"px";
    //     cursor.style.top=y+"px";
    // });

    // $('body').mousemove(createShape);
    
    // const swup= new Swup();
// var div = document.createElement('div');
// div.className = "web1";
$( "#but1" ).hover(
  function() {
    $('.picture').prepend('<img class="pic1" src="web1.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic1" ).last().remove();
  }
);
$( "#but2" ).hover(
  function() {
    $('.picture').prepend('<img class="pic3" src="web3.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic3" ).last().remove();
  }
);
$( "#but3" ).hover(
  function() {
    $('.picture').prepend('<img class="pic4" src="web2.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic4" ).last().remove();
  }
);
$( "#but4" ).hover(
  function() {
    $('.picture').prepend('<img class="pic2" src="web7.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic2" ).last().remove();
  }
);
$( "#but5" ).hover(
  function() {
    $('.picture').prepend('<img class="pic4" src="web5.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic4" ).last().remove();
  }
);
$( "#but6" ).hover(
  function() {
    $('.picture').prepend('<img class="pic1" src="web6.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic1" ).last().remove();
  }
);
$( "#but24" ).hover(
  function() {
    $('.picture').prepend('<img class="pic2" src="web0.png">')
  }, function() {
    $( '.picture' ).find( ".pic2" ).last().remove();
  }
);

$( "#but7" ).hover(
  function() {
    $('.picture').prepend('<img class="pic1" src="f1.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic1" ).last().remove();
  }
);
$( "#but8" ).hover(
  function() {
    $('.picture').prepend('<img class="pic6" src="calen.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic6" ).last().remove();
  }
);

$( "#but25" ).hover(
  function() {
    $('.picture').prepend('<img class="pic5" src="gd.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic5" ).last().remove();
  }
);
$( "#but9" ).hover(
  function() {
    $('.picture').prepend('<img class="pic1" src="ani2.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic1" ).last().remove();
  }
);
$( "#but10" ).hover(
  function() {
    $('.picture').prepend('<img class="pic4" src="ani4.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic4" ).last().remove();
  }
);
$( "#but11" ).hover(
  function() {
    $('.picture').prepend('<img class="pic2" src="ani1.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic2" ).last().remove();
  }
);

$( "#but28" ).hover(
  function() {
    $('.picture').prepend('<img class="pic6" src="ani10.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic6" ).last().remove();
  }
);

$( "#but12" ).hover(
  function() {
    $('.picture').prepend('<img class="pic6" src="ani5.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic6" ).last().remove();
  }
);
$( "#but13" ).hover(
  function() {
    $('.picture').prepend('<img class="pic5" src="ani6.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic5" ).last().remove();
  }
);
$( "#but14" ).hover(
  function() {
    $('.picture').prepend('<img class="pic5" src="ani7.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic5" ).last().remove();
  }
);
$( "#but15" ).hover(
  function() {
    $('.picture').prepend('<img class="pic6" src="ani8.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic6" ).last().remove();
  }
);
$( "#but16" ).hover(
  function() {
    $('.picture').prepend('<img class="pic5" src="ani9.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic5" ).last().remove();
  }
);
$( "#but17" ).hover(
  function() {
    $('.picture').prepend('<img class="pic4" src="ani3.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic4" ).last().remove();
  }
);
$( "#but18" ).hover(
  function() {
    $('.picture').prepend('<img class="pic1" src="ilust1.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic1" ).last().remove();
  }
);
$( "#but19" ).hover(
  function() {
    $('.picture').prepend('<img class="pic3" src="ilust3.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic3" ).last().remove();
  }
);
$( "#but20" ).hover(
  function() {
    $('.picture').prepend('<img class="pic2" src="ilust6.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic2" ).last().remove();
  }
);
$( "#but21" ).hover(
  function() {
    $('.picture').prepend('<img class="pic4" src="ilust5.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic4" ).last().remove();
  }
);
$( "#but22" ).hover(
  function() {
    $('.picture').prepend('<img class="pic2" src="gn1.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic2" ).last().remove();
  }
);
$( "#but23" ).hover(
  function() {
    $('.picture').prepend('<img class="pic4" src="ilust4.jpg">')
  }, function() {
    $( '.picture' ).find( ".pic4" ).last().remove();
  }
);
$( "#but29" ).hover(
  function() {
    $('.picture').prepend('<img class="pic4" src="illust8.JPG">')
  }, function() {
    $( '.picture' ).find( ".pic4" ).last().remove();
  }
);

$( "#but26" ).hover(
  function() {
    $('.picture').prepend('<img class="pic2" src="chain1.png">')
  }, function() {
    $( '.picture' ).find( ".pic2" ).last().remove();
  }
);
$( "#but27" ).hover(
  function() {
    $('.picture').prepend('<img class="pic6" src="case.png">')
  }, function() {
    $( '.picture' ).find( ".pic6" ).last().remove();
  }
);




    $('.close').click(function(){
        $('.modal iframe').each(function(){
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });
        $("video").each(function(){
    $(this).get(0).pause();
});

    });



	var modalBtns=document.querySelectorAll("button");

	modalBtns.forEach(function(btn){
		btn.onclick=function(){
			var modal=btn.getAttribute('data-modal');

			document.getElementById(modal).style.display='block';
		};

	});

	var closeBtns=document.querySelectorAll(".close");

	closeBtns.forEach(function(btn){
		btn.onclick= function(){
			var modal=(btn.closest(".modal").style.display="none");
		};
	});

	window.onclick=function(e){
		if (e.target.className === "modal"){
			e.target,style.display = "none";
		}
	};


	};

	$(document).ready(
	function(){ animateDiv();}
	

	);

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 180;
    var w = $(window).width() - 180;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.05;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

};

function openNav() {
  document.getElementById("menu").style.display = "block";
}

function closeNav() {
  document.getElementById("menu").style.display = "none";
}



        document.addEventListener('mousemove', e => {
            document.querySelector('.cursor').setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

          document.addEventListener('click', () => {
            document.querySelector('.cursor').classList.add("expand");

            setTimeout(() => {
                document.querySelector('.cursor').classList.remove("expand");
            }, 300)
        })

   

