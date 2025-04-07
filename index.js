class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque = ""

    if(this.tipo === "mago"){
        ataque = "usou magia"
    }
    else if(this.tipo === "guerreiro"){
        ataque = "usou espada"
    }
    else if(this.tipo === "monge"){
        ataque = "usou artes marciais"
    }
    else if(this.tipo === "ninja"){
        ataque = "usou shuriken"
    }
        
    console.log(`O herói ${this.nome}, que é um ${this.tipo}, atacou usando ${ataque}`)
    }
}

let heroi1 = new Heroi("Kenshin", 35, "ninja")
heroi1.atacar()

let heroi2 = new Heroi("Merlin", 70, "mago")
heroi2.atacar()

let heroi3 = new Heroi("Lee", 28, "monge")
heroi3.atacar()    