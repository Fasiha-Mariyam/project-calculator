function getInput(InputValue)
{

    document.getElementById("showInput").value += InputValue;

}
function clearScreen()
{

    document.getElementById("showInput").value = " ";
}
function deleteNumber()
{
    var screenValue = document.getElementById("showInput").value;
    document.getElementById("showInput").value = document.getElementById("showInput").value.slice(0,screenValue.length-1);  
}
function getOutput()
{
    var screenValue = document.getElementById("showInput").value;
    document.getElementById("showInput").value = eval(screenValue);
}
function mathop(sign)
{   switch (sign){

    case 'log':{
        log = Math.log;
        break;
    }
    case 'log2':
    {
        log2=Math.log2;
        break;
    }
    case 'log10':
    {
        log10=Math.log10;
        break;
    }
    case 'x':
    {
        x=Math.pow;
        break;
    } 
    case 'PI':
    {
        PI=Math.PI;
        break;
    } 
    case 'Exp':
    {
        Exp=Math.Exp;
        break;
    }
    case 'sqrt':
    {
        sqrt=Math.sqrt;
        break;
    }
    case 'tan'  :  
    {
        tan=Math.tan;
        break;
    }
    case 'cos'  :  
    {
        cos=Math.cos;
        break;
    }
    case 'sin'   : 
    {
        sin=Math.sin;
        break;
    }
    case 'asin':
    {
        asin=Math.asin;
    }
    case 'acos':
    {
        acos=Math.acos;
        break;
    }
    case 'atan':
    {
        atan=Math.atan;
        break;
    }}
    document.getElementById("showInput").value += sign;
    console.log(sign);
}
//  if(sign==='log'){
//         log = Math.log;
//     }
//     else if(sign==='log2')
//     {
//         log2=Math.log2;
//     }
//     else if(sign==='log10')
//     {
//         log10=Math.log10;
//     }
//     else if(sign==='x')
//     {
//         x=Math.pow;
//     } 
//     else if(sign==='PI')
//     {
//         PI=Math.PI;
//     } 
//     else if(sign==='Exp')
//     {
//         Exp=Math.Exp;
//     }
//     else if(sign==='sqrt')
//     {
//         sqrt=Math.sqrt;
//     }
//     else if(sign==='tan')
//     {
//         tan=Math.tan;
//     }
//     else if(sign==='cos')
//     {
//         cos=Math.cos;
//     }
//     else if(sign==='sin')
//     {
//         sin=Math.sin;
//     }
//     else if(sign==='asin')
//     {
//         asin=Math.asin;
//     }
//     else if(sign==='acos')
//     {
//         acos=Math.acos;
//     }
//     else if(sign==='atan')
//     {
//         atan=Math.atan;
//     }