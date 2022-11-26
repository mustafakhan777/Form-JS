var inp1 = document.getElementById("chahye")
var inp2 = document.getElementById("chahye2")
var inp3 = document.getElementById("chahye3")
var inp4 = document.getElementById("Day")
var inp5 = document.getElementById("chahye4")
var inp6 = document.getElementById("month")
var inp7 = document.getElementById("year")



function abc(){
    var inpaya1 = inp1.value;
    var inpaya2 = inp2.value;
    var inpaya3 = inp3.value;
    var inpaya4 = inp4.value;
    var inpaya5 = inp5.value;
    var inpaya6 = inp6.value;
    var inpaya7 = inp7.value;
    document.write("YOUR BIO");
    document.write("<br>");    
    document.write("<br>");    
    document.write("Firstname = " + inpaya1);    
    document.write("<br>");    
    document.write("lastname = " + inpaya2);
    document.write("<br>");    
    document.write("Contact = " + inpaya3);
    document.write("<br>");
    document.write("Email = " + inpaya5);
    document.write("<br>");
    document.write("Date Of Birth = " + inpaya4 + inpaya6 + inpaya7);
    document.write("<br>");   
    
}


function xyz(){
    var inp8 = document.getElementById("male")
    var inp9 = document.getElementById("female")
    var inp10 = document.getElementById("custom")

    if(inp8.Checked){
        document.write(inp8.value)
    }else if(inp9.Checked){ 
        document.write("Gender Female")
    }else if(inp10.Checked){ 
        document.write("Gender Custom")
    }else {
        document.write("Gender is missing?")
    } 
}










