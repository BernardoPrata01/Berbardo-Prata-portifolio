const btn = document.getElementById('btnmodos');

if (localStorage.getItem('tema') === 'escuro') {
    document.body.classList.add('dark-theme');
}

btn.addEventListener('click', () => {
    const escuro = document.body.classList.toggle('dark-theme');
    localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
});

const cursor = document.getElementById("cursor");
let x = 0, y = 0, Xmouse = 0, Ymouse = 0;

addEventListener('pointermove', mouseMexendo => {
    Xmouse = mouseMexendo.clientX;
    Ymouse = mouseMexendo.clientY;
    cursor.style.opacity = 1;
});

(function f() {
    x = Xmouse;
    y = Ymouse;

    cursor.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(f);
})();