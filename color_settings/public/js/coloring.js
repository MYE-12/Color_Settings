$(window).on('load', function () {
    frappe.after_ajax(function () {
        if (frappe.boot.color_settings.navbar_background_color == "#ffffff" ) {
        // console.log('white')
        $(`<div class="novaBrandingClass"><center><p class="novaBrandingText">Powered by</p> </center><a class="novaBrandingAttribute" href="https://novacept.io/" target="_blank"><img class="novaBrandingImage" src="https://i.postimg.cc/xXsCgdFB/color-Logo-Novacept.png" alt="logo" width="80"></a></div>`).insertAfter("#navbar-breadcrumbs")
        }
        else{
            // console.log('black')
        $(`<div class="novaBrandingClass"><center><p class="novaBrandingText">Powered by</p> </center><a class="novaBrandingAttribute" href="https://novacept.io/" target="_blank"><img class="novaBrandingImage" src="https://i.postimg.cc/w74t2KCC/white-nova-logo.png" alt="logo" width="80"></a></div>`).insertAfter("#navbar-breadcrumbs")
            
        }
        if (frappe.boot.color_settings.navbar_background_color) {
            $(':root').css('--navbar-bg', frappe.boot.color_settings.navbar_background_color)
            const hex2rgb = (hex) => { 
                if (hex.length === 4) { 
                return fullHex(hex); 
            } 
            const r = parseInt(hex.slice(1, 3), 16); 
            // console.log(r)
            const g = parseInt(hex.slice(3, 5), 16); 
            const b = parseInt(hex.slice(5, 7), 16); 
            return { r, g, b }; 
            }
            const rgb = hex2rgb(frappe.boot.color_settings.navbar_background_color)
            // console.log(rgb)
            $(':root').css('--red',rgb.r)
            $(':root').css('--green',rgb.g)
            $(':root').css('--blue',rgb.b)
        
        }
        if (frappe.boot.color_settings.primary) {
            $(':root').css('--nova-primary', frappe.boot.color_settings.primary)
        }
        if (frappe.boot.color_settings.secondary) {
            $(':root').css('--nova-secondary', frappe.boot.color_settings.secondary)
            const hex2rgb1 = (hex1) => { 
                if (hex1.length === 4) { 
                return fullHex1(hex1); 
            } 
            const r = parseInt(hex1.slice(1, 3), 16); 
            const g = parseInt(hex1.slice(3, 5), 16); 
            const b = parseInt(hex1.slice(5, 7), 16); 
            return { r, g, b }; 
            }
            const rgb = hex2rgb1(frappe.boot.color_settings.secondary)
            $(':root').css('--red1',rgb.r)
            $(':root').css('--green1',rgb.g)
            $(':root').css('--blue1',rgb.b)
        }
        if (frappe.boot.color_settings.header_logo_width) {
            $('.app-logo').css('width', frappe.boot.color_settings.header_logo_width + 'px');
        }
        if (frappe.boot.color_settings.header_logo_height) {
            $('.app-logo').css('max-height', frappe.boot.color_settings.header_logo_height + 'px');
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
            $(':root').css('--bg-gradiant', (`linear-gradient(90deg,${frappe.boot.color_settings.container_bg_color},${frappe.boot.color_settings.background_colour_right}`));
        }

    })
})