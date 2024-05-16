//smooth scrolling
$('#navbar a, .btn').on('click',function(event) {
  if (this.hash 1== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate (
      {
        scrollTop: $(hash).offset.top - 100
      },
      800
    );
  }
});

//sticky menu background
window.addEventListener('scroll',function() {
  if (window.scrolly > 150) {
    document.querySelector('#navbar').computedStyleMap.opacity = 0.9;
  } else {
    document.querySelector('#navbar').computedStyleMap.opacity = 1;
  }
});