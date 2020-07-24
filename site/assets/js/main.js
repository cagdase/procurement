$(document).ready(function () {
  $('a[href="#"]').click(function (e) { e.preventDefault ? e.preventDefault() : e.returnValue = false; });

  var date = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
  var time = new Date().toString().slice(16, 21);

  $('#currentDate').append(date);
  $('#currentTime').append(time);

  $('.addNewGroup').click(function () {
    $('.addGroupWrap ul').removeClass('openGroupList')
    $(this).next('.addGroupWrap ul').toggleClass('openGroupList')
  });

  $('.addNewGroupCloseBtn').click(function () {
    $('.addGroupWrap ul').removeClass('openGroupList')
  });

  $('.hddMbtn').click(function () {
    $('.hddMList').toggleClass('smOpen')
  });

  $('.projectInfoBtn').click(function () {
    $('.projectInfoModal').css({ display: 'flex' })
  })
  $('.projectInfoCloseModal').click(function () {
    $('.projectInfoModal').hide()
  });

  $('.ccNotesBtn').click(function () {
    $('.ccNotesModal').css({ display: 'flex' })
  })
  $('.ccNotesCloseModal').click(function () {
    $('.ccNotesModal').hide()
  });

  $('.ccDocumentsBtn').click(function () {
    $('.ccDocumentsModal').css({ display: 'flex' })
  })
  $('.ccDocumentsCloseModal').click(function () {
    $('.ccDocumentsModal').hide()
  });

  $('.confirmBidBtn').click(function () {
    $('.confirmBidModal').css({ display: 'flex' })
  })
  $('.confirmBidCloseModal').click(function () {
    $('.confirmBidModal').hide()
  });

  $('.allBidsModalBtn').click(function () {
    $('.allBidsModal').css({ display: 'flex' })
  })
  $('.allBidsCloseModal').click(function () {
    $('.allBidsModal').hide()
  });

  $('.hddMbtn').click(function () {
    $('.navIcon').toggleClass('open')
  });

  $('.mobileMenuBtn').click(function () {
    $('.navIcon').toggleClass('open')
    $('.mobileMenuWrap').toggle();
  });

  $(window).on('resize', function(){
    if( $(window).width() > 768 ) {
      $('.mobileMenuWrap').hide();
      $('.navIcon').removeClass('open')
    }
  });

  $('.sideBarToggle').click(function () {
    $('.sideMenu').toggleClass('smallMenu')
    $('.rightPanel').toggleClass('bigRightPanel')
  });

  $('.nCloseBtn').click(function () {
    $('.notificationWrap').hide()
  });

  $('.toggleBtn').click(function () {
    $(this).toggleClass('open');
  });

  $('.allBidsToggle').click(function () {
    $('.allBids ul').toggle();
    $('.allBids .rpCardSubHead').toggleClass('margin');
  });
  
  $('.tcoBtn').click(function () {
    $('.tcoModal').css({ display: 'flex' })
  })
  $('.tcoBtnCloseModal').click(function () {
    $('.tcoModal').hide()
  });

  $('.dmOpenBtn').click(function () {
    $('.deleteModal').hide();
    $(this).next('.deleteModal').show()
  });
  $('.dmCloseBtn, .dmCancel').click(function () {
    $('.deleteModal').hide();
  });

  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  function backToTopShow() {
    if ($(window).scrollTop() > 50) {
      $("#backToTop").show();
    } else {
      $("#backToTop").hide();
    }
  }
  backToTopShow();
  $(window).scroll(function () {
    backToTopShow();
  });

  //ihale oluşturma ekranında, ihale tipi seçimi (english-dutch. checkbox)
  $('input[name="bidTypeChange"]').click(function () {
    if ($(this).attr('value') == 'bidTypeEnglish') {
      $('.btEnglish').addClass('open')
      $('.btDutch').removeClass('open')
    }
    if ($(this).attr('value') == 'bidTypeDutch') {
      $('.btDutch').addClass('open')
      $('.btEnglish').removeClass('open')
    }
  })
})


