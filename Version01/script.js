
class CharGen{
	
	constructor(docElement,assignedChar){
		this.docElement = docElement
		this.assignedChar = assignedChar
		this.timer = setInterval(this.start.bind(this), 10);
	}
	
	start(){
		document.getElementById(`${this.docElement}`).innerHTML = Math.random().toString(36).substring(2,3)
		 if (document.getElementById(`${this.docElement}`).innerHTML === `${this.assignedChar}`) {
        clearInterval(this.timer);
        }
	}
}


let a = new CharGen('character','a')
let b = new CharGen('character2', 'b')
let c = new CharGen('character3', 'c')