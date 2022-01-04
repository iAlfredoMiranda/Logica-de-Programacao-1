        /* This func return random numbers of 0 to 99 */
        function sorteia() {

            return Math.round(Math.random() * 99);
            
        }
        /* This func return 20 random numbers of 0 to 99 and no repeat */
        function sorteiaNumerosLotomania() {
            let lotomania = []
            let numero = 1

            while(numero <= 20) {

                let numeroAleatorio = sorteia()
                let achou = false

                 /* If nonzero and less than 99 */
                if(numeroAleatorio >= 0 && numeroAleatorio <= 99) {

                    /* will generate 20 non-repeating numbers between 0 and 99*/
                    for(posicao = 0; posicao < lotomania.length; posicao++) {

                        /* if 20 numbenrs non-repeating = Ok and Lotofacil receive numbers */
                        if(lotomania[posicao] == numeroAleatorio) {

                            achou = true
                            break
                        }
                    }
                    /* If no generate 20 numbers, do "while" gain and generate more 1 number */
                    if(achou == false) {

                        lotomania.push(numeroAleatorio)
                        numero++
                    }

                }

            }
            /*This var recive the result and return the numbers for input  */
            var resultlotomania = lotomania;
            document.getElementById("inputgeneratedLotomania").value = resultlotomania;
        }
