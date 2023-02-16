$(window).on('load', function() {
    frappe.after_ajax(function () {  
        $(`<div class="novaBrandingClass"><center><p class="novaBrandingText">Powered by</p> </center><a class="novaBrandingAttribute" href="https://novacept.io/" target="_blank"><img class="novaBrandingImage" src="https://i.postimg.cc/xXsCgdFB/color-Logo-Novacept.png" alt="logo" width="80"></a></div>`).insertAfter("#navbar-breadcrumbs")   
        if (frappe.boot.color_settings.navbar_background_color) {
            $(':root').css('--navbar-bg',frappe.boot.color_settings.navbar_background_color)
        } 
        if (frappe.boot.color_settings.primary) {
            $(':root').css('--nova-primary',frappe.boot.color_settings.primary)
        } 
        if (frappe.boot.color_settings.font_color) {
            $(':root').css('--n-white',frappe.boot.color_settings.font_color)
        } 
        if (frappe.boot.color_settings.secondary) {
            $(':root').css('--nova-secondary',frappe.boot.color_settings.secondary)
        }
        if (frappe.boot.color_settings.header_logo_width) {
            $('.app-logo').css('width',frappe.boot.color_settings.header_logo_width+'px');
        }
        if (frappe.boot.color_settings.header_logo_height) {
            $('.app-logo').css('max-height',frappe.boot.color_settings.header_logo_height+'px');
        } 
        if (frappe.boot.color_settings.container_bg_color) {
            $(':root').css('--bg-color', frappe.boot.color_settings.container_bg_color);
        }
        if (frappe.boot.color_settings.card_color) {
            $(':root').css('--fg-color', frappe.boot.color_settings.card_color);
        }
        if (frappe.boot.color_settings.card_color) {
            $('.layout-main-section').css('--fg-color', frappe.boot.color_settings.card_color);
        }
        if (frappe.boot.color_settings.container_bg_color && frappe.boot.color_settings.background_colour_right) {
            $(':root').css('--bg-gradiant',(`linear-gradient(90deg,${frappe.boot.color_settings.container_bg_color},${frappe.boot.color_settings.background_colour_right}`));
        }
    })
})