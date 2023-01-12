// Modal
$('#reg_btn, #login_btn').on('click', () => {
  $('body,#navbar').css({
    overflow: 'auto',
    'padding-right': 0
  })
})

// Section03 生物種族 -----------------------------------------------------
$('#race a').on('click', function () {
  $('#race a').removeClass('active')
  $(this).addClass('active')
})

// Swiper ----------------------------------------------------------------
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  spaceBetween: 15,
  centeredSlides: true,
  autoplay: {
    delay: 5000
  },

  slidesPerVeiw: 'auto',
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },

  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    920: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

// GSAP ----------------------------------------------------------------------------
// 註冊 plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText)

// 滾動軸 ScrollTrigger -------------------------------------------------------------

// 導覽列 active 位置
$('.main-link').each(function (index, link) {
  let idName = $(link).attr('href') // 抓連結 href 的值
  // console.log(href)
  gsap.to(link, {
    scrollTrigger: {
      trigger: `${idName}`,
      start: 'top center',
      end: 'bottom center',
      toggleClass: {
        targets: link,
        className: 'active'
      },
      // markers: true
    }
  })
})

// 視差效果 --------------------------------------------------------------------------
// 星空背景
gsap.to('body', {
  scrollTrigger: {
    trigger: 'body',
    start: 'top 0',
    end: 'bottom 0',
    scrub: 5,
    // markers: true
  },
  backgroundPosition: '50% 100%',
  ease: 'none'
})