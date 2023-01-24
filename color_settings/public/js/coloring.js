$(window).on('load', function() {
    frappe.after_ajax(function () {  
        console.log('ji') 
        console.log(frappe.boot.color_settings.navbar_background_color)
        if (frappe.boot.color_settings.navbar_background_color) {
            $('.navbar').css('background-color',frappe.boot.color_settings.navbar_background_color)
        } 
        if (frappe.boot.color_settings.container_bg_color) {
            $(':root').css('--bg-color', frappe.boot.color_settings.container_bg_color);
        }
        if (frappe.boot.color_settings.container_bg_color) {
            $(':root').css('--fg-color', frappe.boot.color_settings.card_color);
        }
        // $(`<div class="novaBrandingClass"><center><p class="novaBrandingText">Powered by</p> </center><a class="novaBrandingAttribute" href="https://novacept.io/" target="_blank"><img class="novaBrandingImage" src="https://i.postimg.cc/xXsCgdFB/color-Logo-Novacept.png" alt="logo" width="80"></a></div>`).insertAfter("#navbar-breadcrumbs")   
    })
})
console.log('hi')