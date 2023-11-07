var output = document.getElementById('output-box');

const pressOnScreen = (btn) => {
    let lastChar = output.value.charAt(output.value.length - 1);
    if((lastChar == '*' || lastChar == '+' || lastChar == '-' || lastChar == '/') && (btn == '+' || btn == '*' || btn == '/' || btn == '-')){
        document.getElementById('error').innerHTML = 'Cannot add Operator after Operator </br> Try to add Operant';
        setTimeout(() => {
            document.getElementById('error').innerHTML = ''
        },1000)
    } else {
        switch (btn) {
            case '1':
                document.getElementById('output-box').value += btn;
                break;
            case '2':
                document.getElementById('output-box').value += btn;
                break;
            case '3':
                document.getElementById('output-box').value += btn;
                break;
            case '4':
                document.getElementById('output-box').value += btn;
                break;
            case '5':
                document.getElementById('output-box').value += btn;
                break;
            case '6':
                document.getElementById('output-box').value += btn;
                break;
            case '7':
                document.getElementById('output-box').value += btn;
                break;
            case '8':
                document.getElementById('output-box').value += btn;
                break;
            case '9':
                document.getElementById('output-box').value += btn;
                break;
            case '0':
                document.getElementById('output-box').value += btn;
                break;
            case '+':
                document.getElementById('output-box').value += btn;
                break;
            case '*':
                document.getElementById('output-box').value += btn;
                break;
            case '-':
                document.getElementById('output-box').value += btn;
                break;
            case '/':
                document.getElementById('output-box').value += btn;
                break;
            case 'clr':
                document.getElementById('output-box').value = '0';
                break;
            case '=':
                try{
                    document.getElementById('output-box').value = eval(document.getElementById('output-box').value)
                } catch(error){
                    document.getElementById('error').innerHTML = 'Enter Valid Math Expression';
                    setTimeout(() => {
                        document.getElementById('error').innerHTML = ''
                    },1000)
                }
        }
    }
}
