//Añado funcionalidad a los eventos
//Botones de números
boton0.addEventListener("click",()=>{miCalcu.pintarEnDisplay(boton0)})
boton1.addEventListener("click",()=>{miCalcu.pintarEnDisplay(boton1)})
boton2.addEventListener("click",()=>{miCalcu.pintarEnDisplay(boton2)})
boton3.addEventListener("click",()=>{miCalcu.pintarEnDisplay(boton3)})
boton4.addEventListener("click",()=>{miCalcu.pintarEnDisplay(boton4)})
boton5.addEventListener("click",()=>{miCalcu.pintarEnDisplay(boton5)})
boton6.addEventListener("click",()=>{miCalcu.pintarEnDisplay(boton6)})
boton7.addEventListener("click",()=>{miCalcu.pintarEnDisplay(boton7)})
boton8.addEventListener("click",()=>{miCalcu.pintarEnDisplay(boton8)})
boton9.addEventListener("click",()=>{miCalcu.pintarEnDisplay(boton9)})
botonPunto.addEventListener("click", () => {miCalcu.pintarPunto()})

//Botones de borrar todo y poner signo mas|menos
botonCE.addEventListener("click", ()=>{miCalcu.borrarUltimoValor()})
botonC.addEventListener("click",()=>{miCalcu.borrarTodo()})
botonMasMenos.addEventListener("click",()=>{miCalcu.masMenos()})

//Botones de operación e igualar
botonSumar.addEventListener("click",()=>{miCalcu.operar(botonSumar.value)})
botonRestar.addEventListener("click", ()=>{miCalcu.operar(botonRestar.value)})
botonMultiplicar.addEventListener("click",()=>miCalcu.operar(botonMultiplicar.value))
botonDividir.addEventListener("click",()=>{miCalcu.operar(botonDividir.value)})
botonIgual.addEventListener("click", ()=>{miCalcu.igualar()})
botonHyp.addEventListener('click', () =>{miCalcu.operar(botonHyp.value)})
botonMod.addEventListener('click',() => {miCalcu.operar(botonMod.value)})
botonElevado.addEventListener('click', () => {miCalcu.operar(botonElevado.value)})

//Botón de científica:
botonCientifica.addEventListener('click',() =>{miCalcu.cientifica(botonCientifica.value)})
botonRaiz.addEventListener('click', () => {miCalcu.operacionCientifica(botonRaiz.value)})
botonTan.addEventListener('click',() => {miCalcu.operacionCientifica(botonTan.value)})
botonAcosh.addEventListener('click', () => {miCalcu.operacionCientifica(botonAcosh.value)})
botonCos.addEventListener('click', () => {miCalcu.operacionCientifica(botonCos.value)})
botonAsinh.addEventListener('click', () => {miCalcu.operacionCientifica(botonAsinh.value)})
botonSin.addEventListener('click', () =>{miCalcu.operacionCientifica(botonSin.value)})
botonPI.addEventListener('click', () => {miCalcu.pintarPI_E(botonPI.value)})
botonE.addEventListener('click', () =>{miCalcu.pintarPI_E(botonE.value)})
botonLog.addEventListener('click', () => {miCalcu.operacionCientifica(botonLog.value)})
