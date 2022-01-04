        /*This func return random numbers of 1 to 60 */
        function sorteia() {

            return Math.round(Math.random() * 80);
            
        }

        /* This func return 6 random numbers of 1 to 80 and no repeat */
        function sorteiaNumerosQuina() {
            let quina = []
            let numero = 1

            /* this "while" generate 5 numbenrs*/
            while(numero <= 5) {

                let numeroAleatorio = sorteia()
                let achou = false
                
                /* If nonzero and less than 60*/
                if(numeroAleatorio !== 0 && numeroAleatorio <= 80) {

                    /* will generate 6 non-repeating numbers between 1 and 80*/
                    for(posicao = 0; posicao < quina.length; posicao++) {

                        if(quina[posicao] == numeroAleatorio) {

                            achou = true
                            break
                        }
                    }
                    /* If no generate 5 numbers, do "while" again and generate more 1 number */
                    if(achou == false) {

                        quina.push(numeroAleatorio)
                        numero++
                    }

                }

            }
            /*This var recive the result and return the numbers for input  */
            var resultQuina = quina;
            document.getElementById("inputgeneratedQuina").value = resultQuina;
        }
