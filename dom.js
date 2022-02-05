if(window.XMLHttpRequest)
{
    xhttp=new XMLHttpRequest();
}
else{
    xhttp=new ActiveXObject("Microsoft.XMLHTTP")
}
xhttp.open("GET","/students.xml",false);
xhttp.send();
var xmlDoc=xhttp.responseXML;

function display() {
    var i;
    var table =
        `<thead class="thead-dark"><tr><th>student name</th><th>university name</th>
        </tr></thead>`;
        
    var x = xmlDoc.getElementsByTagName("christ")

    // Start to fetch the data by using TagName 
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("stu-name")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("stu-university")[0]
            .childNodes[0].nodeValue + "</td></tr>"
    }
    // Print the xml data in table form
    document.getElementById("id").innerHTML = table;
}