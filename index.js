function insert(num) {
    let number = document.querySelector('#result').innerHTML
    document.querySelector('#result').innerHTML = number + num
}

function clean() {
    document.querySelector('#result').innerHTML = ''  
}

function calculator() {
    let result = document.querySelector('#result').innerHTML
    
    if (result) {
        document.querySelector('#result').innerHTML = eval(result)
    } 
    else {
        document.querySelector('#result').innerHTML = 'Insira algo...'
    }
}

function back() {
    let backNum = document.querySelector('#result').innerHTML
    document.querySelector('#result').innerHTML = backNum.substring(0, backNum.length -1)
}