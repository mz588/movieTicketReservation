"use strict";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
exports.__esModule = true;
var FormServiceClientPb_1 = require("./proto/FormServiceClientPb");
var $ = require("jquery");
var form_pb_1 = require("./proto/form_pb");
var FormApp = /** @class */ (function () {
    function FormApp(formService) {
        this.formService = formService;
    }
    FormApp.prototype.echo = function (msg) {
        var request = new form_pb_1.FormRequest();
        request.setEmail(msg);
        request.setPassword("123");
        var call = this.formService.echo(request, {}, function (err, response) {
            if (err) {
                console.log(err);
                return;
            }
            else {
                console.log("Received data from client.");
                console.log(response === null || response === void 0 ? void 0 : response.getMessage());
            }
        });
    };

    FormApp.prototype.loginProto = function (form) {
        var request = new form_pb_1.LoginRequest();
        request.setForm(form);
        var call = this.formService.login(request, {}, function (err, response) {
            if (err) {
                console.log(err);
                return;
            } else {
                var result = document.getElementById("result");
                if(!response.getSuccess()) {
                    // show the error message in red color
                    result.innerHTML = `<span style="color:red">${response.getMessage()}</span>`
                } else {
                    // show success, and redirect to the login page in 10sec
                    result.innerHTML = `<span style="color:green"><p>${"Successfully logged in!"}</br>${"Redirecting to the home page..."}</p></span>`
                    setTimeout(() => {window.location.href = "./home.html"}, FormApp.INTERVAL);
                }
            }
        })
    };

    FormApp.prototype.signupProto = function (form) {
        var request = new form_pb_1.SignupRequest();
        request.setForm(form);
        var call = this.formService.signup(request, {}, function (err, response) {
            if (err) {
                console.log(err);
                return;
            } else {
                var result = document.getElementById("result");
                if(!response.getSuccess()) {
                    // show the error message in red color
                    result.innerHTML = `<span style="color:red">${response.getMessage()}</span>`
                } else {
                    // show success, and redirect to the login page in 10sec
                    result.innerHTML = `<span style="color:green"><p>${"Successfully signed up!"}</br>${"Redirecting to the login page..."}</p></span>`
                    setTimeout(() => {window.location.href = "./login.html"}, FormApp.INTERVAL);
                }
            }
        });
    };

    FormApp.prototype.signup = function () {
        // Use jquery to get the form with id == signup_form
        var formData = $("#signup_form").serializeArray();
        var form = new form_pb_1.SignupForm();
        var name = formData[0].value.trim();
        var email = formData[1].value.trim();
        var password1 = formData[2].value.trim();
        var password2 = formData[3].value.trim();
        form.setEmail(email);
        form.setName(name);
        form.setPassword1(password1);
        form.setPassword2(password2);
        if(!form) return false;
        this.signupProto(form);
    };

    FormApp.prototype.login = function (e) {
        var formData = $("#login_form").serializeArray();
        var email = formData[0].value.trim();
        var password = formData[1].value.trim();
        var form = new form_pb_1.LoginForm();
        form.setEmail(email);
        form.setPassword(password);
        if(!form) return false;
        this.loginProto(form);
    };

    FormApp.INTERVAL = 3000; // ms
    return FormApp;
}());

window.onload = function() {
    var formService = new FormServiceClientPb_1.FormServiceClient('http://localhost:8080', null, null);
    var formApp = new FormApp(formService);

    var signupform = document.getElementById("signup_form");
    console.log("signupform: " + signupform);
    if(signupform !== null) {
        signupform.addEventListener('submit', (e) => {
            e.preventDefault();
            formApp.signup();
        })
    }

    var loginform = document.getElementById("login_form");
    console.log("loginform: "+loginform);
    if(loginform !== null) {
        loginform.addEventListener('submit', (e)=>{
            e.preventDefault();
            formApp.login();
        })
    }
    
}