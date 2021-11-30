const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode (textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    state = Object.assign(state,option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id:1,
        text: 'test to see if text is working',
        options: [
            {
                text: 'option 1: take goo',
                setState: {blueGoo:true},
                nextText: 2
            },
            {
                text: 'option 2: leave it',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'test to see if text #2 is working',
        options: [
            {
                text: 'trade goo for a sword',
                requiredState: (currentState) => currentState.blueGoo,
                setState: {blueGoo: false, sword: true},
                nextText: 3
            },
            {
                text: 'trade goo for a shield',
                requiredState: (currentState) => currentState.blueGoo,
                setState: {blueGoo: false, shield: true},
                nextText: 3  
            },
            {
                text: 'ignore the merchant',
                nextText: 3
            }
        ] 
    }
]


startGame()