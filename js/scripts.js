(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
        $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);




//select dates
function enableMes(mes){
    resetBg();
    //janeiro
    if(mes == 'j1'){
        //$('.day[data-date="1514764800000"]').addClass('actferiado');
        $('.day[data-date="1515110400000"]').addClass('actvencimento');
        $('.day[data-date="1515196800000"]').addClass('actsorteio');
        $('.day[data-date="1515542400000"]').addClass('actassembleia');
        //$('.day[data-date="1515801600000"]').addClass('actsorteioponta');
       // $('.day[data-date="1516147200000"]').addClass('actsorteioponta');
    }
    if(mes == 'j2'){
        //$('.day[data-date="1514764800000"]').addClass('actferiado');
        $('.day[data-date="1515542400000"]').addClass('actvencimento');
        $('.day[data-date="1515801600000"]').addClass('actsorteio');
        $('.day[data-date="1516147200000"]').addClass('actassembleia');
    }
    //fevereiro
    if(mes == 'f1'){
        //$('.day[data-date="1518480000000"]').addClass('actferiado');
        $('.day[data-date="1517788800000"]').addClass('actvencimento');
        $('.day[data-date="1518220800000"]').addClass('actsorteio');
        $('.day[data-date="1518566400000"]').addClass('actassembleia');
    }
    if(mes == 'f2'){
        $('.day[data-date="1518393600000"]').addClass('actvencimento');
        $('.day[data-date="1518825600000"]').addClass('actsorteio');
        $('.day[data-date="1519171200000"]').addClass('actassembleia');
    }
    //marco
    if(mes == 'm1'){
        $('.day[data-date="1520208000000"]').addClass('actvencimento');
        $('.day[data-date="1520640000000"]').addClass('actsorteio');
        $('.day[data-date="1520985600000"]').addClass('actassembleia');
    }
    if(mes == 'm2'){
        $('.day[data-date="1520812800000"]').addClass('actvencimento');
        $('.day[data-date="1521244800000"]').addClass('actsorteio');
        $('.day[data-date="1521590400000"]').addClass('actassembleia');
    }
    //abril
    if(mes == 'a1'){
        $('.day[data-date="1522886400000"]').addClass('actvencimento');
        $('.day[data-date="1523059200000"]').addClass('actsorteio');
        $('.day[data-date="1523404800000"]').addClass('actassembleia');
    }
    if(mes == 'a2'){
        $('.day[data-date="1523318400000"]').addClass('actvencimento');
        $('.day[data-date="1523664000000"]').addClass('actsorteio');
        $('.day[data-date="1524009600000"]').addClass('actassembleia');
    }
    //maio
    if(mes == 'mm1'){
        $('.day[data-date="1525651200000"]').addClass('actvencimento');
        $('.day[data-date="1526083200000"]').addClass('actsorteio');
        $('.day[data-date="1526428800000"]').addClass('actassembleia');
    }
    if(mes == 'mm2'){
        $('.day[data-date="1525910400000"]').addClass('actvencimento');
        $('.day[data-date="1526688000000"]').addClass('actsorteio');
        $('.day[data-date="1527033600000"]').addClass('actassembleia');
    }
    //junho
    if(mes == 'jn1'){
        $('.day[data-date="1528156800000"]').addClass('actvencimento');
        $('.day[data-date="1528502400000"]').addClass('actsorteio');
        $('.day[data-date="1528848000000"]').addClass('actassembleia');
    }
    if(mes == 'jn2'){
        $('.day[data-date="1528675200000"]').addClass('actvencimento');
        $('.day[data-date="1529107200000"]').addClass('actsorteio');
        $('.day[data-date="1529452800000"]').addClass('actassembleia');
    }
    //julho
    if(mes == 'jl1'){
        $('.day[data-date="1530748800000"]').addClass('actvencimento');
        $('.day[data-date="1530921600000"]').addClass('actsorteio');
        $('.day[data-date="1531267200000"]').addClass('actassembleia');
    }
    if(mes == 'jl2'){
        $('.day[data-date="1531180800000"]').addClass('actvencimento');
        $('.day[data-date="1531526400000"]').addClass('actsorteio');
        $('.day[data-date="1531872000000"]').addClass('actassembleia');
    }
    //agosto
    if(mes == 'ag1'){
        $('.day[data-date="1533513600000"]').addClass('actvencimento');
        $('.day[data-date="1533945600000"]').addClass('actsorteio');
        $('.day[data-date="1534291200000"]').addClass('actassembleia');
    }
    if(mes == 'ag2'){
        $('.day[data-date="1533859200000"]').addClass('actvencimento');
        $('.day[data-date="1534550400000"]').addClass('actsorteio');
        $('.day[data-date="1534896000000"]').addClass('actassembleia');
    }
    //setembro
    if(mes == 's1'){
        $('.day[data-date="1536105600000"]').addClass('actvencimento');
        $('.day[data-date="1536364800000"]').addClass('actsorteio');
        $('.day[data-date="1536710400000"]').addClass('actassembleia');
    }
    if(mes == 's2'){
        $('.day[data-date="1536278400000"]').addClass('actvencimento');
        $('.day[data-date="1536537600000"]').addClass('actsorteio');
        $('.day[data-date="1536969600000"]').addClass('actassembleia');
    }
    //outubro
    if(mes == 's1'){
        $('.day[data-date="1538697600000"]').addClass('actvencimento');
        $('.day[data-date="1538784000000"]').addClass('actsorteio');
        $('.day[data-date="1539129600000"]').addClass('actassembleia');
    }
    if(mes == 's2'){
        $('.day[data-date="1539129600000"]').addClass('actvencimento');
        $('.day[data-date="1539388800000"]').addClass('actsorteio');
        $('.day[data-date="1539734400000"]').addClass('actassembleia');
    }
    //novembro
    if(mes == 'n1'){
        $('.day[data-date="1541376000000"]').addClass('actvencimento');
        $('.day[data-date="1541808000000"]').addClass('actsorteio');
        $('.day[data-date="1542153600000"]').addClass('actassembleia');
    }
    if(mes == 'n2'){
        $('.day[data-date="1541980800000"]').addClass('actvencimento');
        $('.day[data-date="1542412800000"]').addClass('actsorteio');
        $('.day[data-date="1542758400000"]').addClass('actassembleia');
    }
    //dezembro
    if(mes == 'd1'){
        $('.day[data-date="1543968000000"]').addClass('actvencimento');
        $('.day[data-date="1544227200000"]').addClass('actsorteio');
        $('.day[data-date="1544572800000"]').addClass('actassembleia');
    }
    if(mes == 'd2'){
        $('.day[data-date="1544400000000"]').addClass('actvencimento');
        $('.day[data-date="1544832000000"]').addClass('actsorteio');
        $('.day[data-date="1545177600000"]').addClass('actassembleia');
    }
}
function resetBg(){
    $('.day').removeClass('actvencimento');
    $('.day').removeClass('actsorteio');
    $('.day').removeClass('actlimitelance');
    $('.day').removeClass('actassembleia');
    $('.day').removeClass('actferiado');
    $('.day').removeClass('actsorteioponta');
}

function selecionaCalendario(mes){
    //alert(mes);
    $('.mes').hide();
    if(mes == '1515283200000' || mes == '1517097600000'){
        $('.mes1').show();
    }
    if(mes == '1518307200000' || mes == '1519516800000'){
        $('.mes2').show();
    }
    if(mes == '1520726400000' || mes == '1521936000000'){
        $('.mes3').show();
    }
    if(mes == '1523145600000' || mes == '1524960000000'){
        $('.mes4').show();
    }
    if(mes == '1525564800000' || mes == '1527379200000'){
        $('.mes5').show();
    }
    if(mes == '1528588800000' || mes == '1529798400000'){
        $('.mes6').show();
    }
    if(mes == '1531008000000' || mes == '1532822400000'){
        $('.mes7').show();
    }
    if(mes == '1533427200000' || mes == '1535241600000'){
        $('.mes8').show();
    }
    if(mes == '1536451200000' || mes == '1538265600000'){
        $('.mes9').show();
    }
    if(mes == '1538870400000' || mes == '1540684800000'){
        $('.mes10').show();
    }
    if(mes == '1541894400000' || mes == '1543104000000'){
        $('.mes11').show();
    }
    if(mes == '1544313600000' || mes == '1546128000000'){
        $('.mes12').show();
    }
}

function clicktable(){
    $('#datetimepicker12').datepicker('update');
}

$(function () {
    $('#datetimepicker12').datepicker({ language: "pt-BR"}).on('changeDate', function(e) {
        //janeiro
        if(e.date.getMonth() == 12 && e.date.getDate() == 5){
            $('.day[data-date="1515110400000"]').addClass('actvencimento');
            $('.day[data-date="1504915200000"]').addClass('actsorteio');
            $('.day[data-date="1505260800000"]').addClass('actassembleia');
        }
        //setembro
        if(e.date.getMonth() == 8 && e.date.getDate() == 5){
            $('.day[data-date="1504569600000"]').addClass('actvencimento');
            $('.day[data-date="1504915200000"]').addClass('actsorteio');
            $('.day[data-date="1505260800000"]').addClass('actassembleia');
        }
        if(e.date.getMonth() == 8 && e.date.getDate() == 11){
            $('.day[data-date="1505088000000"]').addClass('actvencimento');
            $('.day[data-date="1505520000000"]').addClass('actsorteio');
            $('.day[data-date="1505865600000"]').addClass('actassembleia');
        }
        //outubro
        if(e.date.getMonth() == 9 && e.date.getDate() == 5){
            $('.day[data-date="1507161600000"]').addClass('actvencimento');
            $('.day[data-date="1507334400000"]').addClass('actsorteio');
            $('.day[data-date="1507680000000"]').addClass('actassembleia');
        }
        if(e.date.getMonth() == 9 && e.date.getDate() == 10){
            $('.day[data-date="1507593600000"]').addClass('actvencimento');
            $('.day[data-date="1507939200000"]').addClass('actsorteio');
            $('.day[data-date="1508284800000"]').addClass('actassembleia');
        }
        //novembro
        if(e.date.getMonth() == 10 && e.date.getDate() == 6){
            $('.day[data-date="1509926400000"]').addClass('actvencimento');
            $('.day[data-date="1510358400000"]').addClass('actsorteio');
            $('.day[data-date="1510790400000"]').addClass('actassembleia');
        }
        if(e.date.getMonth() == 10 && e.date.getDate() == 10){
            $('.day[data-date="1510272000000"]').addClass('actvencimento');
            $('.day[data-date="1510963200000"]').addClass('actsorteio');
            $('.day[data-date="1511308800000"]').addClass('actassembleia');
        }
        //dezembro
        if(e.date.getMonth() == 11 && e.date.getDate() == 5){
            $('.day[data-date="1512432000000"]').addClass('actvencimento');
            $('.day[data-date="1512777600000"]').addClass('actsorteio');
            $('.day[data-date="1513123200000"]').addClass('actassembleia');
        }
        if(e.date.getMonth() == 11 && e.date.getDate() == 11){
            $('.day[data-date="1512950400000"]').addClass('actvencimento');
            $('.day[data-date="1513382400000"]').addClass('actsorteio');
            $('.day[data-date="1513728000000"]').addClass('actassembleia');
        }
    });
});

jQuery(document).ready(function(){
    jQuery('#edtGrupo').blur(function(){
        var grupo = jQuery('#edtGrupo').val();
        var tam = grupo.length;

        switch (tam){
            case 1:
                jQuery('#edtGrupo').val('00000'+grupo);
                break;
            //
            case 2:
                jQuery('#edtGrupo').val('0000'+grupo);
                break;
            //
            case 3:
                jQuery('#edtGrupo').val('000'+grupo);
                break;
            //
            case 4:
                jQuery('#edtGrupo').val('00'+grupo);
                break;
            //
            case 5:
                jQuery('#edtGrupo').val('0'+grupo);
                break;
            //
            case 6:
                jQuery('#edtGrupo').val(grupo);
                break;

        }
    });
});
jQuery(document).ready(function(){
    jQuery('#edtCota').blur(function(){
        var cota = jQuery('#edtCota').val();
        var tam = cota.length;

        switch (tam){
            case 1:
                jQuery('#edtCota').val('000'+cota);
                break;
            //
            case 2:
                jQuery('#edtCota').val('00'+cota);
                break;
            //
            case 3:
                jQuery('#edtCota').val('0'+cota);
                break;
            //
            case 4:
                jQuery('#edtCota').val(cota);
                break;
            //
        }
    });
});