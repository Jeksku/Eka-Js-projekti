function kaanna() 
{
    var muuttuja;
    muuttuja = document.getElementById('kielet').value;
    if (muuttuja == "sve")
    {
        document.write ("Hej världen");
    } 
    else if (muuttuja == "eng")
    {
        document.write ("Hello world");
    } 
    else
    {
        document.write ("Hola Mundo");
    }
}