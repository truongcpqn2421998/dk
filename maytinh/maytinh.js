function  show(value) {
    document.getElementById('input').value+=value;
}
function calculator() {
    document.getElementById('input').value=eval(document.getElementById('input').value);
}
function C() {
    document.getElementById('input').value='';
}