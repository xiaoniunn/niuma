// 加载公共头部
function loadHeader() {
  fetch('header.html') // 注意header.html的路径（若在子目录需调整，如../header.html）
    .then(response => {
      if (!response.ok) throw new Error('加载头部失败');
      return response.text();
    })
    .then(html => {
      document.getElementById('header-container').innerHTML = html;
      // 头部加载完成后，重新绑定事件（如菜单切换、语言切换，原main.js中的事件需确保能找到新插入的元素）
      //initHeaderEvents(); // 需在main.js中定义该函数，处理头部事件
      
      // 头部加载完成后，更新语言显示
      if (typeof updatePageText === 'function') {
        updatePageText();
      }
    })
    .catch(error => console.error('Header load error:', error));
}

// 加载公共尾部
function loadFooter() {
  fetch('footer.html')
    .then(response => {
      if (!response.ok) throw new Error('加载尾部失败');
      return response.text();
    })
    .then(html => {
      document.getElementById('footer-container').innerHTML = html;
      // 尾部若有事件（如链接点击），可在此绑定
      
      // 尾部加载完成后，更新语言显示
      if (typeof updatePageText === 'function') {
        updatePageText();
      }
    })
    .catch(error => console.error('Footer load error:', error));
}

// 页面DOM加载完成后执行加载
document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
});