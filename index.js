//defining 2d array

var rows = prompt("enter rows:");
var cols = prompt("enter colums");

var geek = new Array(rows);



for (var i =0 ;i<rows;i++){
    geek[i] = new Array(cols);
}


//alphabet printing method 

var letters = [];
for (var i = 65; i < 89; i++) {
  letters.push(String.fromCharCode(i));
}
var elem = document.createElement('p');
elem.innerHTML = letters.join(',');
//'document.body.appendChild(elem);


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

        document.write("<td>" + geek[i][j] + "</td>");

    }
   // document.write("<td rowspan=\"" + rows + ">"+ geek[0][2] + "</td");
    document.write("<tr>");


}



document.write("</table>");


//adding row
var addRow = prompt("enter where you wantto add space")






