
    
    function generateNumber(){
        //gera numeros aletorios dentro de um array da let number.
        let number = [
            Math.round(Math.random()* 10),
            Math.round(Math.random()* 10),
            Math.round(Math.random()* 10),
            Math.round(Math.random()* 10),
            Math.round(Math.random()* 10),
            Math.round(Math.random()* 10),
            Math.round(Math.random()* 10),
            Math.round(Math.random()* 10),
            Math.round(Math.random()* 10),
            Math.round(Math.random()* 10)]
        
        // armazenar os arrays da let number no dentro arr.
        let arr = []

        // armazenar do todos os da let conjuntos dentro da let resultado.
        let resultado = [];
        
        // Serve para evitar que o numero aleatorio seja zero, evitando que o laço de repetição nunca.
        let random = Math.round(Math.random()  * 10)

        if(random == 0){
            random = 1
        }

        //laço de repetição vai seguir de acordo com o numeros gerados aleatoriamente.
        for(i = 0; i < random; i++){
            //Vai inserir a quantidade de arrays do numbers dentro arr, de acordo com o let random.
            arr.push(number[i])
        }

        //Vai inserir cada array da let arr dentro do conjunto
        for(let i = 0; i <= arr.length; i++){
            let conjunto = [arr[i]]
            let n = i + 1;   //Pra pegar o proximo array

            //Pega o proximo numero, se proximo for o anterior mais 1, vai colocar tambem dentro do conjunto
            for(;arr[n] == conjunto[conjunto.length - 1] + 1; n++){
                conjunto.push(arr[n]);
            }
            if(conjunto.length > 1){
                resultado.push(conjunto)
            }
            i = n - 1 //  vai apontar pro ultimo valor pesquisado
        }

        const reduzir = (prevValue, currentValue) => prevValue + currentValue;
        let MaiorValor = resultado;
        
        if(resultado.length > 1){
            
            //Uma condição para pegar o maior array da let resultado
            if(resultado[0].reduce(reduzir) > resultado[1].reduce(reduzir)){
                MaiorValor = resultado[0];
            }else{
                MaiorValor = resultado[1];
                
            }

        }
        
        //Uma condição caso os valores do resultado sejam indefinidos
       if(resultado[0] == undefined && resultado[1] == undefined){
             MaiorValor = 'Tente de novo'
       }

       let arrFinal = arr.join([]) 

        document.getElementById('entrada').innerHTML = arrFinal;
       
        document.getElementById('saida').innerHTML = MaiorValor
        
    }

    