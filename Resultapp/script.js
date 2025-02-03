let namee = prompt("Enter Your Name");
 let namenow = namee;



    let today = new Date();

    document.getElementById("timedisply").innerHTML= "|" + " " + today.toDateString();

    let timcount = setInterval(jtim, 1000);

    function jtim(){
        let today = new Date();
        document.getElementById("timedisplay").innerHTML=today.toLocaleTimeString();



            let namenow = namee;
            let hour = today.getHours();
            let message="";
        
            if (hour < 12){
        
                message = "Good Morning" + " "  + namenow;
        
            }
        
            else if (hour < 15){
        
                message = "Good Afternoon" + " " + namenow;
        
            }


            else if (hour < 19){
        
                message = "Good Evening" + " "  + namenow;
        
            }
        
            else {
        
                message = "Good Night" + " " + namenow;
            }
            document.getElementById("timedispl").innerHTML= message;
         }
        
    



    // document.getElementById("timedisply").innerHTML="day";





function finput(){
    

    let test1 = document.getElementById("test1").value;
    let test2 = document.getElementById("test2").value;
    let exam = document.getElementById("exam").value;
    

    let total = Number (test1) + Number (test2) + Number (exam);


    document.getElementById("fmark").value = total;

    document.getElementById("total").value = total;


if (total >= 70 && total <= 100) {
    document.getElementById("grade").value="A";
}

else if (total >= 60 && total <= 69) {
    document.getElementById("grade").value="B";
}

else if (total >= 50 && total <= 59) {
    document.getElementById("grade").value="C";
}

else if (total >= 45 && total <= 49) {
    document.getElementById("grade").value="D";
}

else if (total >= 30 && total <= 44) {
    document.getElementById("grade").value="E";
}

else {
    document.getElementById("grade").value="F";
}

let grade = document.getElementById("grade").value;
let gradee = grade;

document.getElementById("fgrade").value = gradee;



let fgrade = document.getElementById("fgrade").value;
let fgradee = fgrade;


if (fgradee == "A"){
    document.getElementById("fremark").value="Excellent"
}


else if (fgradee == "B" ){
    document.getElementById("fremark").value="Very Good"
}

else if (fgradee == "C" ){
    document.getElementById("fremark").value="Credit"
}

else if (fgradee == "D" ){
    document.getElementById("fremark").value="Pass"
}

else if (fgradee == "E" ){
    document.getElementById("fremark").value="Pass"
}

else{
    document.getElementById("fremark").value="Fail"
}


    }



    function finput1(){

        let testt = document.getElementById("testt").value;
        let test3 = document.getElementById("test3").value;
        let exam1 = document.getElementById("exam1").value;

        let total1 = Number(testt) + Number(test3) + Number(exam1);

        document.getElementById("fmark1").value = total1;

        document.getElementById("total1").value=total1;


        if (total1 >= 70 && total1 <= 100){
            document.getElementById("grade1").value="A"
        }


        else if (total1 >= 60 && total1 <= 69){
            document.getElementById("grade1").value="B"
        }
        
        else if (total1 >= 50 && total1 <= 59){
            document.getElementById("grade1").value="C"
        }

        else if (total1 >= 45 && total1 <= 49){
            document.getElementById("grade1").value="D"
        }

        else if (total1 >= 30 && total1 <= 44){
            document.getElementById("grade1").value="E"
        }

        else{
            document.getElementById("grade1").value="F"
        }

        let grade1 = document.getElementById("grade1").value;

        let sgrad = grade1;
        document.getElementById("sgrade").value=sgrad;


let sgrade = document.getElementById("sgrade").value;
let fgradeee = sgrade;


if (fgradeee == "A"){
    document.getElementById("sremark").value="Excellent"
}


else if (fgradeee == "B" ){
    document.getElementById("sremark").value="Very Good"
}

else if (fgradeee == "C" ){
    document.getElementById("sremark").value="Credit"
}

else if (fgradeee == "D" ){
    document.getElementById("sremark").value="Pass"
}

else if (fgradeee == "E" ){
    document.getElementById("sremark").value="Pass"
}

else{
    document.getElementById("sremark").value="Fail"
}


    }




    function finput2(){

        let testtt = document.getElementById("testtt").value;
        let test4 = document.getElementById("test4").value;
        let exam2 = document.getElementById("exam2").value;

        let total2 = Number(testtt) + Number(test4) + Number(exam2);

        document.getElementById("fmark2").value = total2;

        document.getElementById("total2").value=total2;


        if (total2 >= 70 && total2 <= 100){
            document.getElementById("grade2").value="A"
        }


        else if (total2 >= 60 && total2 <= 69){
            document.getElementById("grade2").value="B"
        }
        
        else if (total2 >= 50 && total2 <= 59){
            document.getElementById("grade2").value="C"
        }

        else if (total2 >= 45 && total2 <= 49){
            document.getElementById("grade2").value="D"
        }

        else if (total2 >= 30 && total2 <= 44){
            document.getElementById("grade2").value="E"
        }

        else{
            document.getElementById("grade2").value="F"
        }

        let grade2 = document.getElementById("grade2").value;

        let tgrad = grade2;
        document.getElementById("tgrade").value=tgrad;


let tgrade = document.getElementById("tgrade").value;
let fgradeeee = tgrade;


if (fgradeeee == "A"){
    document.getElementById("tremark").value="Excellent"
}


else if (fgradeeee == "B" ){
    document.getElementById("tremark").value="Very Good"
}

else if (fgradeeee == "C" ){
    document.getElementById("tremark").value="Credit"
}

else if (fgradeeee == "D" ){
    document.getElementById("tremark").value="Pass"
}

else if (fgradeeee == "E" ){
    document.getElementById("tremark").value="Pass"
}

else{
    document.getElementById("tremark").value="Fail"
}


    }




    function finput3(){

        let testttt = document.getElementById("testttt").value;
        let test5 = document.getElementById("test5").value;
        let exam3 = document.getElementById("exam3").value;

        let total3 = Number(testttt) + Number(test5) + Number(exam3);

        document.getElementById("fmark3").value = total3;

        document.getElementById("total3").value=total3;


        if (total3 >= 70 && total3 <= 100){
            document.getElementById("grade3").value="A"
        }


        else if (total3 >= 60 && total3 <= 69){
            document.getElementById("grade3").value="B"
        }
        
        else if (total3 >= 50 && total3 <= 59){
            document.getElementById("grade3").value="C"
        }

        else if (total3 >= 45 && total3 <= 49){
            document.getElementById("grade3").value="D"
        }

        else if (total3 >= 30 && total3 <= 44){
            document.getElementById("grade3").value="E"
        }

        else{
            document.getElementById("grade3").value="F"
        }

        let grade3 = document.getElementById("grade3").value;

        let tgradd = grade3;
        document.getElementById("ffgrade").value=tgradd;


let ffgrade = document.getElementById("ffgrade").value;
let fgradeeeee = ffgrade;


if (fgradeeeee == "A"){
    document.getElementById("ffremark").value="Excellent"
}


else if (fgradeeeee == "B" ){
    document.getElementById("ffremark").value="Very Good"
}

else if (fgradeeeee == "C" ){
    document.getElementById("ffremark").value="Credit"
}

else if (fgradeeeee == "D" ){
    document.getElementById("ffremark").value="Pass"
}

else if (fgradeeeee == "E" ){
    document.getElementById("ffremark").value="Pass"
}

else{
    document.getElementById("ffremark").value="Fail"
}


    }




    function finput4(){

        let testtttt = document.getElementById("testtttt").value;
        let test6 = document.getElementById("test6").value;
        let exam4 = document.getElementById("exam4").value;

        let total4 = Number(testtttt) + Number(test6) + Number(exam4);

        document.getElementById("fmark4").value = total4;

        document.getElementById("total4").value=total4;


        if (total4 >= 70 && total4 <= 100){
            document.getElementById("grade4").value="A"
        }


        else if (total4 >= 60 && total4 <= 69){
            document.getElementById("grade4").value="B"
        }
        
        else if (total4 >= 50 && total4 <= 59){
            document.getElementById("grade4").value="C"
        }

        else if (total4 >= 45 && total4 <= 49){
            document.getElementById("grade4").value="D"
        }

        else if (total4 >= 30 && total4 <= 44){
            document.getElementById("grade4").value="E"
        }

        else{
            document.getElementById("grade4").value="F"
        }

        let grade4 = document.getElementById("grade4").value;

        let tgraddd = grade4;
        document.getElementById("ffsgrade").value=tgraddd;


let ffsgrade = document.getElementById("ffsgrade").value;
let fgradeeeeee = ffsgrade;


if (fgradeeeeee == "A"){
    document.getElementById("ffsremark").value="Excellent"
}


else if (fgradeeeeee == "B" ){
    document.getElementById("ffsremark").value="Very Good"
}

else if (fgradeeeeee == "C" ){
    document.getElementById("ffsremark").value="Credit"
}

else if (fgradeeeeee == "D" ){
    document.getElementById("ffsremark").value="Pass"
}

else if (fgradeeeeee == "E" ){
    document.getElementById("ffsremark").value="Pass"
}

else{
    document.getElementById("ffsremark").value="Fail"
}
    


    }






    function finput5(){

        let testttttt = document.getElementById("testttttt").value;
        let test7 = document.getElementById("test7").value;
        let exam5 = document.getElementById("exam5").value;

        let total5 = Number(testttttt) + Number(test7) + Number(exam5);

        document.getElementById("fmark5").value = total5;

        document.getElementById("total5").value=total5;


        if (total5 >= 70 && total5 <= 100){
            document.getElementById("grade5").value="A"
        }


        else if (total5 >= 60 && total5 <= 69){
            document.getElementById("grade5").value="B"
        }
        
        else if (total5 >= 50 && total5 <= 59){
            document.getElementById("grade5").value="C"
        }

        else if (total5 >= 45 && total5 <= 49){
            document.getElementById("grade5").value="D"
        }

        else if (total5 >= 30 && total5 <= 44){
            document.getElementById("grade5").value="E"
        }

        else{
            document.getElementById("grade5").value="F"
        }

        let grade5 = document.getElementById("grade5").value;

        let tgradddd = grade5;
        document.getElementById("ffssgrade").value=tgradddd;



let ffssgrade = document.getElementById("ffssgrade").value;
let fgradeeeeee = ffssgrade;


if (fgradeeeeee == "A"){
    document.getElementById("ffssremark").value="Excellent"
}


else if (fgradeeeeee == "B" ){
    document.getElementById("ffssremark").value="Very Good"
}

else if (fgradeeeeee == "C" ){
    document.getElementById("ffssremark").value="Credit"
}

else if (fgradeeeeee == "D" ){
    document.getElementById("ffssremark").value="Pass"
}

else if (fgradeeeeee == "E" ){
    document.getElementById("ffssremark").value="Pass"
}

else{
    document.getElementById("ffssremark").value="Fail"
}


    }





// FULL NAME AND CLASS FUNCTION


    function fnamee(){

        let myname = document.getElementById("myname").value;

        let namev = myname;

        document.getElementById("namev").value = namev;

       }


       function myclass(){

        let sclass = document.getElementById("sclass").value;

        let classlist = sclass;

        document.getElementById("classlist").value = classlist;

       }




// BEGINING OF SUBJECT FUNCTION


       function sub1(){

        let subject1 = document.getElementById("subject1").value;

        let fsubject = subject1;

        document.getElementById("fsubject").value = fsubject;

    }

    function sub2(){

        let subject2 = document.getElementById("subject2").value;

        let fsubject1 = subject2;

        document.getElementById("fsubject1").value = fsubject1;

    }


    function sub3(){

        let subject3 = document.getElementById("subject3").value;

        let subb = subject3;

        document.getElementById("fsubject2").value=subb;


       }


       function sub4(){

        let subject4 = document.getElementById("subject4").value;

        let subbb = subject4;

        document.getElementById("fsubject3").value=subbb;


       }


       function sub5(){

        let subject5 = document.getElementById("subject5").value;

        let subbbb = subject5;

        document.getElementById("fsubject4").value=subbbb;


       }

       function sub6(){

        let subject6 = document.getElementById("subject6").value;

        let subbbbb = subject6;

        document.getElementById("fsubject5").value=subbbbb;


       }

