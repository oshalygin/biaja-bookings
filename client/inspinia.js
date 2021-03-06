import $ from 'jquery'; //eslint-disable-line id-length
$(document).ready(() => {
  function SmoothlyMenu() {
    if (
      !$('body').hasClass('mini-navbar') ||
      $('body').hasClass('body-small')
    ) {
      // Hide menu in order to smoothly turn on when maximize menu
      $('#side-menu').hide();
      // For smoothly turn on menu
      setTimeout(() => {
        $('#side-menu').fadeIn(400);
      }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
      $('#side-menu').hide();
      setTimeout(() => {
        $('#side-menu').fadeIn(400);
      }, 100);
    } else {
      // Remove all inline style from jquery fadeIn function to reset menu state
      $('#side-menu').removeAttr('style');
    }
  }

  // Dragable panels
  //eslint-disable-next-line no-unused-vars
  function WinMove() {
    const element = '[class*=col]';
    const handle = '.ibox-title';
    const connect = '[class*=col]';
    $(element)
      .sortable({
        handle,
        connectWith: connect,
        tolerance: 'pointer',
        forcePlaceholderSize: true,
        opacity: 0.8,
      })
      .disableSelection();
  }

  // Add body-small class if window less than 768px
  if ($(this).width() < 769) {
    $('body').addClass('body-small');
  } else {
    $('body').removeClass('body-small');
  }

  // MetsiMenu
  $('#side-menu').metisMenu();

  // Collapse ibox function
  $('.collapse-link').on('click', () => {
    const ibox = $(this).closest('div.ibox');
    const button = $(this).find('i');
    const content = ibox.find('div.ibox-content');
    content.slideToggle(200);
    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    ibox.toggleClass('').toggleClass('border-bottom');
    setTimeout(() => {
      ibox.resize();
      ibox.find('[id^=map-]').resize();
    }, 50);
  });

  // Close ibox function
  $('.close-link').on('click', () => {
    const content = $(this).closest('div.ibox');
    content.remove();
  });

  // Fullscreen ibox function
  $('.fullscreen-link').on('click', () => {
    const ibox = $(this).closest('div.ibox');
    const button = $(this).find('i');
    $('body').toggleClass('fullscreen-ibox-mode');
    button.toggleClass('fa-expand').toggleClass('fa-compress');
    ibox.toggleClass('fullscreen');
    setTimeout(() => {
      $(window).trigger('resize');
    }, 100);
  });

  // Close menu in canvas mode
  $('.close-canvas-menu').on('click', () => {
    $('body').toggleClass('mini-navbar');
    SmoothlyMenu();
  });

  // $('body.canvas-menu .sidebar-collapse')

  // Open close right sidebar
  $('.right-sidebar-toggle').on('click', () => {
    $('#right-sidebar').toggleClass('sidebar-open');
  });

  // Open close small chat
  $('.open-small-chat').on('click', () => {
    $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
    $('.small-chat-box').toggleClass('active');
  });

  // Small todo handler
  $('.check-link').on('click', () => {
    const button = $(this).find('i');
    const label = $(this).next('span');
    button.toggleClass('fa-check-square').toggleClass('fa-square-o');
    label.toggleClass('todo-completed');
    return false;
  });

  // Minimalize menu
  $('.navbar-minimalize').on('click', () => {
    $('body').toggleClass('mini-navbar');
    SmoothlyMenu();
  });

  // Tooltips demo
  $('.tooltip-demo').tooltip({
    selector: '[data-toggle=tooltip]',
    container: 'body',
  });

  // Full height of sidebar
  function fixHeight() {
    const heightWithoutNavbar = $('body > #wrapper').height() - 61;
    $('.sidebard-panel').css('min-height', `${heightWithoutNavbar}px`);

    const navbarHeigh = $('nav.navbar-default').height();
    const wrapperHeigh = $('#page-wrapper').height();

    if (navbarHeigh > wrapperHeigh) {
      $('#page-wrapper').css('min-height', `${navbarHeigh}px`);
    }

    if (navbarHeigh < wrapperHeigh) {
      $('#page-wrapper').css('min-height', `${$(window).height()}px`);
    }

    if ($('body').hasClass('fixed-nav')) {
      if (navbarHeigh > wrapperHeigh) {
        $('#page-wrapper').css('min-height', `${navbarHeigh - 60}px`);
      } else {
        $('#page-wrapper').css('min-height', `${$(window).height() - 60}px`);
      }
    }
  }

  fixHeight();

  // Move right sidebar top after scroll
  $(window).scroll(() => {
    if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
      $('#right-sidebar').addClass('sidebar-top');
    } else {
      $('#right-sidebar').removeClass('sidebar-top');
    }
  });

  $(window).bind('load resize scroll', () => {
    if (!$('body').hasClass('body-small')) {
      fixHeight();
    }
  });

  $('[data-toggle=popover]').popover();
});

// Minimalize menu when screen is less than 768px
$(window).bind('resize', () => {
  if ($(this).width() < 769) {
    $('body').addClass('body-small');
  } else {
    $('body').removeClass('body-small');
  }
});

// Local Storage functions
// Set proper body class and plugins based on user configuration
$(document).ready(() => {
  // check if browser support HTML5 local storage
  function localStorageSupport() {
    return 'localStorage' in window && window.localStorage !== null;
  }

  if (localStorageSupport()) {
    const collapse = localStorage.getItem('collapse_menu');
    const fixednavbar = localStorage.getItem('fixednavbar');
    const boxedlayout = localStorage.getItem('boxedlayout');
    const fixedfooter = localStorage.getItem('fixedfooter');

    const body = $('body');

    //eslint-disable-next-line eqeqeq
    if (collapse == 'on') {
      if (body.hasClass('fixed-sidebar') && !body.hasClass('body-small')) {
        body.addClass('mini-navbar');
      } else if (!body.hasClass('body-small')) {
        body.addClass('mini-navbar');
      }
    }
    //eslint-disable-next-line eqeqeq
    if (fixednavbar == 'on') {
      $('.navbar-static-top')
        .removeClass('navbar-static-top')
        .addClass('navbar-fixed-top');

      body.addClass('fixed-nav');
    }

    //eslint-disable-next-line eqeqeq
    if (boxedlayout == 'on') {
      body.addClass('boxed-layout');
    }

    //eslint-disable-next-line eqeqeq
    if (fixedfooter == 'on') {
      $('.footer').addClass('fixed');
    }
  }
});
