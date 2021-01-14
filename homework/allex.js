function DrawLink() {
    document.write('Hey' + '\t');
    document.write("<a href='https://youtube.com/'>Youtube</a>");
}
DrawLink();

function DrawImage(pic) {
    document.write(<h1>H3ex</h1>);
    document.write("<image src='/'" + pic + " '.jpg' width = '360' hight='200' />");
}
var p = parseInt(prompt("Enter a number of image"));

DrawImage(p);
DrawImage(p - 2);

function DrawImage3(pn) {
    document.write("RC3Exb");
    document.write("<img src='/" + pn + ".jpg' width= '300' hight='200'");
}
DrawImage3();

//DrawImage4 
function DrawImage4(imgIndex, imgHeight, imgWidth) {
    document.write("<img src='Images/" + imgIndex + ".jpg' height='" + imgHeight + "' width='" + imgWidth + "''/> ");
}

// DrawLink6 זימון 
function DrawLink6(linkIndex) {
    document.write("<a href='../HtmlPage" + linkIndex + ".html'style=color:red;'>page number" + linkIndex + "</a></br>");
}

function DrawRow() {
    document.write("<table border=1><tr><td>");
    var pic = parseInt(prompt('Enter a photo number'));
    var Height = parseInt(prompt('Enter a photo Height'));
    var Width = parseInt(prompt('Enter a photo Width'));
    DrawImage4(pic, Height, Width); document.write("</td>");
    document.write("<td>");
    DrawLink6(linkIndex = pic);
    document.write("</td></tr></table>");
}

DrawRow();

var pic = parseInt(prompt("Enter a photo number"));
var Height = parseInt(prompt("Enter a photo Height"));
var Width = parseInt(prompt("Enter a photo Width"));
DrawImage4(pic, Height, Width); 