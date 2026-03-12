// 微信分享功能
function shareToWechat(title, url) {
    // 检测是否在微信环境中
    const isWeixin = /MicroMessenger/i.test(navigator.userAgent);
    
    if (isWeixin) {
        // 在微信中，尝试调用微信分享接口
        if (typeof wx !== 'undefined' && wx.onMenuShareAppMessage) {
            wx.onMenuShareAppMessage({
                title: title,
                desc: 'Read this interesting article',
                link: url,
                imgUrl: '',
                success: function() {
                    alert('分享成功！');
                },
                cancel: function() {
                    alert('已取消分享');
                }
            });
            wx.onMenuShareTimeline({
                title: title,
                link: url,
                imgUrl: '',
                success: function() {
                    alert('分享成功！');
                },
                cancel: function() {
                    alert('已取消分享');
                }
            });
        } else {
            // 微信环境但没有SDK，显示提示
            alert('请点击右上角菜单，选择"发送给朋友"或"分享到朋友圈"');
        }
    } else {
        // 非微信环境，显示二维码或提示
        const message = `请在微信中打开此页面进行分享\n\n链接：${url}`;
        
        // 复制链接到剪贴板
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                alert('链接已复制到剪贴板！\n\n请打开微信，粘贴链接分享给朋友');
            }).catch(() => {
                alert(message);
            });
        } else {
            // 旧版浏览器兼容
            const textArea = document.createElement('textarea');
            textArea.value = url;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                alert('链接已复制到剪贴板！\n\n请打开微信，粘贴链接分享给朋友');
            } catch (err) {
                alert(message);
            }
            document.body.removeChild(textArea);
        }
    }
}
