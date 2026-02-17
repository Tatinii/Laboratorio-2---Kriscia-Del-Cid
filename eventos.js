// 1. CLICK 
const clickEvent = document.getElementById('click-event');
clickEvent.addEventListener('click', function() {
    this.classList.add('event-active');
    setTimeout(() => this.classList.remove('event-active'), 300);
});


// 2. HOVER 
const hoverEvent = document.getElementById('hover-event');
hoverEvent.addEventListener('mouseover', function() {
    this.classList.add('event-active');
});
hoverEvent.addEventListener('mouseout', function() {
    this.classList.remove('event-active');
});


// 3. DOUBLE CLICK
const dblclickEvent = document.getElementById('dblclick-event');
dblclickEvent.addEventListener('dblclick', function() {
    this.classList.add('event-active');
    setTimeout(() => this.classList.remove('event-active'), 300);
});


// 4. TYPE 
const typeEvent = document.getElementById('type-event');
typeEvent.addEventListener('input', function() {
    if (this.value.length > 0) {
        this.classList.add('event-active');
    } else {
        this.classList.remove('event-active');
    }
});


// 5. FOCUS 
const focusEvent = document.getElementById('focus-event');
focusEvent.addEventListener('focus', function() {
    this.classList.add('event-active');
});
focusEvent.addEventListener('blur', function() {
    this.classList.remove('event-active');
});


// 6. BLUR 
const blurEvent = document.getElementById('blur-event');
blurEvent.addEventListener('blur', function() {
    if (this.value.length > 0) {
        this.classList.add('event-active');
        setTimeout(() => this.classList.remove('event-active'), 1000);
    }
});


// 7. SUBMIT 
const submitEvent = document.getElementById('submit-event');
submitEvent.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.add('event-active');
    alert('¡Enviado exitoso!');
    setTimeout(() => this.classList.remove('event-active'), 300);
});


// 8. CHANGE
const changeEvent = document.getElementById('change-event');
changeEvent.addEventListener('change', function() {
    if (this.value.length > 0) {
        this.classList.add('event-active');
        setTimeout(() => this.classList.remove('event-active'), 500);
    }
});

// Actividad Realizada por Kriscia Del Cid - SMSS089424