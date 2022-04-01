//defining 2d array

var rows = prompt("enter rows:");
if(rows>27){
         alert("you have entered rows more than 26.Please enter less than 27");
     }
     else{
        var cols = prompt("enter colums");
        var value = prompt("enter after which column you want to give space");

     }



var geek = new Array(rows);

// if(geek>27){
//     alert("you have entered rows more than 26.Please enter less than 27");
// }
// else{


for (var i =0 ;i<rows;i++){
    geek[i] = new Array(cols);
}


//alphabet printing method 

var letters = [];
for (var i = 65; i < 92; i++) {
  letters.push(String.fromCharCode(i));
}
var elem = document.createElement('p');
elem.innerHTML = letters.join(',');



//input array


for(var i =0 ; i < rows ; i++){
    for(var j=0;j<cols;j++){
        geek[i][j]= letters[i] + j ;
    }
}

//display

document.write("<table border = '1px'>");
for(var i =0 ; i < rows ; i++){
    document.write("<tr>");
    for(var j=0;j<cols;j++){
        if(j==value){
            if(i==rows-1){
                if(geek[i][j] ==  letters[i] + j){
                    
                    document.write("<td>" +  letters[i] + [j]   + "</td>" );
                    continue;

                }

               
                document.write("<td>" + geek[i][j]   + "</td>" );

            }
            
     document.write("<td>" + "&nbsp;&nbsp;&nbsp; " + "</td>");
   
     continue;
    
    }


        document.write("<td>" + geek[i][j] + "</td>");

    }

    
 
    document.write("<tr>");


}



document.write("</table>");



//}






