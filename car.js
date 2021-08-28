m=0;
var y;
function start()
{
     y =setInterval(run,100);
    
    function run()
    {
       if(m==1100)
       {
           stop();
           m=0;

       }
       else{
        m+=5;
        var x=document.getElementById("cr");
        x.style.marginLeft=m+'px';
       }
    }
}
function stop()
{
    clearInterval(y)

}
