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

// JavaScript 코드
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
  



  $(document).ready(function() {
    $('.middle_main').addClass('hidden');
    $(window).on('scroll', function() {
      $('.middle_main').each(function() {
        var position = $(this).offset().top;
        var windowHeight = $(window).height();
        var windowTop = $(window).scrollTop();
        if (position < windowTop + windowHeight - 100) {
          $(this).removeClass('hidden').addClass('animate');
        } else {
          $(this).removeClass('animate').addClass('hidden');
        }
      });
    });
  });

  
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

