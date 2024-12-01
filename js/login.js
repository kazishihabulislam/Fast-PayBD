document.getElementById('btn-login')
        .addEventListener('click', function(event){
            event.preventDefault();
            console.log('login button clicked');

            // Step-3: get the phone Number
            const phoneNumber = document.getElementById('phone-number').value;
            console.log(phoneNumber);
        })