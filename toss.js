// $.each(data.items,function(){
//     $('.move_icon').animate({
//         top:450,
//         // left:900
//     },function(){
//         $('.move_icon').animate({
//             top:450,
//             // left:1000
//         });
//     });
// });


// 움직이는 화살표
$(document).ready(function() {
    function moveImage() {
      $(".move_icon").animate({ top: "+=20" }, 900, function() {
        // 애니메이션이 완료되면 이미지 위치를 다시 초기화합니다.
        $(this).css("top", "300px");
        // 이미지를 다시 이동합니다.
        moveImage();
      });
    }
    // 이미지를 이동합니다.
    moveImage();
  });
  
  // 
  document.addEventListener('DOMContentLoaded', () => {

    const parent = document.querySelector('.middle_main');
    const child = document.querySelector('.phone2');
    
    parent.style.height = `${child.offsetHeight}px`;
    console.log(child.offsetHeight);
  });

// 실행은 되는데 왜 있는지 모르겠음
  // $(document).ready(function() {
  //   $('.middle_main').addClass('hidden');
  //   $(window).on('scroll', function() {
  //     $('.middle_main').each(function() {
  //       var position = $(this).offset().top;
  //       var windowHeight = $(window).height();
  //       var windowTop = $(window).scrollTop();
  //       if (position < windowTop + windowHeight - 100) {
  //         $(this).removeClass('hidden').addClass('animate');
  //       } else {
  //         $(this).removeClass('animate').addClass('hidden');
  //       }
  //     });
  //   });
  // });

  
  window.addEventListener('scroll', () => {
      const image = document.querySelector('.finance_img');
      const text = document.querySelector('.finance_title');
        const section = document.querySelector('.finance');
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const ratio = 1 - rect.top / windowHeight;
        const clampedRatio = Math.min(Math.max(ratio, 0), 1);
        const width = 70 + clampedRatio * 30;
        const scale = 70 + clampedRatio * 50;
        image.style.width = `${width}%`;
        text.style.scale = `${scale}%`;
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // fade-out도 하고 싶으면 유지
        }
      });
    }, {
      threshold: 0.3, // 30% 보이면 실행
    });
    
    const tossImg = document.querySelector('.toss_img1');
    observer.observe(tossImg);
  });

  window.addEventListener('scroll', () => {
    const target = document.querySelector('.insurance_contents1');
    const rect = target.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    // 요소가 화면에 들어오면
    if (rect.top < windowHeight && rect.bottom > 0) {
      const ratio = 1 - rect.top / windowHeight;
      const clampedRatio = Math.min(Math.max(ratio, 0), 1);
  
      target.style.opacity = clampedRatio;
      target.style.transform = `translateY(${250 * (1 - clampedRatio)}px)`;
    }
  });