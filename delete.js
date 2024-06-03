
let count = 0;
const maxCount = 10 	;

const intervalId = setInterval(function() {
    // 获取所有要删除的元素
    const elements = document.getElementsByClassName('Popover ContentItem-action');
    
    // 如果没有元素了，尝试加载更多
    if (elements.length === 0) {
        // 假设页面有一个按钮类名为 'PaginationButton-next ' 用于加载更多内容
        const loadMoreButton = document.getElementsByClassName('PaginationButton-next ')[0];
        if (loadMoreButton) {
            loadMoreButton.click();
            console.log('加载下一页');
        } else {
            console.log('没有更多内容可加载');
            clearInterval(intervalId); // 如果没有更多内容可加载，停止定时器
            return;
        }
    } else {
        // 继续删除元素
        elements[1].childNodes[0].click();

        // 点击删除按钮
        var menu = document.getElementsByClassName('AnswerItem-selfMenu')[0];
        var item = menu.childNodes;
        item[item.length - 1].click();

        // 确认删除
        setTimeout(function() {
            document.getElementsByClassName('ModalButtonGroup')[0].childNodes[0].click();
        }, 1000);
    }

    count++;
    if (count >= maxCount) {
        clearInterval(intervalId);
    }
}, 2000);
