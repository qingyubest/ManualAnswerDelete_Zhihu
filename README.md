# ManualAnswerDelete_Zhihu
manual delete Zhihu answers
批量删除知乎的回答。手工方式。

代码完全剽窃了 Greazyfork 的一个插件：
delete all zhihu  删除所有的知乎回答！！！
作者：jun4rui
 
https://greasyfork.org/zh-CN/scripts/443471-delete-all-zhihu
------------
感谢插件作者 jun4rui

这是我学写的第一段js代码。我代码支持来源chatGPT。

另外加装了一点点功能。
能设置删除多少条。
能自动翻页。（目前看知乎每页显示18条回答）

基本上兼容知乎web页面。模拟在自己回答的页面上点击 删除 按钮。删了当前页的全部回答，就下一页。


使用方法：
chrome类浏览器，打开自己的知乎回答主页
https://www.zhihu.com/people/你的用户名/answers

打开F12的开发者工具，到console. 复制delete.js中的代码到console执行就可以了。根据你需求修改一次自动删除的回答数量。

如果不让你粘贴代码，可能要再console输入allow pasting 回车，然后就可以复制代码执行了。
然后就可以看见，网页自动在点，删除，确认删除。
