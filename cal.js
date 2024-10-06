const ul = document.querySelectorAll('ul li')

ul.forEach(node =>{
    node.addEventListener('click', function(event){
        const value = node.innerText.trim()
        const result = document.querySelector('.result')
        const resultText = result.innerText.trim()

        
         if(resultText == '0' || resultText == "undefined" || resultText == "infinity"){
            result.innerText = ""
            return true
         }

         if(value == "="){
            let solution = eval(resultText)
            result.innerText = solution
            return true
         }

         if(value.toLowerCase() == "c"){
             result.innerText = ''
             return true
         }

           result.append(value)

    })
})