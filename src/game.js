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
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state,option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id:1,
        text: 'Welcome to the Tech Tower Heist. Do you wish to play.',
        options: [
            {
                text: 'yes lets goooo.',
                nextText: 6
            },
            {
                text: 'nah I am good.',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Too bad play again.',
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: 'Choose an item to take with you.',
        options: [
            {
                text: 'Take the wallet.',
                setState: {wallet: true},
                nextText: 7
            },
            {
                text: 'Take the Phone.',
                setState: {Phone: true},
                nextText: 7
            },
            {
                text: 'Take the Buzz Bible.',
                setState: {BuzzBible: true},
                nextText: 7
            },
            {
                text: 'Take nothing.',
                nextText: 7
            }
        ] 
    },
    {
        id: 7,
        text: 'Where do you wish to go next to uncover clues for your heist.',
        options: [
            {
                text: 'TA Recitation.',
                nextText: 77
            },
            {
                text: 'Reddit.',
                nextText: 100
            },
            {
                text: 'Dining Hall to fuel Upppp.',
                nextText: 160
            },
            {
                text: 'Go to the Stadium to see if you can find anyone who can help you.',
                nextText: 180
            }
        ]
    },
    {
        id: 77,
        text: "The TA's were unfornutately of no help. You ended up stressing even more about the lack of studying you have done. You suddenly have a heart attack and die on the spot.",
        options: [
            {
                text: 'restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 100,
        text: 'What will you do with the Reddit at hand?',
        options: [
            {
                text: 'Read about past successes and decide to further you investigation using Reddit.',
                requiredState: (currentState) => currentState.Phone,
                nextText: 101
            },
            {
                text:'You do not have a phone and decide to do what any Tech student would do. Give up.',
                requiredState: (currentState) => !currentState.Phone,
                nextText: 119
            },
            {
                text: 'You decide to cut straight to the chase and wing your Tech tower heist.',
                requiredState: (currentState) => currentState.Phone,
                nextText: 120
            }
        ]
    },
    {
        id: 101,
        text: 'Your Quest for knowledge has lead you to the CULC. What will you do next.',
        options: [
            {
                text: 'Ask another student who also seems done with life for help.',
                nextText: 102
            },
            {
                text: 'Ask the Librarian for help.',
                nextText: 103
            },
            {
                text: 'Scour the library for all things Tech Tower, specifically the T.',
                nextText: 104
            }
        ]
    },
    {
        id: 102,
        text: "The student asks you the single most important question of your life up til now. Is CM the best major or not? Don't choke this.",
        options: [
            {
                text: 'No brainer, of course.',
                nextText: 105
            },
            {
                text: 'Ehhh, not really.',
                nextText: 106
            }
        ]
    },
    {
        id: 103,
        text: 'The librarian is super chill and has been awaiting for the next brave soul to attemp the heist. She gladly hands you the plans of students from the past. Your on your way to the Ramblin Wreck.',
        options: [
            {
                text: 'Find the Ramblin Wreck.',
                nextText: 200
            }
        ]
    },
    {
        id: 104,
        text: 'President Cabrera, who you never see, catches you and asks what you are up to.',
        options: [
            {
                text: 'Lie.',
                nextText: 140
            },
            {
                text: 'Tell the Truth.',
                nextText: 141
            }
        ]
    },
    {
        id: 105,
        text: "The student pulls a scroll from his trenchcoat, its a plan that leads you to the Ramblin Wreck. You say thank you and your on your way, one step closer to the T.",
        options: [
            {
                text: 'continue on in your pursuit of the coveted T and Find the Ramblin Wreck.',
                nextText: 200
            }
        ]
    },
    {
        id: 106,
        text: 'The student gives you a blueprint that leads you to Tech Green.',
        options: [
            {
                text: 'continue on to the Green of Tech.',
                nextText: 142
            }
        ]
    },
    {
        id: 119,
        text: 'best of luck next time kiddo. Now go study for your exam.',
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 120,
        text: 'You get caught and suspended.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 140,
        text: 'P. Cabrera finds you oddly sus and takes a peek at your research. He suspends you on the spot and takes you to court for premeditated Burglary. Sheesh!',
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 141,
        text: 'P. Cabrera stares at you for a second, and then laughs it off. He wishes you the best of luck and even gives you some plans to help you out. They lead you to Tech Green.',
        options: [
            {
                text: 'Tech green proves useful.Thanks to Cabrera, Heist preparations are complete and you are ready to steal the T. COMMENCE THE HEIST.',
                nextText: 142
            }
        ]
    },
    {
        id: 142,
        text: "It's a setup. You were given fake plans and you are caught by the Stealing the T Task Force sector of GTPD.",
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 160,
        text: 'You have made it to the dining hall. What do you want to do now?',
        options: [
            {
                text: "Don't eat.",
                nextText: 161,
            },
            {
                text: "Dine out.",
                nextText: 162
            },
            {
                text: 'Dine in.',
                nextText: 163
            }
        ]
    },
    {
        id: 161,
        text: 'You pass out due to exhaustion. Mission Failed.',
        options: [
            {
                text: "Restart.",
                nextText: -1
            }
        ]
    },
    {
        id: 162,
        text: 'Unsurprisingly your burger has food poisoning. You should of seen this one coming.',
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 163,
        text: 'You meet up with a friend who caught wind of your heist plans and wants in. They tell you there is a secret plan in the library.',
        options: [
            {
                text: 'You thank them, scarf down your food, and continue on to the library in search of the blueprints.',
                nextText: 101
            }
        ]
    }, 
    {
        id: 180,
        text: 'Upon arrival, you spot the head coach. Rumor has it he was in on the last successful Tech Tower heist, however he came clean in order to get his job as the coach. You also notice Buzz in the stands, who has authorized access to places others do not. Who do you wish to talk to?',
        options: [
            {
                text: 'Talk to the coach.',
                nextText: 181
            },
            {
                text: 'Talk to Buzz.',
                nextText: 182
            }
        ]
    },
    {
        id: 181,
        text: 'coach gives you plans that lead you to Technology Green. You find everything you need, and you are ready to begin the heist. Let the fun begin.',
        options: [
            {
                text: 'COMMENCE THE HEIST.',
                nextText: 142
            }
        ]
    },
    {
       id: 182,
       text: 'Buzz tells you to find the Ramblin Wreck and get a special climbing tool to help you scale the tower.',
       options: [
           {
               text: 'Find the Ramblin Wreck.',
               nextText: 200
           }
       ]
    },
    {
       id: 200,
       text: 'how do you choose to find the Ramblin Wreck.',
       options: [
           {
               text: 'Use skateboard and go around campus searching.',
               nextText: 201
           },
           {
               text: 'Take a Stinger or Tech Trolley.',
               nextText: 210
           },
           {
               text: 'walk.',
               nextText: 220
           },
           {
               text: 'Rent a Scooter.',
               nextText: 230
           },
           {
               text: 'Call your frined who drives.',
               nextText: 240
           },
           {
               text: 'Pray to the sacred Buzz Bible.',
               nextText: 250
           }
       ] 
    }
    
]


startGame()