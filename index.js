
//var rows = prompt("enter rows:");
var rows = parseInt(prompt("enter how many rows do u want: "));

if(rows>27){
         alert("you have entered rows more than 26.Please enter less than 27");
         window.location.reload();
         
     }

     else{
        //var cols = prompt("enter colums");
        var cols = parseInt(prompt("Enter how many sits do u want : "));
        
       // var space = prompt("Enter how many space do u want: ");
       var spaceQuantity = parseInt(prompt("how many space :"));
       var spacePosition= [];
       for(var ptr = 0 ; ptr<spaceQuantity;ptr++){
        spacePosition[ptr] = prompt("enter where u want space:");

       }
       console.log(spacePosition);
        


       

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
    for(var j=0;j<(cols + spaceQuantity);j++){
       
     
            geek[i][j]= letters[i] + j ;

        }
       
    }

console.log(geek);




//display

document.write("<table border = '1px'>");
for(var i =0 ; i < rows ; i++){
    document.write("<tr>");
    for(var j=0;j<cols+spaceQuantity;j++){
        if(spacePosition.some(space => space ==j)){
            if(i== rows-1){
                document.write("<td>" +   geek[i][j]  + "</td>" );
                continue;
            }
           
            
         
                    document.write("<td>" +  "&nbsp;&nbsp;&nbsp;"  + "</td>" );
                    continue;

                }
                else{

               
                document.write("<td>" + geek[i][j]   + "</td>" );

            }

    }

    
 
    document.write("</tr>");


}



document.write("</table>");
