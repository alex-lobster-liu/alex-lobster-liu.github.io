// 修复多语言Home链接重定向问题
document.addEventListener('DOMContentLoaded', function() {
    // 找到所有的Home链接
    const homeLinks = document.querySelectorAll('a[href*="/"], a[href="/"]');
    
    homeLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // 如果是根路径或当前页面的根路径
        if (href === '/' || href === '/en/' || href === '/zh/') {
            // 获取当前页面的路径
            const currentPath = window.location.pathname;
            
            // 判断当前页面是英文还是中文
            const isZhPage = currentPath.startsWith('/zh/') || currentPath.includes('/zh/');
            
            // 根据当前页面语言设置Home链接
            if (isZhPage) {
                link.href = '/zh/';
            } else {
                link.href = '/';
            }
        }
    });
    
    // 特别处理logo/home链接
    const logoLink = document.querySelector('.logo a');
    if (logoLink) {
        const currentPath = window.location.pathname;
        const isZhPage = currentPath.startsWith('/zh/') || currentPath.includes('/zh/');
        
        if (isZhPage) {
            logoLink.href = '/zh/';
        } else {
            logoLink.href = '/';
        }
    }
});
