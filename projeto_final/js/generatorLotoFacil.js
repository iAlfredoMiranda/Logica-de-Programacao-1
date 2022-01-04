        /*This func return random numbers of 0 to 25 */
        function sorteia() {

            return Math.round(Math.random() * 25);
            
        }
        /* This func return 20 random numbers of 1 to 25 and no repeat */
        function sorteiaNumerosLotoFacil() {
            let lotofacil = []
            let numero = 1

        /* this "while" generate 20 numbenrs*/
            while(numero <= 20) {

                let numeroAleatorio = sorteia()
                let achou = false
                
                 /* If nonzero and less than 25*/
                if(numeroAleatorio !== 0 && numeroAleatorio <= 25) {

                    /* will generate 20 non-repeating numbers between 1 and 25*/
                    for(posicao = 0; posicao < lotofacil.length; posicao++) {

                         /* if 20 numbenrs non-repeating = Ok and Lotofacil receive numbers */
                        if(lotofacil[posicao] == numeroAleatorio) {

                            achou = true
                            break
                        }
                    }
                    /* If no generate 20 numbers, do "while" again and generate more 1 number */
                    if(achou == false) {

                        lotofacil.push(numeroAleatorio)
                        numero++
                    }

                }

            }
            /*This var recive the result and return the numbers for input  */
            var resultLotofacil = lotofacil;
                document.getElementById("inputgeneratedLotoFacil").value = resultLotofacil;
        }
