$( document ).ready(function () {
  $(".button-collapse").sideNav();
  $('.slider').slider({height: 300, transition: 500, interval: 2500, indicators: false});
  $('.carousel').carousel();

  var storiesLinks = {'KIDS' : ['Wellington School', 'Startup Curriculum', "Child's Play"],
                      'OLDER ATHLETES' : ['Kupuna', 'Older, Wiser, Fitter', 'Constance'],
                      'ADAPTIVE ATHLETES' : ['Working Wounded Games', 'Blind Athlete: Might as Well Jump with Bettina Dolinsek', 'Kendra Can'],
                      'TRANSFORMATIONS' : ['I Am Ivan', 'Meet Shari Keener: Changing the Pattern', 'Tim Baldry Story']}

  $(".carousel").on("swipeleft swiperight tap click",function() {
    setTimeout(changeTitle, 700)
  });

  function changeTitle() {
    $(".carousel-item").each(function () {
      // console.log('super!')
      console.log($(this).css("z-index"))
      if( $(this).css("z-index") === '0' ) {
        console.log('hit!')
        var title = $(this).attr('id');
        console.log(title)
        $("#stories-title").text(title)

        storiesLinks[title].forEach(function(story, i) {
          $("#story-" + i).text(story)
        })
      }
    })
  }

})
