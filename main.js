Webcam.set({
    width: 400,
    height: 200,
    image_format: 'png',
    png_quality: 90
})
var camera = document.getElementById('camera') 

Webcam.attach('#camera')

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id="ft" src="' + data_uri + '"/>'
    })
}
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uRq61PBD0/model.json', modelLoaded)
function modelLoaded(){
    console.log('Modelo carregado')
}
function check()
{
    var img = document.getElementById('ft')
    classifier.classify(img, gotResult)
}

function gotResult(error, results) {
    if (error){
        console.error(error)
    }
    else {
        console.log(results)
        var resultado = results[0].label;

        document.getElementById('result_emotion_name').innerHTML = resultado;

        if (resultado == 'Feliz' ) {
            document.getElementById('update_emoji').innerHTML = '&#128522';
        }

        
        if (resultado == 'Triste' ) {
            document.getElementById('update_emoji').innerHTML = '&#128532';
        }

        
        if (resultado == 'Irritado' ) {
            document.getElementById('update_emoji').innerHTML = '&#128548';
        }

    }

}




















































//https://teachablemachine.withgoogle.com/models/uRq61PBD0/