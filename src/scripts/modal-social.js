document.addEventListener('DOMContentLoaded', () => {
    let callbackButton = document.getElementById('social-button');
    let modal = document.getElementsByClassName('modal-social')[0];
    let closeButton = document.getElementById('ms-close');
    let tagBody = document.getElementsByTagName('body')[0];
   
    callbackButton.onclick = function (e) {
        e.preventDefault();
        modal.classList.add('modal-social__active');
        tagBody.classList.add('hidden');
    };
   
    closeButton.onclick = function (e) {
        e.preventDefault();
        modal.classList.remove('modal-social__active');
        tagBody.classList.remove('hidden');
    };
    
    modal.onmousedown = function (e) {
        let target = e.target;
        let modalContent = modal.getElementsByClassName('modal-social__content')[0];
        if (e.target.closest('.' + modalContent.className) === null) {
            this.classList.remove('modal-social__active');
            tagBody.classList.remove('hidden');
        }
    };
    document.addEventListener('keydown', function(e) {
        if (e.key == "Escape") {
            modal.classList.remove('modal-social__active');
            tagBody.classList.remove('hidden');
        }
    });
});