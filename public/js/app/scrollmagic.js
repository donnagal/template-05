  //ScrollMagic
  $(document).ready(function(){

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // loop through each .timeline element
  $('.nav-dark').each(function(){

    // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.1,
      reverse: true,
      duration: '90%'
    })
    .setClassToggle('#nav', 'dark') 
    // .addIndicators({
    //   name: 'scene',
    //   colorTrigger: 'yellow',
    //   colorStart: '#75C695',
    //   colorEnd: 'pink'
    // }) 
    .addTo(controller);

    });
  });

