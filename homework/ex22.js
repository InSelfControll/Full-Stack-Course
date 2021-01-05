document.write("<h1>Ex 10 </h1>");
document.write("<table border='1' style='border-collapse:collapse;font-family:David;font-size:20pt>'");
//alert("how old are you ? ");
var lines = prompt("Enter number of Lines");
var lines = parseInt(tmp);
//alert(lines);
for (var i = 1; i <= lines; i++) {
	document.write("<tr><td><img src='/Images/" + i + ".jpg' height= '200' width= '300' /></td>");
	document.write("<td><a href=" + i + ".html>" + i + " Go to the page</a></td></tr>");
}
document.write("</table>");