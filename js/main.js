//#region include共用頁面
$(function ($) {
	$.include = function (url) {
		$.ajax({
			url: url,
			async: false,
			success: function (result) {
				document.write(result);
			}
		});
	};
}(jQuery));
//#endregion


//#region 單選切換顯示內容
function toggleChoice(inputName) {
	var array = $('input[name="' + inputName + '"]');

	for (var i = 0; i < array.length; i++) {

		$("." + $(array[i]).attr("data-toggle")).hide();
	}
	var datatoggle = $('input[name="' + inputName + '"]:checked').attr("data-toggle");
	switch ($('input[name="' + inputName + '"]:checked').attr("data-toggle")) {
		case datatoggle:
			$('.' + datatoggle).show();
			break;
	}
}
//#endregion


//#region toggle 進階搜尋
// $(function () {
// 	$('a[data-kt-toggle-target=".page_search"]').click(function(e) {
// 		$('.page_adv_search').removeAttr("data-kt-custom-toggle");
//     });

//     $('a[data-kt-toggle-target=".page_adv_search"]').click(function(e) {
// 		$('.page_search').removeAttr("data-kt-custom-toggle");
//     });
// });
//#endregion


//#region multiple-select 複選下拉
// $(function () {
// 	$('.multiple-select_1').multipleSelect({
// 		minimumCountSelected: 10000,
// 		filterByDataLength: 20,//超過數量時，出現搜尋欄位
// 	})
// })
//#endregion


//#region 日期清除按鈕
document.querySelectorAll('.btn_clear').forEach(button => {
	button.addEventListener('click', function () {
	  	const parent = this.closest('.date-range'); // 找到外層容器
		const inputs = parent.querySelectorAll('input[type="date"]');
	  	inputs.forEach(input => input.value = ''); // 清空值
	});
});
//#endregion

//#region顯示密碼
$(document).ready(function() {
	$(".password_eye").on('click', function(event) {
		event.preventDefault();
		var that = $(this);
		if(that.parent().find('input').attr("type") == "text"){
			that.parent().find('input').attr('type', 'password');
			that.parent().find('i').addClass( "ki-eye-slash" );
			that.parent().find('i').removeClass( "ki-eye" );
		}else if(that.parent().find('input').attr("type") == "password"){
			that.parent().find('input').attr('type', 'text');
			that.parent().find('i').removeClass( "ki-eye-slash" );
			that.parent().find('i').addClass( "ki-eye" );
		}
	});
});
//#endregion

//#region 進階設定btn
// $(function () {
// 	$(".adv_btn").on("click", function () {
// 		$(".adv_con").slideToggle();
// 	});
// });
$(function () {
	$("[class$=_btn]").on("click", function () {
	  const base = this.className.match(/(\w+)_btn/)[1];
	  $(`.${base}_con`).slideToggle();
	});
  });
//#endregion

//#region search btn
// $(function () {
// 	$(".search_btn").on("click", function () {
// 		$(".page_search").slideToggle();
// 	});
// });
//#endregion

//#region 密碼禁止貼上
document.querySelectorAll('.input_no_paste').forEach((input) => {
    input.addEventListener('paste', (e) => {
      e.preventDefault();
      alert('此欄位禁止貼上密碼');
    });
  });
//#endregion

