/**
 * chl - Bootstrap 3 Based Admin Toolkit
 * @version v0.1.1
 * @author onokumus
 */
'use strict';

var Pluggin = {
 
  datatables: function datatables(element) {
    if ($.fn.DataTable) {
      $(element).DataTable();
    } else {
      throw new Error('First install datatable plugin! https://datatables.net/');
    }
  },


  metismenu: function metismenu(element) {
    if ($.fn.metisMenu) {
      $(element).metisMenu();
    } else {
      throw new Error('First install metisMenu plugin! https://github.com/onokumus/metisMenu');
    }
  },

  navmega: function navmega() {
    $('.nav-mega > li > a').on('click', function (event) {
      event.preventDefault();
      $(this).siblings('.nav-full-item').collapse('toggle');
      $(this).parent('li').siblings('li').children('.nav-full-item').collapse('hide');
    });
  },

  totop: function totop(element) {

    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $(element).fadeIn();
      } else {
        $(element).fadeOut();
      }
    });

    $(element).on('click', function (event) {
      var _body = $('body');
      event.preventDefault();
      _body.hasClass("page-fixed") ? _body.hasClass("main-fixed") ? $(".main-content").animate({
        scrollTop: 0
      }, 600) : $(".app-main").animate({
        scrollTop: 0
      }, 600) : $("body,html").animate({
        scrollTop: 0
      }, 600);
    });
  },

  perfectscrollbar: function perfectscrollbar(element) {
    if ($.fn.perfectScrollbar) {
      $(element).addClass('ps');
      $(element).perfectScrollbar();
      $(element).perfectScrollbar('update');
    }
  },

  insignia: function (_insignia) {
    function insignia(_x2) {
      return _insignia.apply(this, arguments);
    }

    insignia.toString = function () {
      return _insignia.toString();
    };

    return insignia;
  }(function (element) {
    if (window.insignia !== undefined) {
      insignia(element, { deletion: true });
    }
  }),

  todo: function todo(element) {
    $(element).find('.todo-link').on('click', function (event) {
      event.preventDefault();
      $(this).find('.fa').toggleClass('fa-square-o fa-check-square');
      $(this).closest('.todo-item').toggleClass('is-done');
    });
  }
};

$(document).on("chl.plugin", function () {
  if ($('.counterup').length) {
    Pluggin.counterup({
      delay: 10,
      time: 1000
    });
  }

  if ($('.ps').length) {
    Pluggin.perfectscrollbar($('.ps'));
  }

  if ($('.inview').length) {
    Pluggin.inview();
  }
  if ($('.dragula').length) {
    Pluggin.dragula();
  }
  if ($('.nav-mega').length) {
    $('.nav-mega .nav-full-item').addClass('collapse');
    Pluggin.navmega();
  }
  $("[data-plugin]").each(function () {
    Pluggin[$(this).attr("data-plugin")](this);
  });
}).trigger("chl.plugin");
 // $(document).ready(function(){
 //            $('.dataTables-dp').DataTable({
 //                pageLength: 10,
 //                responsive: true,
 //                "bPaginate": true,
 //        "bFilter": false,
 //        "bInfo": false,
 //                dom: '<"html5buttons"B>lTfgitp',
 //                buttons: [
 //                    { extend: 'copy'},
 //                    {extend: 'csv'},
 //                    {extend: 'excel', title: 'ExampleFile'},
 //                    {extend: 'pdf', title: 'ExampleFile'},

 //                    {extend: 'print',
 //                     customize: function (win){
 //                            $(win.document.body).addClass('white-bg');
 //                            $(win.document.body).css('font-size', '10px');

 //                            $(win.document.body).find('table')
 //                                    .addClass('compact')
 //                                    .css('font-size', 'inherit');
 //                    }
 //                    }
 //                ]

 //            });

 //        });
