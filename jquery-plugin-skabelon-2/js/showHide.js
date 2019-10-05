(function ($) {
    'use strict';

    // Tilføjer plugin til fn så det kan bruges normalt
    $.fn.showHide = function (options) {

        // Options
        // Sætter default options, hvis der ikke sendes noget med
        let defaultOptions = {

            opacitys: {
                opacity: '100',
                fontSize: '32pt',
                bgColor: 'red'
            }
        };


        let opts = $.extend(true, {}, defaultOptions, options);

        // Går gennem alle elementer der matcher selector = idx=index, el=element
        return this.each(function (idx, el) {
            $(el).css({
                'background-color': opts.opacitys.bgColor,
                'font-size': opts.opacitys.fontSize,
                'opacity': opts.opacitys.opacity
            });
            $("#show").click(function () {
                $(".text").css({
                    "font-size": "14pt",
                    "opacity": "40",
                    "background-color": "blue"
                });
                $("#hide").click(function () {
                    $(".text").css({

                        'background-color': opts.opacitys.bgColor,
                        'font-size': opts.opacitys.fontSize,
                        'opacity': opts.opacitys.opacity
                    });

                });
            });
        });
    }

})(jQuery);
