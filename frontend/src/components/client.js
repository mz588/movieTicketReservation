// export const __esModule = true;
// import { FormServiceClient } from "./proto/FormServiceClientPb";
// import $ from "jquery";
// import { FormRequest, LoginRequest, SignupRequest, SignupForm, LoginForm } from "./proto/form_pb";

// const FormApp = /** @class */ (function () {
//     class FormApp {
//         constructor(formService) {
//             this.formService = formService;
//         }
//         echo(msg) {
//             var request = new FormRequest();
//             request.setEmail(msg);
//             request.setPassword("123");
//             var call = this.formService.echo(request, {}, function (err, response) {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 }
//                 else {
//                     console.log("Received data from client.");
//                     console.log(response === null || response === void 0 ? void 0 : response.getMessage());
//                 }
//             });
//         }
//         loginProto(form) {
//             var request = new LoginRequest();
//             request.setForm(form);
//             var call = this.formService.login(request, {}, function (err, response) {
//                 if (err) {
//                     console.log(err);
//                     return null;
//                 } else {
//                     var result = document.getElementById("result");
//                     if (!response.getSuccess()) {
//                         // show the error message in red color
//                         result.innerHTML = `<span style="color:red">${response.getMessage()}</span>`;
//                     } else {
//                         // show success, and redirect to the login page in 10sec
//                         result.innerHTML = `<span style="color:green"><p>${"Successfully logged in!"}</br>${"Redirecting to the home page..."}</p></span>`;
//                         return 
//                     }
//                 }
//             });
//         }
//         signupProto(form) {
//             var request = new SignupRequest();
//             request.setForm(form);
//             var call = this.formService.signup(request, {}, function (err, response) {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 } else {
//                     var result = document.getElementById("result");
//                     if (!response.getSuccess()) {
//                         // show the error message in red color
//                         result.innerHTML = `<span style="color:red">${response.getMessage()}</span>`;
//                     } else {
//                         // show success, and redirect to the login page in 10sec
//                         result.innerHTML = `<span style="color:green"><p>${"Successfully signed up!"}</br>${"Redirecting to the login page..."}</p></span>`;
//                         setTimeout(() => { window.location.href = "./login.html"; }, FormApp.INTERVAL);
//                     }
//                 }
//             });
//         }
//         signup() {
//             // Use jquery to get the form with id == signup_form
//             var formData = $("#signup_form").serializeArray();
//             var form = new SignupForm();
//             var name = formData[0].value.trim();
//             var email = formData[1].value.trim();
//             var password1 = formData[2].value.trim();
//             var password2 = formData[3].value.trim();
//             form.setEmail(email);
//             form.setName(name);
//             form.setPassword1(password1);
//             form.setPassword2(password2);
//             if (!form)
//                 return false;
//             this.signupProto(form);
//         }
//         login(e) {
//             var formData = $("#login_form").serializeArray();
//             var email = formData[0].value.trim();
//             var password = formData[1].value.trim();
//             var form = new LoginForm();
//             form.setEmail(email);
//             form.setPassword(password);
//             if (!form)
//                 return false;
//             return this.loginProto(form);
//         }
//     }





//     FormApp.INTERVAL = 3000; // ms
//     return FormApp;
// }());

// window.onload = function() {

//     var formService = new FormServiceClient('http://localhost:8080', null, null);
//     var formApp = new FormApp(formService);

//     var signupform = document.getElementById("signup_form");
//     console.log("signupform: " + signupform);
//     if(signupform !== null) {
//         signupform.addEventListener('submit', (e) => {
//             e.preventDefault();
//             formApp.signup();
//         })
//     }

//     var loginform = document.getElementById("login_form");
//     console.log("loginform: "+loginform);
//     if(loginform !== null) {
//         loginform.addEventListener('submit', (e)=>{
//             e.preventDefault();
//             formApp.login();
//         })
//     }
    
// }

// export default FormApp;