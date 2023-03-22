$(document).ready(function(){
    function showModal(title){
        Swal.fire({
            title: '<strong>'+title+'</strong>',
            html:
                '<img src="images/portfolio/dts.jpg">'+
                'You can use <b>bold text</b>, ' +
                '<a href="//sweetalert2.github.io">links</a> ' +
                'and other HTML tags',
            showCloseButton: false,
            showCancelButton: false,
            focusConfirm: false,
            showConfirmButton: false
        })
    }
})