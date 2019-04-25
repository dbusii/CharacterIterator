let timer = setInterval(generator, 10);
let makeInput;

            function generator(){
                  let makeInput = document.getElementById('character')
                  makeInput.innerHTML = Math.random().toString(36).substring(2,3);
                         if (document.getElementById('character').innerHTML === "a") {
                        clearInterval(timer);
                        }
            }
