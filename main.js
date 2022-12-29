const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenLeft = document.querySelectorAll('.hidden-left, .hidden-right');
hiddenLeft.forEach((elem)=>{
    observer.observe(elem)
});
