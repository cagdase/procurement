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

  $('.addLapModalBtn').click(function () {
    $('.addLapModal').css({ display: 'flex' })
  })
  $('.addLapModalCloseBtn').click(function () {
    $('.addLapModal').hide()
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
  
  $('.infoModalBtn').click(function () {
    $('.bidderInfoModal').css({ display: 'flex' })
  })
  $('.infoModalCloseBtn').click(function () {
    $('.bidderInfoModal').hide()
  });

  $('.dmOpenBtn').click(function () {
    $('.deleteModal').hide();
    $(this).next('.deleteModal').show()
  });
  $('.dmCloseBtn, .dmCancel').click(function () {
    $('.deleteModal').hide();
  });

  $('.inviteCompanyBtn').click(function () {
    $('.inviteCompany').css({ display: 'flex' })
  })
  $('.inviteCompanyCloseBtn').click(function () {
    $('.inviteCompany').hide()
  });

  $('.inviteCompanyWatchBtn').click(function () {
    $('.inviteCompanyWatch').css({ display: 'flex' })
  })
  $('.inviteCompanyWatchCloseBtn').click(function () {
    $('.inviteCompanyWatch').hide()
  });

  $('.companyInviteListModalBtn').click(function () {
    $('.companyInviteListModal').css({ display: 'flex' })
  })
  $('.companyInviteListModalCloseBtn').click(function () {
    $('.companyInviteListModal').hide()
  });

  $('.additionalInfoModalBtn').click(function () {
    $('.additionalInfoModal').css({ display: 'flex' })
  })
  $('.additionalInfoModalCloseBtn').click(function () {
    $('.additionalInfoModal').hide()
  });

  $('.cInfoTypeSelectDDmenuBtn').click(function () {
    $('.cInfoTypeSelectDDmenu').css({ display: 'block' })
  })
  $('.cInfoTypeSelectDDmenuCloseBtn').click(function () {
    $('.cInfoTypeSelectDDmenu').hide()
  });

  $('.additionalInfoIypeSelect').click(function() {
    if($(this).attr('value') == 'freeText') {
      $('.cInfoTypeSelected').show();
      $('.cInfoTypeSelectedInput').show();
      $('.cInfoTypeSelectedDatePicker').hide();            
      $('.cInfoTypeSelectDDmenu').hide();            
      $('.cInfoTypeDefaultText').hide();            
    } else if($(this).attr('value') == 'datepicker') {
      $('.cInfoTypeSelected').show();
      $('.cInfoTypeSelectedDatePicker').show();
      $('.cInfoTypeSelectedInput').hide();
      $('.cInfoTypeSelectDDmenu').hide();
      $('.cInfoTypeDefaultText').hide();
    } else {
      $('.cInfoTypeSelected').hide();
      $('.cInfoTypeSelectedDatePicker').hide();
      $('.cInfoTypeSelectedInput').hide();
    }
  });

  $('.bidderAdditionalInfoModalBtn').click(function () {
    $('.bidderAdditionalInfoModal').css({ display: 'flex' });
  })
  $('.bidderAdditionalInfoModalCloseBtn').click(function () {
    $('.bidderAdditionalInfoModal').hide();
  });

  $('.ownerWatchAdditionalInfoModalBtn').click(function () {
    $('.ownerWatchAdditionalInfoModal').css({ display: 'flex' });
  })
  $('.ownerWatchAdditionalInfoModalCloseBtn').click(function () {
    $('.ownerWatchAdditionalInfoModal').hide();
  });

  $('.reportFilterModalBtn').click(function () {
    $('.reportFilterModal').css({ display: 'flex' });
  })
  $('.reportFilterModalCloseBtn').click(function () {
    $('.reportFilterModal').hide();
  });

  $('.reportFilterInrpomaxModalBtn').click(function () {
    $('.reportFilterInrpomaxModal').css({ display: 'flex' });
  })
  $('.reportFilterInrpomaxModalCloseBtn').click(function () {
    $('.reportFilterInrpomaxModal').hide();
  });

  $('.customReportModalBtn').click(function () {
    $('.customReportModal').css({ display: 'flex' });
  })
  $('.customReportModalCloseBtn').click(function () {
    $('.customReportModal').hide();
  });

  $('.companyReportModalBtn').click(function () {
    $('.companyReportModal').css({ display: 'flex' })
  })
  $('.companyReportModalCloseBtn').click(function () {
    $('.companyReportModal').hide();
  });

  $('.rulesModalBtn').click(function () {
    $('.rulesModal').css({ display: 'flex' });
  })
  $('.rulesModalCloseBtn').click(function () {
    $('.rulesModal').hide();
  });

  $('.targetPriceBtn').click(function () {
    $('.comparisonTableTarget').toggleClass('targetPriceVisible');
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

  //ihale olu??turma ekran??nda, ihale tipi se??imi (english-dutch. checkbox)
  $('input[name="bidTypeChange"]').click(function () {
    if ($(this).attr('value') == 'bidTypeEnglish') {
      $('.btEnglish').addClass('open')
      $('.btDutch').removeClass('open')
    }
    if ($(this).attr('value') == 'bidTypeDutch') {
      $('.btDutch').addClass('open')
      $('.btEnglish').removeClass('open')
    }
  });

  $(".chatBtn").click(function() {
    $(".chatWrap").toggleClass("chatWrapOpen");
  });
  $(".mobileChatCloseBtn").click(function() {
    $(".chatWrap").toggleClass("chatWrapOpen");
  });

  $(".privateBidModalBtn").click(function() {
    $(".privateBidModal").css({ display: 'flex' });
  });
  $(".privateBidModalCloseBtn").click(function() {
    $(".privateBidModal").css({ display: 'none' });
  });

  $(".orderCompleteModalBtn").click(function() {
    $(".orderCompleteModal").css({ display: 'flex' });
  });
  $(".orderCompleteModalCloseBtn").click(function() {
    $(".orderCompleteModal").css({ display: 'none' });
  });

  $(".orderLogModalBtn").click(function() {
    $(".orderLogModal").css({ display: 'flex' });
  });
  $(".orderLogModalCloseBtn").click(function() {
    $(".orderLogModal").css({ display: 'none' });
  });

  $('.changeTableCols').click(function() {
    $('.tContent').toggleClass('supplier3');
    $('.tContent').toggleClass('tWinner');
  });

  $('.winners table .cellLink').click(function() {
    $(this).toggleClass('selected');
    $(".companyOrderModal").css({ display: 'flex' });
  });
  
  $(".companyOrderModalCloseBtn").click(function() {
    $(".companyOrderModal").css({ display: 'none' });
  });

  $('.winners table .groupCellLink').click(function() {
    $(this).toggleClass('selected');
    $(".groupCompanyOrderModal").css({ display: 'flex' });
  });

  $(".groupCompanyOrderModalCloseBtn").click(function() {
    $(".groupCompanyOrderModal").css({ display: 'none' });
  });

  $('.removeLineCheck').click('change', function(){
    if($(this).is(':checked')){
      $(this).next('.deleteModal').show();
    }
  });

  $('.showNoteBtn').click(function() {
    $(this).next('.note').toggleClass('noteOpen');
  });

  $(".templateCopyConfirmModalBtn").click(function() {
    $(".templateCopyConfirmModal").css({ display: 'flex' });
  });
  $(".templateCopyConfirmModalCloseBtn").click(function() {
    $(".templateCopyConfirmModal").css({ display: 'none' });
  });


  $(window).bind('resize load', function() {
    if( $(this).width() < 768 ) {
      $('.chatWrap .chatLeft li .bidder').click(function() {
        $('.chatWrap').addClass('chatSlim');
      });
      $('.chatWrap .mobileBackToChatListBtn').click(function() {
        $('.chatWrap').removeClass('chatSlim');
      });
    }
  });

  $('.chatWrap .chatLeft li').click(function() {
    $('.chatWrap .chatLeft li').removeClass('active');
    $(this).addClass('active');
  });

  $(".selectedBidderListModalBtn").click(function() {
    $(".selectedBidderListModal").css({ display: 'flex' });
  });
  $(".selectedBidderListModalCloseBtn").click(function() {
    $(".selectedBidderListModal").css({ display: 'none' });
  });

  $(".whoBiddersModalBtn").click(function() {
    $(".whoBiddersModal").css({ display: 'flex' });
  });
  $(".whoBiddersModalCloseBtn").click(function() {
    $(".whoBiddersModal").css({ display: 'none' });
  });

  $('.participantListBtn').click(function() {
    $(this).parent().next().next('.participantListWrap').toggle();
  });

  $(".participantStatusModalBtn").click(function() {
    $(".participantStatusModal").css({ display: 'flex' });
  });
  $(".participantStatusModalCloseBtn").click(function() {
    $(".participantStatusModal").css({ display: 'none' });
  });

  $('.participantStatusContent .statusReject').click(function() {
    $('.statusRejectMessage').toggleClass('show');
  });
  $('.participantStatusContent .statusConfirm').click(function() {
    $('.statusRejectMessage').removeClass('show');
  });

  $(".participantStatusBtn").click(function() {
    $(".participantStatusBtn").removeClass('active');
    $(this).addClass('active');
  });

})
