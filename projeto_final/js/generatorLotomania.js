        function sorteia() {

            return Math.round(Math.random() * 99);
            
        }

        function sorteiaNumerosLotomania() {
            let megaSena = []
            let numero = 1

            while(numero <= 20) {

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

            alert("Os números da sorte são: " + megaSena)
        }
