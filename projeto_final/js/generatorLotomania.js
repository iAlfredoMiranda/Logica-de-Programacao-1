        function sorteia() {

            return Math.round(Math.random() * 99);
            
        }

        function sorteiaNumerosLotomania() {
            let lotomania = []
            let numero = 1

            while(numero <= 20) {

                let numeroAleatorio = sorteia()
                let achou = false

                if(numeroAleatorio !== 0 && numeroAleatorio <= 60) {

                    for(posicao = 0; posicao < lotomania.length; posicao++) {

                        if(lotomania[posicao] == numeroAleatorio) {

                            achou = true
                            break
                        }
                    }

                    if(achou == false) {

                        lotomania.push(numeroAleatorio)
                        numero++
                    }

                }

            }

            var resultlotomania = lotomania;
            document.getElementById("inputgeneratedLotomania").value = resultlotomania;
        }
