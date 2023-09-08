const array = [
    {name: '404页面', id: 0},
    {name: '哔哩哔哩banner', id: 1},
    {name: '窗边风景动画', id: 2},
    {name: '火柴盒动画', id: 3},
    {name: '404页面', id: 4},
    {name: '404页面', id: 5},
    {name: '404页面', id: 6},
    {name: '404页面', id: 7},
    {name: '404页面', id: 8},
    {name: '404页面', id: 9},
    {name: '404页面', id: 10},
    {name: '404页面', id: 11}
  ];
  
  const box = document.getElementsByClassName('box');
  const parent = box.parentElement;
  
  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    const newLi = document.createElement('div');
    newLi.textContent = obj.name;
    newLi.classList.add('box'); // 添加一个样式类名
    parent.appendChild(newLi);
  }