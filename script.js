
        // let body = document.getElementsByTagName("body")[0]
        // let loginpage = document.createElement("div");
        // let inputvalue = document.createElement("div");
        // let loginForm = document.createElement("div");
        // let loginheading = document.createElement("h1");
        // let usernamelabel = document.createElement("label");
        // let username = document.createElement("input");
        // let passwordlabel = document.createElement("label");
        // let password = document.createElement("input");
        // let loginbutton = document.createElement("button");
        // inputvalue.className = "inputvalue";

        // body.append(loginpage);
        // body.style.display = "flex";
        // body.style.justifyContent = "center";
        // body.style.alignItems = "center";
        // body.style.height = "100vh";
        // body.style.backgroundColor = "rgb(13, 0, 255)";
        
        // loginpage.append(loginForm);
        // loginForm.style.display = "flex";
        // loginForm.style.flexDirection = "column";
        // loginForm.style.backgroundColor = "white";
        // loginForm.style.padding = "30px";
        // loginForm.style.borderRadius = "10px";
        // loginForm.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";

        // loginheading.innerHTML = "login page";

        // loginheading.style.textAlign = "center";
        // loginheading.style.textTransform = "uppercase";
        // loginForm.append(inputvalue);
        // loginForm.append(loginheading);
        // usernamelabel.innerHTML = "UserName";
        // usernamelabel.style.fontSize = "20px";
        // usernamelabel.setAttribute("for", "username");

        // loginForm.append(usernamelabel);
        // username.setAttribute("type","text");
        // username.setAttribute("placeholder","username");
        // username.setAttribute("id","username");
        // username.setAttribute("name","username");
        // username.setAttribute("value","");
        // username.setAttribute("required","");

        // loginForm.append(username);
        // username.style.width = "250px";
        // username.style.height = "35px";
        // username.style.margin = "10px 0";
        // username.style.padding = "5px";
        // username.style.borderRadius = "5px";
        // username.style.border = "1px solid gray";
        // passwordlabel.innerHTML = "password";
        // passwordlabel.style.fontSize = "20px";
        // passwordlabel.setAttribute("for", "password");

        // loginForm.append(passwordlabel);
        // password.setAttribute("type","password");
        // password.setAttribute("placeholder","password");
        // password.setAttribute("id","password");
        // password.setAttribute("name","password");
        // password.setAttribute("value","");
        // password.setAttribute("required","");



        // loginForm.append(password);
        // password.style.width = "250px";
        // password.style.height = "35px";
        // password.style.margin = "10px 0";
        // password.style.padding = "5px";
        // password.style.borderRadius = "5px";
        // password.style.border = "1px solid gray";

        // loginbutton.setAttribute("onclick","inputsubmit()");
        // loginbutton.textContent = "Login";
        // loginbutton.type = "submit";
        // loginbutton.style.height = "40px";
        // loginbutton.style.marginTop = "15px";
        // loginbutton.style.borderRadius = "20px";
        // loginbutton.style.border = "none";
        // loginbutton.style.backgroundColor = "rgb(239, 14, 51)";
        // loginbutton.style.color = "white";
        // loginbutton.style.cursor = "pointer";

        // loginForm.append(loginbutton);

        // button.textContent = "Login";
        // button.type = "submit";
        // button.style.marginTop = "15px";
        // button.style.height = "40px";
        // button.style.borderRadius = "20px";
        // button.style.border = "none";
        // button.style.backgroundColor = "rgb(239, 14, 51)";
        // button.style.color = "white";
        // button.style.cursor = "pointer";

        

        
        // function inputsubmit(){
        //     let username = document.getElementById("username").value;
        //     let password = document.getElementById("password").value;
            
            
        //     if(username == "kartik" && password == "1234"){
        //         let value = document.getElementsByClassName("inputvalue");
        //         value[0].innerHTML = "login successfull";
        //         value[0].style.textAlign = "center";
        //         value[0].style.color = "green";
        //     }
        //     else if(username == "" || password == ""){
        //         let value = document.getElementsByClassName("inputvalue");
        //         value[0].innerHTML = "Please enter username and password";
        //         value[0].style.textAlign = "center";
        //         value[0].style.color = "red";
        //     }
        //     else{
        //         let value = document.getElementsByClassName("inputvalue");
        //         value[0].innerHTML = "login failed";
        //         value[0].style.textAlign = "center";
        //         value[0].style.color = "red";
        //     }



        // }



let registerform = document.querySelector(".register-form");
let name = document.getElementById("name");
let username = document.getElementById("username");
let password = document.getElementById("password");
let re_password = document.getElementById("re-password");
let table = document.querySelector("table");

let error = document.createElement("div");
error.style.marginTop = "10px";
error.style.fontWeight = "bold";
registerform.append(error);

// ❌ Removed localStorage
let data = [];   // Only array

function displayData() {
    table.querySelectorAll("tr:not(:first-child)").forEach(row => row.remove());

    data.forEach(function(user, index) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td><button onclick="deletedata(${index})">Delete</button></td>
            <td><button onclick="updatedata(${index})">Update</button></td>
        `;

        table.append(row);
    });
}

registerform.addEventListener("submit", function(e){
    e.preventDefault();

    if(name.value === "" || username.value === "" || password.value === "" || re_password.value === ""){
        error.textContent = "All fields required!";
        error.style.color = "red";
        return;
    }

    if(password.value !== re_password.value){
        error.textContent = "Passwords not match!";
        error.style.color = "red";
        return;
    }

    let obj = {
        name: name.value,
        username: username.value,
        password: password.value
    };

    data.push(obj);

    error.textContent = "Registration Successful!";
    error.style.color = "green";

    registerform.reset();

    displayData();
});

function deletedata(index){
    data.splice(index, 1);
    error.textContent = "Deleted Successfully!";
    error.style.color = "green";
    displayData();
}

function updatedata(index){
    name.value = data[index].name;
    username.value = data[index].username;
    password.value = data[index].password;
    re_password.value = data[index].password;

    data.splice(index, 1);

    error.textContent = "Now update and submit!";
    error.style.color = "blue";

    displayData();
}