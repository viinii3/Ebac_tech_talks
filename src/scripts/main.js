AOS.init();

const dataDoEvento = new Date("Dec 2, 2023 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHora = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaDoEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaDoEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaDoEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}hrs ${minutosAteOEvento}min ${segundosAteOEvento}s`;
}, 1000);