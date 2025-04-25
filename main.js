const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const con<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus objetivos do ano</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <section class="conteudo-principal">
        <h2 class="titulo-principal">Meus objetivos de 2025<span>_</span></h2>
        <div class="conteudo">
            <div class="botoes">
                <button class="botao ativo">Passar no ENEM</button>
                <button class="botao">Aprender inglês</button>
                <button class="botao">Visitar minha vó na Itália</button>
                <button class="botao">Ir para a Dunamis Farm</button>
            </div>
            <div class="abas-textos">
                <div class="aba-conteudo ativo">
                    <h3 class="aba-conteudo-titulo-principal">Passar no curso dos sonhos</h3>
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador">
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="dias0"></p>
                            <p class="contador-digito-texto">dias</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="horas0"></p>
                            <p class="contador-digito-texto">horas</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="min0"></p>
                            <p class="contador-digito-texto">min</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="seg0"></p>
                            <p class="contador-digito-texto">seg</p>
                        </div>
                    </div>
                </div>
                <div class="aba-conteudo">
                    <h3 class="aba-conteudo-titulo-principal">Saber falar e entender o inglês</h3>
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador">
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="dias1"></p>
                            <p class="contador-digito-texto">dias</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="horas1"></p>
                            <p class="contador-digito-texto">horas</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="min1"></p>
                            <p class="contador-digito-texto">min</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="seg1"></p>
                            <p class="contador-digito-texto">seg</p>
                        </div>
                    </div>
                </div>
                <div class="aba-conteudo">
                    <h3 class="aba-conteudo-titulo-principal">Tomar gelato na praia da Itália com minha vó</h3>
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador">
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="dias2"></p>
                            <p class="contador-digito-texto">dias</p>
                        </div>
                        <!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus objetivos do ano</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <section class="conteudo-principal">
        <h2 class="titulo-principal">Meus objetivos de 2025<span>_</span></h2>
        <div class="conteudo">
            <div class="botoes">
                <button class="botao ativo">Passar no ENEM</button>
                <button class="botao">Aprender inglês</button>
                <button class="botao">Visitar minha vó na Itália</button>
                <button class="botao">Ir para a Dunamis Farm</button>
            </div>
            <div class="abas-textos">
                <div class="aba-conteudo ativo">
                    <h3 class="aba-conteudo-titulo-principal">Passar no curso dos sonhos</h3>
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador">
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="dias0"></p>
                            <p class="contador-digito-texto">dias</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="horas0"></p>
                            <p class="contador-digito-texto">horas</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="min0"></p>
                            <p class="contador-digito-texto">min</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="seg0"></p>
                            <p class="contador-digito-texto">seg</p>
                        </div>
                    </div>
                </div>
                <div class="aba-conteudo">
                    <h3 class="aba-conteudo-titulo-principal">Saber falar e entender o inglês</h3>
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador">
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="dias1"></p>
                            <p class="contador-digito-texto">dias</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="horas1"></p>
                            <p class="contador-digito-texto">horas</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="min1"></p>
                            <p class="contador-digito-texto">min</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="seg1"></p>
                            <p class="contador-digito-texto">seg</p>
                        </div>
                    </div>
                </div>
                <div class="aba-conteudo">
                    <h3 class="aba-conteudo-titulo-principal">Tomar gelato na praia da Itália com minha vó</h3>
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador">
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="dias2"></p>
                            <p class="contador-digito-texto">dias</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="horas2"></p>
                            <p class="contador-digito-texto">horas</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="min2"></p>
                            <p class="contador-digito-texto">min</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="seg2"></p>
                            <p class="contador-digito-texto">seg</p>
                        </div>
                    </div>
                </div>
                <div class="aba-conteudo">
                    <h3 class="aba-conteudo-titulo-principal">Ir para a Dunamis Farm</h3>
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador">
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="dias3"></p>
                            <p class="contador-digito-texto">dias</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="horas3"></p>
                            <p class="contador-digito-texto">horas</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="min3"></p>
                            <p class="contador-digito-texto">min</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="seg3"></p>
                            <p class="contador-digito-texto">seg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="main.js"></script>
</body>

</html>              <div class="contador-digito">
                            <p class="contador-digito-numero" id="horas2"></p>
                            <p class="contador-digito-texto">horas</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="min2"></p>
                            <p class="contador-digito-texto">min</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="seg2"></p>
                            <p class="contador-digito-texto">seg</p>
                        </div>
                    </div>
                </div>
                <div class="aba-conteudo">
                    <h3 class="aba-conteudo-titulo-principal">Ir para a Dunamis Farm</h3>
                    <h4 class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</h4>
                    <div class="contador">
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="dias3"></p>
                            <p class="contador-digito-texto">dias</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="horas3"></p>
                            <p class="contador-digito-texto">horas</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="min3"></p>
                            <p class="contador-digito-texto">min</p>
                        </div>
                        <div class="contador-digito">
                            <p class="contador-digito-numero" id="seg3"></p>
                            <p class="contador-digito-texto">seg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="main.js"></script>
</body>

</html>
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
