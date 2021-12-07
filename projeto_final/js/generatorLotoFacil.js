        function sorteia() {

            return Math.round(Math.random() * 25);
            
        }

        function sorteiaNumerosLotoFacil() {
            let lotofacil = []
            let numero = 1

            while(numero <= 20) {

                let numeroAleatorio = sorteia()
                let achou = false

                if(numeroAleatorio !== 0 && numeroAleatorio <= 60) {

                    for(posicao = 0; posicao < lotofacil.length; posicao++) {

                        if(lotofacil[posicao] == numeroAleatorio) {

                            achou = true
                            break
                        }
                    }

                    if(achou == false) {

                        lotofacil.push(numeroAleatorio)
                        numero++
                    }

                }

            }

            var resultLotofacil = lotofacil;
                document.getElementById("inputgeneratedLotoFacil").value = resultLotofacil;
        }
