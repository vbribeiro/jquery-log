$(document).ready(function() {
    $('#form').submit(function(e){
        e.preventDefault();
        
        let data = {
            name: $('#name').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
        }

        console.log(data);

        alert('Dados enviados, obrigada!')
    })
})