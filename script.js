const a=document.getElementById('heading2')

function giveup()
{
a.style.display = 'block'
}
// function give(){
//  a.style.display = 'none'
// }
function give(){
    if(a.style.display != 'none')
    {
     a.style.display = 'none'
    }
    else{
        alert("cant reset")
    }
}


