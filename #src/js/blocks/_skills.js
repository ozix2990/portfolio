const skillItem = document.querySelectorAll(`.skills__percents-item`);

skillItem.forEach(item=>{
    const persent = item.querySelector(`.skills__percents-persent`);
    const complete = item.querySelector(`.skills__percents-complete`);
    complete.style.width = `${persent.innerHTML}`;
});