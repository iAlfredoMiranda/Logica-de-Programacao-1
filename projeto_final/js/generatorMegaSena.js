        /*This func return random numbers of 1 to 60 */
        function sorteia() {

            return Math.round(Math.random() * 60);
            
        }
        /* This func return 6 random numbers of 1 to 60 and no repeat */
        function sorteiaNumerosMega() {
            let megaSena = []
            let numero = 1

            /* this "while" generate 6 numbenrs*/
            while(numero <= 6) {

                let numeroAleatorio = sorteia()
                let achou = false

                /* If nonzero and less than 60*/
                if(numeroAleatorio !== 0 && numeroAleatorio <= 60) {
                    
                    /* will generate 6 non-repeating numbers between 1 and 60*/
                    for(posicao = 0; posicao < megaSena.length; posicao++) {

                        if(megaSena[posicao] == numeroAleatorio) {

                            achou = true
                            break
                        }
                    }
                    /* If no generate 6 numbers, do "while" again and generate more 1 number */
                    if(achou == false) {

                        megaSena.push(numeroAleatorio)
                        numero++
                    }

                }

            }
                /*This var recive the result and return the numbers for input  */
                var resultMega = megaSena;
                document.getElementById("inputgeneratedMega").value = resultMega;
        }
