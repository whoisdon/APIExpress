const ENTER_KEY = 13
const fileSystem = {
  'README.md': `Welcome to the Macintosh 128K terminal!
Supported commands are:
  - ls: list directory contents
  - cat: concatenate and print files
  - clear: clear the terminal screen 
`,
  'secret1.txt': `cê que da cê fala..`,
  'secret2.txt': `oh o cara kkkkk curioso...`,
}

new class Terminal {
  constructor() {
    this.onKeyDown = this.onKeyDown.bind(this)
    this.clearHistory = this.clearHistory.bind(this)
    this.addHistory = this.addHistory.bind(this)
    this.listFiles = this.listFiles.bind(this)
    this.catFile = this.catFile.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)

    this.history = []
    this.elements = {
      input: document.querySelector('.input'),
      terminal: document.querySelector('.terminal'),
      outputContainer: document.querySelector('.outputContainer')
    }
    this.prompt = '$'
    this.commands = {
      clear: this.clearHistory,
      ls: this.listFiles,
      cat: this.catFile,
    }
    this.elements.input.addEventListener('keydown', this.onKeyDown)
    this.catFile('README.md')
  }
  
  clearHistory() {
    this.history = []
    this.elements.outputContainer.innerHTML = ''
  }
  
  catFile(fileName) {
    if (fileName in fileSystem) 
      this.addHistory(fileSystem[fileName])
    else 
      this.addHistory(`cat: ${fileName}: No such file or directory`)
  }
  
  scrollToBottom() {
    this.elements.terminal.scrollTop = this.elements.terminal.scrollHeight
  }
  
  addHistory(output) {
    this.history.push(output)
   
    var outputText = document.createTextNode(output)
    let outputEl = document.createElement('pre')
    
    outputEl.classList.add('output')
    outputEl.appendChild(outputText)
    
    this.elements.outputContainer.appendChild(outputEl)
  }
  
  listFiles(dir) {
    const output = Object.keys(fileSystem).reduce((acc, curr, index) => {
      const deliminator = index % 3 === 0 && index !== 0 ? '\n' : '\t'
      return `${acc}${curr}${deliminator}`
    }, '')
    
    this.addHistory(output)
  }

  clearInput() { this.elements.input.value = '' }

  onKeyDown(e) {

    if (e.keyCode !== ENTER_KEY) return
    
    const inputText = this.elements.input.value
    const inputArray = inputText.split(' ')
    const inputCommand = inputArray[0]
    const arg = inputArray[1]
    
    this.addHistory(`${this.prompt} ${inputText}`)
    this.clearInput()

    if (inputCommand === '') return

    const command = this.commands[inputCommand]
    
    if (command)
      command(arg)
    else
      this.addHistory(`sh: command not found: ${inputCommand}`)
      
    this.scrollToBottom()
  } 
}

console.log('%cCréditos ao usuário @tryggvigy do CodePen por fornecer o incrível código que inspirou essa implementação. Obrigado por compartilhar seus talentos com a comunidade!', 'font-family: "Courier New", monospace; font-size: 15px; color: green; text-shadow: 1px 1px 1px black;');
