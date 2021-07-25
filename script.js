// gsap.registerPlugin(ScrollTrigger);

// const myMedia = window.matchMedia('(min-width: 710px)');
//
// function changeMedia(x) {
//   if (x.matches) {
//     gsap.to(".flying_axie", {
//       scrollTrigger: {
//         trigger: ".box1",
//         start: "top 13%",
//         end: "bottom bottom",
//         scrub: 1
//       },
//       x: -900,
//       y: -750,
//       scale: 0.5
//     })
//   } else {
//     gsap.to(".flying_axie", {
//       scrollTrigger: {
//         trigger: ".box1",
//         start: "160% 80%",
//         end: "250% bottom",
//         scrub: 1
//       },
//       x: -800,
//       y: -750,
//       scale: 0.5
//     });
//   }
// }
//
//
// myMedia.addListener(changeMedia);
//
// changeMedia(myMedia);

let carlos = document.getElementById('carlos');

carlos.addEventListener('mouseover', () => {
  carlos.setAttribute('src', './img/compLOS2.gif');
})

carlos.addEventListener('mouseout', () => {
  carlos.setAttribute('src', './img/carlos.jpg');
})
