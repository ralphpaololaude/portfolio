fFadeInElements($('.hero'))

function fFadeInElements($container) {
  var delayStep = 150
  let step = 0;
  
  $container.find('*').each(function() {
    $(this)
      .delay(step * delayStep)
      .animate({ opacity: 1 }, 500);
    step++;
  });
}