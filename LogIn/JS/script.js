//1. select HTML elements
//email, password, content, submit-btn, err, logged-in
const email = document.querySelector(".email")
console.log("email: ", email)

const password = document.querySelector(".password")
console.log("password: ", password)

const content = document.querySelector(".content")
console.log("content: ", content)

const submitBtn = document.querySelector(".submit-btn")
console.log("submitBtn: ", submitBtn)

const err = document.querySelector(".err")
console.log("err: ", err)

const loggedIn = document.querySelector(".logged-in")
console.log("logged-in: ", loggedIn)

//2. Add click event to button submit-btn
submitBtn.addEventListener('click', submitClicked)
function submitClicked () {
    console.log("Button clicked")
    //3. Check if email.value = "user@gmail.com" and
    //password.value = "user"
    //change dispaly style of content to none
    //dispaly content of logged-in class
    //else 
    //display err: put textContent to err

    if(email.value === "user@gmail.com" && password.value === "user"){
        content.style.display = "none"
        loggedIn.style.display = "flex"
    }else {
        err.textContent = `Email or password incorrect`
        // setTimeout(function1, milliseconds)
        //after milliseconds executes function1
        setTimeout(()=> {
            err.textContent = ""
        }, 4000)
    }
    // if(email.value === "user@gmail.com"){
    //     if( password.value === "user"){
    //         content.style.display = "none"
    //         loggedIn.style.display = "flex"
    //     }
    //     else {
    //         err.textContent = `Password incorrect !`
    //     }
    // }else {
    //     if( password.value === "user"){
    //         err.textContent = `Email incorrect !`
    //     }
    //     else {
    //         err.textContent = `Email and password incorrect !`
    //     }
    // }
}

