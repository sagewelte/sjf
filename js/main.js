anime({
    targets: '#monogram path',
    easing: 'easeInOutCubic',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 2200,
    delay: function(el, i) { return i * 250 },
    direction: 'normal',
    loop: false
});

anime({
    targets: '#monogram path',
    easing: 'easeInOutCubic',
    duration: 700,
    delay: 2200,
    fill: '#210200',
    fillOpacity: '1',
    loop: false,
})

anime({
    targets: '#links',
    easing: 'easeInOutCubic',
    duration: 900,
    delay: 2000,
    opacity: '100%'
})