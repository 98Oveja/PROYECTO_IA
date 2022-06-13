//variables tableros
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');
const t8 = document.getElementById('t8');
const t9 = document.getElementById('t9');
let arrayT= [t1,t2,t3,t4,t5,t6,t7,t8,t9];
//variables casillas
const c1 = document.getElementsByClassName('c1');
const c2 = document.getElementsByClassName('c2');
const c3 = document.getElementsByClassName('c3');
const c4 = document.getElementsByClassName('c4');
const c5 = document.getElementsByClassName('c5');
const c6 = document.getElementsByClassName('c6');
const c7 = document.getElementsByClassName('c7');
const c8 = document.getElementsByClassName('c8');
const c9 = document.getElementsByClassName('c9');
let arrayClases = ['c1','c2','c3','c4','c5','c6','c7','c8','c9'];
//variables casillas
const ca1 = document.getElementById('1');
const ca2 = document.getElementById('2');
const ca3 = document.getElementById('3');
const ca4 = document.getElementById('4');
const ca5 = document.getElementById('5');
const ca6 = document.getElementById('6');
const ca7 = document.getElementById('7');
const ca8 = document.getElementById('8');
const ca9 = document.getElementById('9');

const ca10 = document.getElementById('10');
const ca11 = document.getElementById('11');
const ca12 = document.getElementById('12');
const ca13 = document.getElementById('13');
const ca14 = document.getElementById('14');
const ca15 = document.getElementById('15');
const ca16 = document.getElementById('16');
const ca17 = document.getElementById('17');
const ca18 = document.getElementById('18');

const ca19 = document.getElementById('19');
const ca20 = document.getElementById('20');
const ca21 = document.getElementById('21');
const ca22 = document.getElementById('22');
const ca23 = document.getElementById('23');
const ca24 = document.getElementById('24');
const ca25 = document.getElementById('25');
const ca26 = document.getElementById('26');
const ca27 = document.getElementById('27');

const ca28 = document.getElementById('28');
const ca29 = document.getElementById('29');
const ca30 = document.getElementById('30');
const ca31 = document.getElementById('31');
const ca32 = document.getElementById('32');
const ca33 = document.getElementById('33');
const ca34 = document.getElementById('34');
const ca35 = document.getElementById('35');
const ca36 = document.getElementById('36');

const ca37 = document.getElementById('37');
const ca38 = document.getElementById('38');
const ca39 = document.getElementById('39');
const ca40 = document.getElementById('40');
const ca41 = document.getElementById('41');
const ca42 = document.getElementById('42');
const ca43 = document.getElementById('43');
const ca44 = document.getElementById('44');
const ca45 = document.getElementById('45');

const ca46 = document.getElementById('46');
const ca47 = document.getElementById('47');
const ca48 = document.getElementById('48');
const ca49 = document.getElementById('49');
const ca50 = document.getElementById('50');
const ca51 = document.getElementById('51');
const ca52 = document.getElementById('52');
const ca53 = document.getElementById('53');
const ca54 = document.getElementById('54');

const ca55 = document.getElementById('55');
const ca56 = document.getElementById('56');
const ca57 = document.getElementById('57');
const ca58 = document.getElementById('58');
const ca59 = document.getElementById('59');
const ca60 = document.getElementById('60');
const ca61 = document.getElementById('61');
const ca62 = document.getElementById('62');
const ca63 = document.getElementById('63');

const ca64 = document.getElementById('64');
const ca65 = document.getElementById('65');
const ca66 = document.getElementById('66');
const ca67 = document.getElementById('67');
const ca68 = document.getElementById('68');
const ca69 = document.getElementById('69');
const ca70 = document.getElementById('70');
const ca71 = document.getElementById('71');
const ca72 = document.getElementById('72');

const ca73 = document.getElementById('73');
const ca74 = document.getElementById('74');
const ca75 = document.getElementById('75');
const ca76 = document.getElementById('76');
const ca77 = document.getElementById('77');
const ca78 = document.getElementById('78');
const ca79 = document.getElementById('79');
const ca80 = document.getElementById('80');
const ca81 = document.getElementById('81');
//escuchadores

//arrays
// let arreglo =[0,0,0,0,0,0,0,0,0];
let arreglo1=[0,0,0,0,0,0,0,0,0];
let arreglo2=[0,0,0,0,0,0,0,0,0];
let arreglo3=[0,0,0,0,0,0,0,0,0];
let arreglo4=[0,0,0,0,0,0,0,0,0];
let arreglo5=[0,0,0,0,0,0,0,0,0];
let arreglo6=[0,0,0,0,0,0,0,0,0];
let arreglo7=[0,0,0,0,0,0,0,0,0];
let arreglo8=[0,0,0,0,0,0,0,0,0];
let arreglo9=[0,0,0,0,0,0,0,0,0];

//tablero
let table = 5;
let arreglo = arreglo5;




class Juego{
    constructor(){
        this.inicializar();
        this.inicializarTablero();
        this.player_move();
    }
    inicializar(){
        this.toggleBtnEmpezar();
    }
    //método para ocultar y mostrar botoón de iniciar juego
    toggleBtnEmpezar(){
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide');
        }else{
            btnEmpezar.classList.add('hide');
        }
    }

    //MÉTODO PARA MOVIMIENTO DEL JUGADOR
    inicializarTablero(){
        arrayT.forEach(x => {
            if (x != t5) {
                x.classList.add("disableDiv");
            }
        });
        
        console.log(this);
    }
    siguienteTablero(noTablero){
        arrayT.forEach(x => {
            if(x != noTablero){
                x.classList.add("disableDiv");
            }else{
                x.classList.remove("disableDiv");
            }
        })
        this.listenerOff();
        return setTimeout(() => {
            this.player_move();
        }, 100);
    }
    player_move(){
        // ca37.addEventListener("click",this.modificarTextoUser.bind(this));
        ca1.addEventListener("click",this.modificarTextoUser.bind(this));
        ca2.addEventListener("click",this.modificarTextoUser.bind(this));
        ca3.addEventListener("click",this.modificarTextoUser.bind(this));
        ca4.addEventListener("click",this.modificarTextoUser.bind(this));
        ca5.addEventListener("click",this.modificarTextoUser.bind(this));
        ca6.addEventListener("click",this.modificarTextoUser.bind(this));
        ca7.addEventListener("click",this.modificarTextoUser.bind(this));
        ca8.addEventListener("click",this.modificarTextoUser.bind(this));
        ca9.addEventListener("click",this.modificarTextoUser.bind(this));

        ca10.addEventListener("click",this.modificarTextoUser.bind(this));
        ca11.addEventListener("click",this.modificarTextoUser.bind(this));
        ca12.addEventListener("click",this.modificarTextoUser.bind(this));
        ca13.addEventListener("click",this.modificarTextoUser.bind(this));
        ca14.addEventListener("click",this.modificarTextoUser.bind(this));
        ca15.addEventListener("click",this.modificarTextoUser.bind(this));
        ca16.addEventListener("click",this.modificarTextoUser.bind(this));
        ca17.addEventListener("click",this.modificarTextoUser.bind(this));
        ca18.addEventListener("click",this.modificarTextoUser.bind(this));

        ca19.addEventListener("click",this.modificarTextoUser.bind(this));
        ca20.addEventListener("click",this.modificarTextoUser.bind(this));
        ca21.addEventListener("click",this.modificarTextoUser.bind(this));
        ca22.addEventListener("click",this.modificarTextoUser.bind(this));
        ca23.addEventListener("click",this.modificarTextoUser.bind(this));
        ca24.addEventListener("click",this.modificarTextoUser.bind(this));
        ca25.addEventListener("click",this.modificarTextoUser.bind(this));
        ca26.addEventListener("click",this.modificarTextoUser.bind(this));
        ca27.addEventListener("click",this.modificarTextoUser.bind(this));

        ca28.addEventListener("click",this.modificarTextoUser.bind(this));
        ca29.addEventListener("click",this.modificarTextoUser.bind(this));
        ca30.addEventListener("click",this.modificarTextoUser.bind(this));
        ca31.addEventListener("click",this.modificarTextoUser.bind(this));
        ca32.addEventListener("click",this.modificarTextoUser.bind(this));
        ca33.addEventListener("click",this.modificarTextoUser.bind(this));
        ca34.addEventListener("click",this.modificarTextoUser.bind(this));
        ca35.addEventListener("click",this.modificarTextoUser.bind(this));
        ca36.addEventListener("click",this.modificarTextoUser.bind(this));

        ca37.addEventListener("click",this.modificarTextoUser.bind(this));
        ca38.addEventListener("click",this.modificarTextoUser.bind(this));
        ca39.addEventListener("click",this.modificarTextoUser.bind(this));
        ca40.addEventListener("click",this.modificarTextoUser.bind(this));
        ca41.addEventListener("click",this.modificarTextoUser.bind(this));
        ca42.addEventListener("click",this.modificarTextoUser.bind(this));
        ca43.addEventListener("click",this.modificarTextoUser.bind(this));
        ca44.addEventListener("click",this.modificarTextoUser.bind(this));
        ca45.addEventListener("click",this.modificarTextoUser.bind(this));
        
        ca46.addEventListener("click",this.modificarTextoUser.bind(this));
        ca47.addEventListener("click",this.modificarTextoUser.bind(this));
        ca48.addEventListener("click",this.modificarTextoUser.bind(this));
        ca49.addEventListener("click",this.modificarTextoUser.bind(this));
        ca50.addEventListener("click",this.modificarTextoUser.bind(this));
        ca51.addEventListener("click",this.modificarTextoUser.bind(this));
        ca52.addEventListener("click",this.modificarTextoUser.bind(this));
        ca53.addEventListener("click",this.modificarTextoUser.bind(this));
        ca54.addEventListener("click",this.modificarTextoUser.bind(this));

        ca55.addEventListener("click",this.modificarTextoUser.bind(this));
        ca56.addEventListener("click",this.modificarTextoUser.bind(this));
        ca57.addEventListener("click",this.modificarTextoUser.bind(this));
        ca58.addEventListener("click",this.modificarTextoUser.bind(this));
        ca59.addEventListener("click",this.modificarTextoUser.bind(this));
        ca60.addEventListener("click",this.modificarTextoUser.bind(this));
        ca61.addEventListener("click",this.modificarTextoUser.bind(this));
        ca62.addEventListener("click",this.modificarTextoUser.bind(this));
        ca63.addEventListener("click",this.modificarTextoUser.bind(this));

        ca64.addEventListener("click",this.modificarTextoUser.bind(this));
        ca65.addEventListener("click",this.modificarTextoUser.bind(this));
        ca66.addEventListener("click",this.modificarTextoUser.bind(this));
        ca67.addEventListener("click",this.modificarTextoUser.bind(this));
        ca68.addEventListener("click",this.modificarTextoUser.bind(this));
        ca69.addEventListener("click",this.modificarTextoUser.bind(this));
        ca70.addEventListener("click",this.modificarTextoUser.bind(this));
        ca71.addEventListener("click",this.modificarTextoUser.bind(this));
        ca72.addEventListener("click",this.modificarTextoUser.bind(this));

        ca73.addEventListener("click",this.modificarTextoUser.bind(this));
        ca74.addEventListener("click",this.modificarTextoUser.bind(this));
        ca75.addEventListener("click",this.modificarTextoUser.bind(this));
        ca76.addEventListener("click",this.modificarTextoUser.bind(this));
        ca77.addEventListener("click",this.modificarTextoUser.bind(this));
        ca78.addEventListener("click",this.modificarTextoUser.bind(this));
        ca79.addEventListener("click",this.modificarTextoUser.bind(this));
        ca80.addEventListener("click",this.modificarTextoUser.bind(this));
        ca81.addEventListener("click",this.modificarTextoUser.bind(this));

    }
    listenerOff(){
        ca1.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca2.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca3.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca4.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca5.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca6.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca7.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca8.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca9.removeEventListener("click",this.modificarTextoUser.bind(this));

        ca10.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca11.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca12.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca13.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca14.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca15.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca16.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca17.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca18.removeEventListener("click",this.modificarTextoUser.bind(this));

        ca19.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca20.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca21.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca22.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca23.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca24.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca25.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca26.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca27.removeEventListener("click",this.modificarTextoUser.bind(this));

        ca28.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca29.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca30.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca31.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca32.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca33.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca34.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca35.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca36.removeEventListener("click",this.modificarTextoUser.bind(this));

        ca37.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca38.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca39.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca40.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca41.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca42.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca43.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca44.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca45.removeEventListener("click",this.modificarTextoUser.bind(this));
        
        ca46.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca47.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca48.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca49.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca50.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca51.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca52.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca53.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca54.removeEventListener("click",this.modificarTextoUser.bind(this));

        ca55.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca56.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca57.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca58.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca59.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca60.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca61.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca62.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca63.removeEventListener("click",this.modificarTextoUser.bind(this));

        ca64.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca65.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca66.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca67.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca68.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca69.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca70.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca71.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca72.removeEventListener("click",this.modificarTextoUser.bind(this));

        ca73.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca74.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca75.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca76.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca77.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca78.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca79.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca80.removeEventListener("click",this.modificarTextoUser.bind(this));
        ca81.removeEventListener("click",this.modificarTextoUser.bind(this));
    }
    //comprabar si hay empate
    empate(array){
        let empate = true;
        let i=0;
        while(empate==true && i<9){
            if (array[i]==0) {
                empate= false;
            }
            i++;
        }
        return empate;
    }
    //comprueba si gana
    victoria(array){
        console.log("comprobar "+array)
        if ((array[0]==array[1] && array[1]==array[2] && array[1]!=0) || (array[3]==array[4] && array[4]==array[5] && array[5]!=0 )
            || (array[6]==array[7] && array[7]==array[8] && array[8]!=0) || (array[0]==array[3] && array[3]==array[6] && array[6]!=0)
            || (array[1]==array[4] && array[4]==array[7] && array[7]!=0) || (array[2]==array[5] && array[5]==array[8] && array[8]!=0)
            || (array[0]==array[4] && array[4]==array[8] && array[8]!=0) || (array[6]==array[4] && array[4]==array[2] && array[2]!=0)) {
                console.log("Si cumple");
            return true;
        }else{
            console.log("No cumple");
            return false;
        }
    }
    agent_move(array, noTablero){
        let posiciones=[0,1,2,3,4,5,6,7,8];
        let casilla=9;
        let stop= true;
        
        // console.log(copia);
        //verificando cual es la mejor opción para ganar.
        
        posiciones.forEach(element=>{
            let copia = Object.values(array);
            console.log(array);
            if(copia[element]==0){
                copia[element]=2;
                if(this.victoria(copia)){
                    casilla=element;
                }
            }
        })

        //verifica que casilla cerrar para que no gane el jugador
        if(casilla === 9){
            posiciones.forEach(element=>{
                console.log("verifica cerrar");
                console.log(array);
                let copia = Object.values(array);
                if(copia[element]==0){
                    copia[element]=1;
                    if(this.victoria(copia)){
                        casilla=element;
                    }
                }
            })
        }
        if(casilla ===9){
            console.log("turno aleatorio "+array);
            while(stop){
                casilla= Math.floor(Math.random()*9)
                if(array[casilla]==0){
                    stop=false;
                }
            }
        }

        
        this.modificarTextoAgente(casilla+1, noTablero-1);
        array[casilla]=2;
        // return setTimeout(() => {
            
        // }, 100);
        
 
    }
    modificarTextoAgente(valor, tab){
        let casilla='c'+valor;
        console.log(casilla);
        switch (casilla) {
            case 'c1':
                console.log(c1[tab]);
                c1[tab].innerHTML="o";
                c1[tab].classList.add("columnRed");
                arreglo= arreglo1;
                this.listenerOff();
                return this.siguienteTablero(t1);
                // this.player_move();
                break;
            case 'c2':
                console.log(c2[tab]);
                c2[tab].innerHTML="o";
                c2[tab].classList.add("columnRed");
                arreglo= arreglo2;
                this.listenerOff();
                return this.siguienteTablero(t2);
                break;
            case 'c3':
                console.log(c3[tab]);
                c3[tab].innerHTML="o";
                c3[tab].classList.add("columnRed");
                arreglo= arreglo3;
                this.listenerOff();
                return this.siguienteTablero(t3);
                break;
            case 'c4':
                console.log(c4[tab]);
                c4[tab].innerHTML="o";
                c4[tab].classList.add("columnRed");
                arreglo= arreglo4;
                this.listenerOff();
                return this.siguienteTablero(t4);
                break;
            case 'c5':
                console.log(c5[tab]);
                c5[tab].innerHTML="o";
                c5[tab].classList.add("columnRed");
                arreglo= arreglo5;
                this.listenerOff();
                return this.siguienteTablero(t5);
                break;
            case 'c6':
                console.log(c6[tab]);
                c6[tab].innerHTML="o";
                c6[tab].classList.add("columnRed");
                arreglo= arreglo6;
                this.listenerOff();
                return this.siguienteTablero(t6);
                break;
            case 'c7':
                console.log(c7[tab]);
                c7[tab].innerHTML="o";
                c7[tab].classList.add("columnRed");
                arreglo= arreglo7;
                this.listenerOff();
                return this.siguienteTablero(t7);
                break;
            case 'c8':
                console.log(c8[tab]);
                c8[tab].innerHTML="o";
                c8[tab].classList.add("columnRed");
                arreglo= arreglo8;
                this.listenerOff();
                return this.siguienteTablero(t8);
                break;
            case 'c9':
                console.log(c9[tab]);
                c9[tab].innerHTML="o";
                c9[tab].classList.add("columnRed");
                arreglo= arreglo8;
                this.listenerOff();
                return this.siguienteTablero(t9);
                break;
        }
        console.log(arreglo);
        
        // return setTimeout(() => {
        //     // this.listenerOff();
        //     this.player_move();
        // }, 100);
        // this.player_move();
        
    }
    modificarTextoUser(casilla){
        let celda;
        let tableroTemp;
        console.log(casilla);
        
        let array = casilla.srcElement.classList;

        if(array.contains('c1')){
            celda=1;
            // this.siguienteTablero(t1);
            tableroTemp=arreglo1;
            console.log(celda);
        }else if(array.contains('c2')){
            celda=2;
            tableroTemp=arreglo2;
            console.log(celda);
        }else if(array.contains('c3')){
            celda=3;
            tableroTemp=arreglo3;
            console.log(celda);
        }else if(array.contains('c4')){
            celda=4;
            tableroTemp=arreglo4;
            console.log(celda);
        }else if(array.contains('c5')){
            celda=5;
            tableroTemp=arreglo;
            console.log(celda);
        }else if(array.contains('c6')){
            celda=6;
            tableroTemp=arreglo6;
            console.log(celda);
        }else if(array.contains('c7')){
            celda=7;
            tableroTemp=arreglo7;
            console.log(celda);
        }else if(array.contains('c8')){
            celda=8;
            tableroTemp=arreglo8;
            console.log(celda);
        }else if(array.contains('c9')){
            celda=9;
            tableroTemp=arreglo9;
            console.log(celda);
        }

        console.log("verificando Error");
        console.log(arreglo);
        console.log(arreglo[celda-1]);

        if(arreglo[celda-1]==0){
            
            // this.agent_move();
            casilla.srcElement.innerText = "x";
            casilla.srcElement.classList.add("columnBlue");
            console.log(this);
            this.listenerOff();
            // return setTimeout(() => {
            //     arreglo[celda-1]=1;
            //     // this.listenerOff();
                arreglo[celda-1]=1;
                console.log("Tablero 5 "+ arreglo);
                console.log("Tablero primero "+ arreglo1);
                console.log("Tablero segundo "+ arreglo2);
                console.log("Tablero tercero "+ arreglo3);
                console.log("tablero temporal "+tableroTemp);
                
            //     this.agent_move(tableroTemp,celda);
            // }, 100);
            
            return this.agent_move(tableroTemp,celda);
        }
        // else{
        //     swal("¡Ocupado!", "Acá no puedes seleccionar", "error")
        //     .then(() =>{
        //         this.listenerOff();
        //         setTimeout(this.player_move.bind(this), 500);
        //     })
        // }
        
    }

}



function empezarJuego(){
    window.juego = new Juego();
}