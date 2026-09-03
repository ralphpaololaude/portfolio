fFadeInElements($('.hero'))

function fFadeInElements($container) {
  var delayStep = 100
  let step = 0;
  
  $container.find('*').each(function() {
    $(this)
      .delay(step * delayStep)
      .animate({ opacity: 1 }, 400);
    step++;
  });
}