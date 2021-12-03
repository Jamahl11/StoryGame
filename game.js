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
        //NUMBER 1
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
        //NUMBER 2
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
        //NUMBER 3
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
        //I LIKE BIG BUTTERFLIES AND I CANNOT LIE
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
        //number 4
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
        //pizza
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
        //pizza
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
    },
    {
        id: 201,
        text: 'After searching for nearly an hour, you are tired but you have found the Ramblin Wreck. Lets see what it has to offer.',
        options: [
            {
                text: 'Search the Ramblin Wreck',
                nextText: 260
            }
        ]
    },
    {
        id: 210,
        text: 'You need to call a stinger or find out where the nearest Tech Trolley is. Do you have a phone?',
        options: [
            {
                text: 'Yes I do.',
                requiredState: (currentState) => currentState.Phone,
                nextText: 211
            },
            {
                text: 'No I do not.',
                requiredState: (currentState) => !currentState.Phone,
                nextText: 212
            }
        ]
    },
    {
        id: 211,
        text: 'It takes too long and by then you give up.',
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 212,
        text: 'No phone, no go. Without a phone the only sensible thing left to do is give up.',
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 220,
        text: 'You slip on the horrid granite pathway that is Techwood Drive and nearly miss getting hit by a car. You realize you are not built for this life, decide to call it a quits, and you limp back home.',
        options: [
            {
                text: 'Restart, Hope you feel better.',
                nextText: -1
            }
        ]
    },
    {
        id: 230,
        text: 'Ya know, these things are not free. Do you have your wallet on you.',
        options: [
            {
                text: 'Yes, yes I do.',
                requiredState: (currentState) => currentState.wallet,
                nextText: 231
            },
            {
                text: 'No, no I do not.',
                requiredState: (currentState) => !currentState.wallet,
                nextText: 232
            }
        ]
    },
    {
        id: 231,
        text: 'After searching for nearly an hour you are all out of money, but you have found the Ramblin Wreck. Lets see what it has to offer.',
        options: [
            {
                text: 'Search the Ramblin Wreck',
                nextText: 260
            }
        ]
    },
    {
        id: 232,
        text: 'With not a dime to your name you decide to give up. You are already in debt to Georgia Tech, why be in debt to some random scooter company as well?',
        options: [
            {
                text: "Restart, at least this won't cost you anything.",
                nextText: -1
            }
        ]
    },
    {
        id: 240,
        text: 'Do you have a cellular device with which you can call said friend?',
        options: [
            {
                text: "Yes, who doesn't have one nowadays.",
                requiredState: (currentState) => currentState.Phone,
                nextText: 241
            },
            {
                text: 'No, I forgot to grab it.',
                requiredState: (currentState) => !currentState.Phone,
                nextText: 242
            }
        ]
    },
    {
        id: 241,
        text: 'The two of you drive around campus in search of the Ramblin Wreck. You spot it almost instantly. You offer here the opportunity to go down in history with you, but she declines and wishes you the best of luck. Oh well, time to see what the Ramblin Wreck has to offer.',
        options: [
            {
                text: 'Search the Ramblin Wreck.',
                nextText: 260
            }
        ]
    },
    {
        id: 242,
        text: "You can't call your friend and walking around campus in search of this car would take too much of your precious time. You have better things to do, like go home and realize how under-prepared you are for your CS test tomorrow.",
        options: [
            {
                text: 'No amount of studying could help you at this point. You might as well Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 250,
        text: 'Do you have your Buzz Bible?',
        options: [
            {
                text: 'Yes I do.',
                requiredState: (currentState) => currentState.BuzzBible,
                nextText: 251
            },
            {
                text: 'no I do not.',
                requiredState: (currentState) => !currentState.BuzzBible,
                nextText: 252
            }
        ]
    },
    {
        id: 251,
        text: 'Buzz of the Past tells you where the Ramblin Wreck is. But he also tells you that if you know the secret code to open any Tech door, he can can transport you to the Tower directly without any interference.',
        options: [
            {
                text: 'Yes I know the code.',
                nextText: 253

            },
            {
                text: 'No, I do not know what the code is. Go to the Ramblin Wreck and see what it has to offer.',
                nextText: 260
            }
        ]
    },
    {
        id: 252,
        text: 'You cannot invoke the Tech spirit and you go home.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 253,
        text:'Whats the code young one?'

    },
    {
        id: 260,
        text: 'Which item do you wish to take?',
        options: [
            {
                text: 'A fake T.',
                setState: {fakeT: true},
                id: 261
            },
            {
                text: 'Climbing Gear',
                setState: {climbingGear: true},
                id: 262
            },
            {
                text: 'A janitor disguise.',
                setState: {janitorDisguise:true},
                id: 263
            }
        ]
    },
    {
        id: 261,
        text: "You use the excuse of wanting to take a close photo from the top of Tech Tower. You use a rope to get "
    }

]


startGame()
