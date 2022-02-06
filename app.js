const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let temporary = document.getElementById('temporary');
    let header = document.getElementById('header');

    temporary.classList.toggle('hide');
    header.classList.toggle('shrink');
})