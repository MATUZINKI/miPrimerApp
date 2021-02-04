$(document).ready(function(){

    var e1;
    var e2;
    var ptos;
    var acum_e1 = 0;
    var acum_e2 = 0;

// eventos
    $('#24j, #30j').on('click', function(){
        fnEquipo(this.id);
    });
    $('#iniciar').on('click', function(){
        fnIrSegundaPantalla();
    });

    $('#fin').on('click', function(){
        ocultar_pantalla(2);  
    });

    $('#sumae1').on('click', function(){
        fnSumaPtos(1);
    })
    $('#sumae2').on('click', function(){
        fnSumaPtos(2);
    })

    $('#restae1').on('click', function(){
        fnRestaPtos(1);
    })
    $('#restae2').on('click', function(){
        fnRestaPtos(2);
    })


// funciones
    function fnEquipo(boton_id){
        var ident = boton_id;
        if (ident == "24j"){
            $('#24j').attr('class', 'seleccionado');
            $('#30j').attr('class', 'no_seleccionado');
        } else {
            $('#30j').attr('class', 'seleccionado');
            $('#24j').attr('class', 'no_seleccionado');
        }
    };

    function fnIrSegundaPantalla(){
        obtener_equipos();
        obtener_cantPtos();
        ocultar_pantalla(1);      
        cargar_pantalla2();
        borrar_pantalla1();
    };
    
    function obtener_equipos(){
        e1 = $("#e1").val();
        e2 = $("#e2").val();
    };
    
    function obtener_cantPtos(){
        if ($('#30j').hasClass('seleccionado')){
            ptos = 30;
        } else {
            ptos = 24;
        };
    };
    
    function ocultar_pantalla(nro){
        if (nro == 1){
            if(($("#e1").val() != "")){
                if ($("#e2").val() != ""){
                    $('#pantalla1').attr("class", "oculto");
                    $('#pantalla2').attr("class", "visible"); 
                } else {
                    // $('#e2').attr('value', 'Requerido'); no me funcionooo!
                    alert("Nombre de Equipo 2 es Requerido");
                };
            } else {
                // $('#e1').attr('value', 'Requerido');
                alert("Nombre de Equipo 1 es Requerido");
            };
        } else {
            $('#pantalla2').attr("class", "oculto");
            $('#pantalla1').attr("class", "visible"); 
            borrar_pantalla2();
        };
    };
    
    function cargar_pantalla2(){
        $('#equipo1').text(e1);
        $('#equipo2').text(e2);
        $('#tope').text('a '+ptos);
        $('#resultado_equipo1').text(acum_e1);
        $('#resultado_equipo2').text(acum_e2);
    };

    function borrar_pantalla1(){
        $("#e1").val('');
        $("#e2").val('');
    };

    function borrar_pantalla2(){
        console.log("entro a borrar p2");
        $('#equipo1').text("");
        $('#equipo2').text("");
        $('#tope').text("");
        $('#resultado_equipo1').text("");
        $('#resultado_equipo2').text("");
        acum_e1 = 0;
        acum_e2 = 0;
        ptos = 0;
        for (var i=0; i<=5; i++){
            $('#ime1'+i).attr('src', 'img/0.png');
            $('#ime2'+i).attr('src', 'img/0.png');
        }
    };

    //funciones segunda pantalla
    function fnSumaPtos(nro){
        if (nro == 1){
            if (acum_e1 < ptos){
                acum_e1++;
                $('#resultado_equipo1').text(acum_e1);
                mostrar_fosforos(1);
            };
        } else {
            if (acum_e2 < ptos){
                acum_e2++;
                $('#resultado_equipo2').text(acum_e2);
                mostrar_fosforos(2);
            };    
        }; 
    };

    function fnRestaPtos(nro){
        if (nro == 1){
            if (acum_e1 > 0){
                acum_e1--;
                $('#resultado_equipo1').text(acum_e1);
                mostrar_fosforos(1);
            };
        } else {
            if (acum_e2 > 0){
                acum_e2--;
                $('#resultado_equipo2').text(acum_e2);
                mostrar_fosforos(2);
            };
        };
    };

    function mostrar_fosforos(nro){
        if (nro == 1){
            pe = acum_e1 / 5;
            pe = parseInt(pe);
            mod = acum_e1 % 5;
            for (var i=0; i<pe; i++){
                $('#ime1'+i).attr('src', 'img/5.png'); 
            }; 
            for (var i=pe; i<(pe+1); i++){
                $('#ime1'+i).attr('src', 'img/'+mod+'.png');
            };    
        } else {
            pe2 = acum_e2 / 5;
            pe2 = parseInt(pe2);
            mod2 = acum_e2 % 5;
            for (var i=0; i<pe2; i++){
                $('#ime2'+i).attr('src', 'img/5.png'); 
            }; 
            for (var i=pe2; i<(pe2+1); i++){
                $('#ime2'+i).attr('src', 'img/'+mod2+'.png');
            };  
        }; 
    };
});