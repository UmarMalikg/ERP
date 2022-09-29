$(function(){
    
        $(".hide-leave").hide();
        $(".employee-edit").hide();
    $(".search-icon").click(function(){
        $(".hide-leave").show();
        $(".employee-edit").show();
    })
    $(".hamburger").click(function(){
        $(".sidebar").toggle();
    });
    // Side bar
    $(".hide").click(function(){
        $(".hide").hide();
    });
    // Employee
    $(".Employees").click(function(){
        $(".hide").hide();
        $(".show-employee").show();
    });
    // ADD/EDIT EMPLOYEE
    $(".add-edit-employee").click(function(){
        $(".hide").hide();
        $(".show-employee").show();
    });
    // Organization
    $(".organization").click(function(){
        $(".hide").hide();
        $(".show-organization").show();
    });
    // accountant
    $(".accountant").click(function(){
        $(".hide").hide();
        $(".show-accounts").show();
    });
    //Recruitement
    $(".recruitement").click(function(){
        $(".hide").hide();
        $(".show-recruitment").show();
    });
    // Employee Form
    // $(".opening").hide();
    // basic info
    $(".basic").click(function(){
        $(".des-basic").toggle();
    });
    // work info
    $(".work").click(function(){
        $(".des-work").toggle();
    });
    // banking info
    $(".bank").click(function(){
        $(".des-bank").toggle();
    });

    // emergency contact inof
    $(".emer-contact").click(function(){
        $(".des-emer-contact").toggle();
    });

    //show-hide form

    $(".emp-main-line").hide();
    $(".emp-char").hide();
    $(".added-employee").hide();
    $(".add-employee").click(function(){
        $(".added-employee").show();
        $(".emp-main-line").show();
        $(".emp-char").show();
    });

    //hiding and displaying sidebar
    
 });