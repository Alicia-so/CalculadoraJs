var Accum = 0;
var FlagNewNum = false;
var PendingOp = "";	

function numero(num) {
    if (FlagNewNum) {
        document.frm_calc.txt_01.value  = num;
        FlagNewNum = false;
       }
    else {
        if (document.frm_calc.txt_01.value == "0")
            document.frm_calc.txt_01.value = num;
        else
            document.frm_calc.txt_01.value += num;
       }
}

function operacao(Op) {
    if (document.frm_calc.txt_01.value == ""){
        alert("Digite um valor");
        document.frm_calc.txt_01.value ="0"; }
    else{
        if (FlagNewNum && PendingOp != "=");
        else	{
            FlagNewNum = true;
            if ( '+' == PendingOp )
                Accum += parseFloat(document.frm_calc.txt_01.value);
                else if ( '-' == PendingOp )
                Accum -= parseFloat(document.frm_calc.txt_01.value);
                else if ( '/' == PendingOp )
                Accum /= parseFloat(document.frm_calc.txt_01.value);
                else if ( '*' == PendingOp )
                Accum *= parseFloat(document.frm_calc.txt_01.value);
            else
                Accum = parseFloat(document.frm_calc.txt_01.value);
                document.frm_calc.txt_01.value = Accum;
                PendingOp = Op;
        }
       }
}    
