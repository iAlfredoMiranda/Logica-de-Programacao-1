        function sorteia() {

            return Math.round(Math.random() * 60);
            
        }

        function sorteiaNumerosMega() {
            let megaSena = []
            let numero = 1

            while(numero <= 6) {

                let numeroAleatorio = sorteia()
                let achou = false

                if(numeroAleatorio !== 0 && numeroAleatorio <= 60) {

                    for(posicao = 0; posicao < megaSena.length; posicao++) {

                        if(megaSena[posicao] == numeroAleatorio) {

                            achou = true
                            break
                        }
                    }

                    if(achou == false) {

                        megaSena.push(numeroAleatorio)
                        numero++
                    }

                }

            }

                var resultMega = megaSena;
                document.getElementById("inputgeneratedMega").value = resultMega; //Now you get the js variable inside your form element
        }
