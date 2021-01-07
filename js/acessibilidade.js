var $btnContrasteEscuro = $('#btnContrasteEscuro');
var $btnContrasteBranco = $('#btnContrasteBranco');
var $btnAumentar = $("#btnAumentar");
var $btnDiminuir = $("#btnDiminuir");
var $elemento = $("*"); //encontra todos os elementos dentro do #content
var fonts = [];

function obterTamanhoFonte() {
    for (var i = 0; i < $elemento.length; i++) {
        fonts.push(parseFloat($elemento.eq(i).css('font-size')));
    }
}

obterTamanhoFonte();
$btnAumentar.on('click', function () {
    console.log('aumentar');
    for (var i = 0; i < $elemento.length; i++) {
        ++fonts[i];
        $elemento.eq(i).css('font-size', fonts[i]);
        //try {
        //        var tamanhoFonte = $elemento.css('font-size');
        //        var tamanho = parseFloat(tamanhoFonte,10);
        //        var unidade = tamanhoFonte.slice(-2);
//
//                $elemento.css('font-size', tamanho *1.4 +unidade );
//            } 
//        catch (ex) {
//          console.error("outer", ex.message);
//        }

    }
});

$btnDiminuir.on('click', function () {
    console.log('diminuir');
    for (var i = 0; i < $elemento.length; i++) {
        --fonts[i];
        $elemento.eq(i).css('font-size', fonts[i]);
    }
});

$btnContrasteEscuro.on('click', function () {
    var objeto = getElementByClass("p1inlineContent");
    var objeto2 = document.getElementById("quadro_interno");
    var objeto3 = document.getElementById("quadro_externo");
    var objeto4 = document.getElementById("titulo");
    muda_style(objeto, 'backgroundColor', 'black');
    muda_style(objeto2, 'backgroundColor', 'black');
    muda_style(objeto2, 'color', 'white');
    muda_style(objeto3, 'backgroundColor', 'black');
    $('h1').css({ color: "#ffffff" });
    document.body.style.backgroundColor = "black";
});

$btnContrasteBranco.on('click', function () {
    var objeto = document.getElementByClass("p1inlineContent");
    var objeto2 = document.getElementById("quadro_interno");
    var objeto3 = document.getElementById("quadro_externo");
    muda_style(objeto, 'backgroundColor', '#f0f1f4');
    muda_style(objeto2, 'backgroundColor', 'white');
    muda_style(objeto2, 'color', 'black');
    muda_style(objeto3, 'backgroundColor', 'white');
    $('h1').css({ color: "#222222" });
    document.body.style.backgroundColor = "#f0f1f4";
});

function muda_style($element, k, v) {
    try {
        $element.style[k] = v;
    } 
catch (ex) {
  console.error("outer", ex.message);
}

}

