//#region data-bs-toggle="popover" 提示窗換行，啟用工具提示
document.addEventListener('DOMContentLoaded', function () {
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl);
	});
});
//#endregion


//#region popover 顯示內容隨著 checkbox 狀態變化
document.addEventListener('DOMContentLoaded', function () {
    // 定義 class 與對應文字的對照表
    const config = {
		'.status-popover-input': { on: '開啟', off: '關閉' },
        '.status-popover-input1': { on: '上架開啟', off: '上架關閉' },
        '.status-popover-input2': { on: '啟用開啟', off: '啟用關閉' },
		'.status-popover-input3': { on: '編輯開啟', off: '唯讀' },
		'.status-popover-input4': { on: '鎖定', off: '未鎖定' },
		'.status-popover-input5': { on: '必填', off: '非必填' },
		'.status-popover-input6': { on: '顯示', off: '不顯示' },
    };

    Object.keys(config).forEach(selector => {
        const els = document.querySelectorAll(selector);
        const text = config[selector];

        els.forEach(el => {
            const popover = new bootstrap.Popover(el);
            el.addEventListener('change', function() {
                const content = this.checked ? text.on : text.off;
                this.setAttribute('data-bs-content', content);
                popover.setContent({ '.popover-body': content });
                this.blur();
            });
        });
    });
});
//#endregion

//#region 唯讀/編輯模式切換
$(document).ready(function() {
	// 1. 切換 編輯/唯讀 模式
	$('.status-popover-input3').on('change', function() {
		const isChecked = $(this).is(':checked');
		const $container = $('.form_table');
		const $savebtn = $('.btn_box');

		if (isChecked) {
			$container.find('.onlyread_text').addClass('d-none');
			$container.find('input[type="text"], textarea').removeClass('d-none');
			$container.find('input[type="checkbox"], input[type="radio"]').prop('disabled', false);
			$savebtn.find('button').prop('disabled', false);
		} else {
			$container.find('.onlyread_text').removeClass('d-none');
			$container.find('input[type="text"], textarea').addClass('d-none');
			$container.find('input[type="checkbox"], input[type="radio"]').prop('disabled', true);
			$savebtn.find('button').prop('disabled', true);
		}
	});

	// 2. 同步資料：當 input 或 textarea 內容改變時，更新對應的 .onlyread_text
	$('.form_table').on('input', 'input[type="text"], textarea', function() {
		const value = $(this).val();
		// 尋找同層級的 .onlyread_text 並更新內容
		$(this).siblings('.onlyread_text').text(value);
	});
});
//#endregion