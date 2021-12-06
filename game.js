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
                nextText: 3
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
        id: 3,
        text: "It’s finals week, and stress is boiling inside you. Too many classes, projects, useless groupmates, people, grades to care about. You look at the time and it reads “11:00”. You sigh, knowing that tonight will be another all nighter. You reluctantly decide to move on from your studying to finishing up your essay on Media Studies. You’re tired and you think of all the problems you’re facing. Finals, registration, grades, money, sleep deprivation, relationship problems, subpar dining food (and eventual food poisoning), and interviews. It’s too much. Way. Too. Much.",
        options: [
            {
                text: 'Continue.',
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: "You find yourself sighing heavily and putting your head down in despair. How will you ever survive? Who thought it was a good idea to let you, only barely an adult, take on all of these problems alone?",
        options: [
            {
                text: 'Continue.',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: "You sit up, suddenly livid with everyone and everything. But mostly at the stress culture and competition you’ve found yourself dealing with. Georgia Tech. Such a prestigious school. Such a pretentious school. Such a dumb fricking school. There was no need to make life so hard. SO. HARD. You grind your teeth and clench your fists. They needed to be taken down a few pegs, they needed to be taught a lesson. And who better than you, than bring chaos to bring order to Tech?",
        options: [
            {
                text: 'Continue.',
                nextText: 8
            }
        ]
    },
    {
        id: 8,
        text: "While thinking about this, you suddenly see a white flash from the corner of your eye. You whip your head in that direction and find yourself yelling and staggering backwards. It was….it was….",
        options: [
            {
                text: 'Continue.',
                nextText: 9
            }
        ]
    },
    {
        id: 9,
        text: "\“A ghost?\” you whisper, confused. You rub your eyes, not quite believing what you are seeing. A man, probably in his thirties with gray skin, is scrutinizing you as if he is measuring your worth. You don’t like it and you finally get the courage to speak up. “Who are you? Some ghost who is following me?”",
        options: [
            {
                text: 'Continue.',
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        text: "“Have some sense!” Your eyes widen as the apparition speaks.  “You are a Georgia Tech student after all. I am no ordinary ghost and you are not the only student I have been in contact with!” He puffs his chest and gives a pompous smile. \“My name is George P. Burdell. I am the first of my name, and the first of all Yellow Jackets.\” He turns to look out your window and you move closer, intrigued.",
        options: [
            {
                text: 'Continue.',
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        text: "“But...I thought you weren’t real,” you respond.",
        options: [
            {
                text: 'Continue.',
                nextText: 12
            }
        ]
    },
    {
        id: 12,
        text: "“Bah! That’s just what they want you to believe. Now listen carefully. There is one way that you can fulfill all of your dreams and make your life better. And that is to Steal the ‘T’ from  Tech Tower.” You scrunch your eyebrows in confusion.",
        options: [
            {
                text: 'Continue.',
                nextText: 13
            }
        ]
    },
    {
        id: 13,
        text: "“How will that help with solving my problems--”",
        options: [
            {
                text: 'Continue.',
                nextText: 14
            }
        ]
    },
    {
        id: 14,
        text: "“Just listen to me while I talk! Do you want your problems solved?” You nod your head, chastened.\n\n“Now, I cannot help you beyond this point, but if you are able to secure the T, all the problems in your life will vanish. This has successfully been done twice and the students who completed the task are now living in fame and victory.” George turns back to you and sizes you up again. “Will you accept this challenge?",
        options: [
            {
                text: 'Of Course',
                nextText: 17
            },
            {
                text: "No, I'm not feeling too lucky today.",
                nextText: 283
            }
        ]
    },
    {
        id: 17,
        text: "“Good choice,” George says, turning to you. “I wish you luck.” And with that he vanishes.\n\nYou’re left dumbfounded and look at the time. Thankfully many places would still be open and people would still be out as everyone is restless during finals week.",
        options: [
            {
                text: 'Continue.',
                nextText: 19
            }
        ]
    },
    {
        id: 19,
        text: "You got to zoom out, too much to do, so much that must be done. Before you run out you grab?",
        options: [
            {
                text: 'Choose your item.',
                nextText: 6
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
        //I LIKE BIG BUTTERFLIES AND I CANNOT LIE
        id: 7,
        text: 'You think about where you should go first. How do you set in motion the chain of events that result with the stealing of the T!!!!!!',
        options: [
            {
                text: 'TA Recitation.',
                nextText: 20
            },
            {
                text: 'Reddit.',
                nextText: 25
            },
            {
                text: 'Dining Hall to fuel Upppp.',
                nextText: 160
            },
            {
                text: 'Go to the Stadium.',
                nextText: 180
            }
        ]
    },
    {
        id: 20,
        text: "You go to your TA’s at recitation. Kingsley, your reliable TA, ushers the last of the students in and begins teaching. But you cannot wait that long and interrupt.",
        options: [
            {
                text: 'Continue.',
                nextText: 21
            }
        ]
    },
    {
        id: 21,
        text: "“Kingsley!” you say, raising your hand. “Can you tell us about the T at Tech Tower and how to steal it?” Kingsley looks at you with a confused look and pales a little.",
        options: [
            {
                text: 'Continue.',
                nextText: 22
            }
        ]
    },
    {
        id: 22,
        text: "“This doesn’t have anything to do with computer science! I cannot answer this question or any other irrelevant topics. You have a final coming up!”",
        options: [
            {
                text: 'Restart.',
                nextText: 24
            }
        ]
    },
    {
        id: 24,
        text: "You slump down in defeat and decide to take his words to heart. You should be studying right now and Kingsley was right. This endeavor was pointless.",
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 25,
        text: "You decide to start by going to Reddit, since that has been helpful to you in the past. There are a lot of trolls and people who call your mom fat, but you persevere. Maybe by telling them about how fat their moms are in the process.",
        options: [
            {
                text: 'Continue to Reddit.',
                requiredState: currentState => currentState.Phone,
                nextText: 26
            },
            {
                text: 'Continue to Reddit.',
                requiredState: currentState => !currentState.Phone,
                nextText: 29
            }
        ]
    },
    {
        id: 26,
        text: "What do you wish to search reddit for.",
        options: [
            {
                text: 'Read about past successes of stealing the T.',
                nextText: 27
            },
            {
                text: 'Read about previous students.',
                nextText: 28
            }
        ]
    },
    {
        id: 27,
        text: "You read about how past students have seen the students who have been successful in stealing the T essentially living in the library. You decide to check that out and see if some research might help you.",
        options: [
            {
                text: 'Continue.',
                nextText: 100
            }
        ]
    },
    {
        id: 28,
        text: "You get tired of people calling you names, and people talking crap about how bad tech football is? So you decide to go straigt to the tower.",
        options: [
            {
                text: 'Continue.',
                nextText: 30
            }
        ]
    },
    {
        id: 29,
        text: "You decide to start by going to Reddit, since that has been helpful to you in the past. But as your reach for your phone, you realize that you don't have it. In defeat, you decide to head back home and just study in vain.",
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 30,
        text: "You attempt to enter the tower without causing suspicion. But there’s a security guard at the front looking at you suspiciously. He looks at your disheveled shape and snarls, “What are you doing here instead of studying for  finals?”",
        options: [
            {
                text: 'Continue.',
                nextText: 31
            }
        ]
    },
    {
        id: 31,
        text: "You  try to feign innocence, but fail miserably. “I’m just here for the view.” you say as innocently as possible.\n\nThe guard sees right through you.\n\n“You’re here to attempt stealing the T, aren’t you? Well it won’t work! We’ve already caught two others before you and I won’t let you anywhere close to the tower!”\n\nAnd with that the guard takes you into custody and you fail your mission.",
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 100,
        text: "You’re in the Price Gilbert Library babyyy! The home of all studious Tech students and coffeeholics. You see a student beside you who seems knowledgeable and knows what they’re doing with their life. You also see a kind Librarian who is quietly working on her computer.",
        options: [
            {
                text: 'Continue.',
                nextText: 101
            }
        ]
    }, 
    {
        id: 101,
        text: 'You look at the overwhelming amount of resources. You could try to comb through everything, but this could take more time than you have.\n\nYou find yourself with three choices.',
        options: [
            {
                text: 'Ask another student who also seems done with life for help.',
                nextText: 32
            },
            {
                text: 'Ask the Librarian for help.',
                nextText: 34
            },
            {
                text: 'Scour the library for all things Tech Tower.',
                nextText: 35
            }
        ]
    },
    {
        id: 32,
        text: "You decide to ask the other knowledgeable student for help. You’ve seen him in your classes before, and he seems to know more about Georgia Tech than you ever did.\n\n“Hello, Vitto,” you say, getting his attention.",
        options: [
            {
                text: 'Continue.',
                nextText: 33
            }
        ]
    },
    {
        id: 33,
        text: "Vitto looks up from his laptop and removes his headphones. “Hi.”\n\n“I was wondering...can you help with finding a successful way  of stealing  the T?”",
        options: [
            {
                text: 'Continue.',
                nextText: 102
            }
        ]
    },
    {
        id: 102,
        text: "“That depends,” Vitto says, leaning back in his chair and scrutinizing you. “Answer this question and I may  or  may not help you.”\n\nYou nod in agreement to the terms.\n\n“Is Computational Media the best major or not?”",
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
        id: 34,
        text: '“Hello,” you say, getting her attention.\n\nHer head snaps up from her laptop. “Hi.”\n\n“I was wondering...can you help with finding a successful way  of stealing  the T?” She narrows her eyes and looks at you with suspicion. You think you are done for.',
        options: [
            {
                text: 'Continue.',
                nextText: 103
            }
        ]
    },
    {
        id: 103,
        text: 'Then she smiles and shrugs.\n\n“Sure, why not? I’ve been bored out of my mind here anyway.” And with that, she pulls out a  scroll from under her desk  and hands  it to you. “These are the plans of successful  students in the past. Use them wisely.”\n\nYou turn to leave when  she calls out again. “Oh! And you should find the Ramblin Wreck before you attempt to do this. There is something in there that will be helpful in your endeavor.”',
        options: [
            {
                text: 'Find the Ramblin Wreck.',
                nextText: 200
            }
        ]
    },
    {
        id: 35,
        text: 'You decide to try your hand at figuring out a good plan by yourself.\n\nHmm, you think to yourself. If I were a secret  plan, where would I be?\n\nYou traverse through the different shelves in the  library dedicated  to the history of Georgia Tech.  As you look, you notice that no one is around you and it is incredibly quiet. Yet, you can’t help but feel that  someone is watching you.\n\nYou take one of  the books off of the shelf titled A History of Tech Tower, thinking that it might be helpful to you.',
        options: [
            {
                text: 'Continue.',
                nextText: 36
            }
        ]
    },
    {
        id: 36,
        text: 'Suddenly out of the blue you hear a loud, “BOO!” Startled, you drop the title and swivel around in panic. Your heart doesn’t stop pounding even as you register the person who scared you.\n\nPresident Ángel Cabrera.\n\nInternally, you curse. Just your luck to get caught by the President while attempting to commit something illegal. Play it cool, you tell yourself.\n\n“Hello, sir! I didn’t realize it was you,” you say as you smile innocently. President Cabrera narrows his eyes. You silently pray that your kiddie acting classes paid off.',
        options: [
            {
                text: 'Continue.',
                nextText: 104
            }
        ]
    },
    {
        id: 104,
        text: '“Yes, I have a tendency to strike fear in hearts, especially those of wrongdoers.” Your heart pace quickens. “What are you doing in our fine library today? It’s not so often that we are able to see students who rely on physical books over their digital resources.” \n\nYour mind is racing fast. You have two options, to tell a lie or to tell the truth. Telling the truth might cause him to suspend you right then and there, but telling a lie that can be easily exposed especially if you are successful would result in even worse punishment. Which should you do?',
        options: [
            {
                text: 'Lie.',
                nextText: 140
            },
            {
                text: 'Tell the Truth.',
                nextText: 37
            }
        ]
    },
    {
        //pizza
        id: 105,
        text: "Vitto smiles. “Wise  choice. Yes, I will help you.” He rummages through his backpack and pulls out a scroll. “Use this. But  you must also find the  Ramblin Wreck and retrieve an object that  will be helpful to you  later on.” You wait for him to say  more, but he just stares at you pointedly.\n\n“Well? What are you waiting for?” You thank him, leap up, head to find the Ramblin Wreck.",
        options: [
            {
                text: 'Continue on in your pursuit of the coveted T and Find the Ramblin Wreck.',
                nextText: 200
            }
        ]
    },
    {
        //pizza
        id: 106,
        text: 'Vitto nods his head. “Alright,” he says. He pulls out a clump of paper from a folder in his backpack and hands it to you. “Follow the instructions on this map and it will take you where you need to go. Good luck.”\n\nYou look down at the first page in the clump and read the text. Go to Tech Green. Odd, you think. But you leave to go there anyway.',
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
        text: '“I-I’m researching Tech Tower for my parents.” You internally cringe. Why would you be researching at the library for your parents? But it’s the best lie you could come up with under pressure.\n\nPresident Cabrera does not seem to be buying it. It looks like those kiddie acting classes did not pay off after all.\n\n“I think that you are researching Tech Tower to try and steal the T.” You open your mouth to deny it but he holds up his hand and cuts you off. “Don’t even bother hiding it; I have my sources. You’re suspended for the attempted crime.”',
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 37,
        text: "“I-I'm researching Tech Tower so that I can steal the T and solve all my problems!” You are surprised at yourself for so boldly telling the President your plan. Even he looks shocked, with his eyebrow high and eyes wide. But after a second he starts laughing. Tentatively, you join in.\n\n“Stealing the T, eh? That is a good one.” His face suddenly turns stoic and your smile also melts at the seriousness. “You really want to do this?” You’ve already come this far and the President doesn't seem to be playing games, so you nod.",
        options: [
            {
                text: 'Continue.',
                nextText: 141
            }
        ]
    },
    {
        id: 141,
        text: '“Alright. I will help you.” From the laptop bag he’d been carrying, the President produces a clump of papers and hands them to you. “Follow the instructions on this map and it will take you where you need to go.” You take them, puzzled, but the President is already walking away.\n\nYou look down at the first page in the clump and read the text. Go to Tech Green. Odd, you think. But you leave to go there anyway.',
        options: [
            {
                text: 'Carry on to the Tech of Green.',
                nextText: 142
            }
        ]
    },
    {
        id: 142,
        text: "You come to Tech Green, the vast expanse of grass filled with walking students and picnics. You squint down at the map and read the next instruction. Tap your foot eleven times next to the statue of Einstein. You shrug and go to the Einstein statue.",
        options: [
            {
                text: 'Continue.',
                nextText: 143
            }
        ]
    },
    {
        id: 143,
        text: "One, two, three. You stomp.  People are looking at you weirdly, but you continue anyway in determination.\n\nFour, Five, Six. The earth under your feet starts rumbling a little. You  continue, undeterred.\n\nSeven, eight, nine. You hear dozens of footsteps approaching in your direction, but you don't look  in their direction. You are going to finish this!",
        options: [
            {
                text: 'Continue.',
                nextText: 144
            }
        ]
    },
    {
        id: 144,
        text: "Ten. One more! But as your foot is in the air, a  grappling hook latches on to your leg, causing a sharp pain to shoot up your leg. You yell in pain as the blood spurts out of your leg and you fall to  the ground in agony.",
        options: [
            {
                text: 'Continue.',
                nextText: 145
            }
        ]
    },
    {
        id: 145,
        text: "“You are being charged by the Stealing the T Task Force with the crime of attempting to steal the T from Tech Tower. We have testimony of this act and you have incriminated yourself by choosing to follow out the instructions provided by the decoy map.” Your eyes widen as you understand.\n\nYou’ve been betrayed.\n\nYou don’t fight when the task force takes you into custody. You give up.",
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 160,
        text: 'You decide to hit the Dining Hall to fuel up before you tackle your mission. Perhaps you might also get more information there about successfully stealing the T. Once you get there, you have three options. Do you want to dine in, dine out, or opt out of eating.',
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
        text: 'Your eyelids are heavy and your stomach aches. Perhaps you should have taken a bite of food after all; you’re exhausted. But before you can do anything else, you pass out of hunger, unable to complete your mission.',
        options: [
            {
                text: "Restart.",
                nextText: -1
            }
        ]
    },
    {
        id: 162,
        text: 'Dining out has always been a precarious choice. You never know where the food truly comes from. Unfortunately, today is not your lucky day and you go down with food poisoning, unable to complete your mission.',
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 163,
        text: 'The food is not  good but at least it sustains you and doesn’t make you sick. You’re eating alone when a smart friend of yours walks up.“Hi Sheleah!” you say, finishing up the last bits of your broccoli.',
        options: [
            {
                text: 'Continue.',
                nextText: 164
            }
        ]
    },
    {
        id: 164,
        text: 'The food is not  good but at least it sustains you and doesn’t make you sick. You’re eating alone when a smart friend of yours walks up.\n\n“Hi Sheleah!” you say, finishing up the last bits of your broccoli.',
        options: [
            {
                text: 'Continue.',
                nextText: 165
            }
        ]
    },
    {
        id: 165,
        text: '“How’s it going?” she responds. “Why are you here instead of studying? Don’t you have a final tomorrow?” You swallow and reply.',
        options: [
            {
                text: 'Continue.',
                nextText: 166
            }
        ]
    },
    {
        id: 166,
        text: '“I’m going to steal the T from Tech Tower.” Sheleah’s eyes widen.',
        options: [
            {
                text: 'Continue.',
                nextText: 167
            }
        ]
    },
    {
        id: 167,
        text: '“I’ve heard of this before. George P. Burdell came to you, didn’t he?” You nod your head, surprised that she knows.',
        options: [
            {
                text: 'Continue.',
                nextText: 168
            }
        ]
    },
    {
        id: 168,
        text: '“I’ve heard that the library has secret plans that the successful students of the past have used. You  should try checking there to help you.” She winks and walks away.  You  smile, happy to have found this new lead.',
        options: [
            {
                text: 'Continue.',
                nextText: 100
            }
        ]
    },
    {
        id: 180,
        text: 'You at stadium babyyyyyy. You look around and breathe the school spirit. Nothing is as good as seeing where the magic doesn’t happen.\n\nLooking to your right,  you see Buzz talking to a couple of the football players. On your right, you see and hear the coach yelling at some other players. Who do you choose to talk to?',
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
        text: 'You decide to talk to the coach. You head on over towards the right and wait for him to finish chewing out his players. Man does he have a loud voice.\n\n“Hey, Coach?” you tentatively say after the players leave. He turns to you, looking bemused.\n\n“Uh...yeah. How can I help you?”',
        options: [
            {
                text: 'Continue.',
                nextText: 183
            }
        ]
    },
    {
        id: 183,
        text: '“Well, I was wondering whether you could tell me how to successfully steal the T from Tech Tower.” The coach looks at  you for a second before bursting out laughing.\n\n“Trust me, child. You don’t want to go playing around with that sort of power. If you get caught, that’s it. You’re done for.” You shake your  head, getting a little mad.',
        options: [
            {
                text: 'Continue.',
                nextText: 184
            }
        ]
    },
    {
        id: 184,
        text: '“I need this, coach. If you know something about it, then help me. This school needs to be taken down a peg.” The coach looks into your determined eyes and his lips tighten into a straight line.',
        options: [
            {
                text: 'Continue.',
                nextText: 185
            }
        ]
    },
    {
        id: 185,
        text: '“Fine. It’s your grave. But here are the plans that the successful students from my year used.” He brings out a clump of paper from inside his folder. “Follow the instructions on this map and it will take you where you need to go. I wish you the best of luck, kid.” Then he turns away from you to shout  at his players again.\n\nYou look down at the first page in the clump and read the text. Go to Tech Green. Odd, you think. But you leave to go there anyway.',
        options: [
            {
                text: 'Continue.',
                nextText: 142
            }
        ]
    },
    {
       id: 182,
       text: '“YOOOOO BUZZIE BOIIII!” You yell. “HOW’S MY DUDE?” Buzz gives you a mock startled reaction before dancing in place.\n\nBoth you and buzz make a lot of buzzing noises. You also realize that buzz is buzztin, he got that giant stinger, THIC. ',
       options: [
           {
               text: 'Continue.',
               nextText: 186
           }
       ]
    },
    {
        id: 186,
        text: '“Yo Buzz, I need some help. I need to know how to steal the T from Tech Tower.”\n\nBuzz mimes laughing at you, but when you don’t join in stops.',
        options: [
            {
                text: 'Continue.',
                nextText: 187
            }
        ]
    },
    {
        id: 187,
        text: '“For real?” Buzz says. You nod your head. \n\n“Yes. I am sick and tired of these problems and by stealing the T, they’ll go away. Will you help me?”',
        options: [
            {
                text: 'Continue.',
                nextText: 188
            }
        ]
    },
    {
        id: 188,
        text: 'Buzz thinks for a moment before nodding. You beam in victory.\n\nBuzz reaches into his suit and  produces a scroll with  plans by successful students of the past. Additionally, he tells you to find the Ramblin Wreck and get a special tool from the car. You nod in earnest.\n\n“Thank you,” you say before heading away.',
        options: [
            {
                text: 'Continue.',
                nextText: 200
            }
        ]
    },
    {
        id: 188,
        text: 'Buzz thinks for a moment before nodding. You beam in victory.\n\nBuzz reaches into his suit and  produces a scroll with  plans by successful students of the past. Additionally, he tells you to find the Ramblin Wreck and get a special tool from the car. You nod in earnest.\n\n“Thank you,” you say before heading away.',
        options: [
            {
                text: 'Continue.',
                nextText: 200
            }
        ]
    },
    {
        id: 200,
        text: 'How do you find the Wreck?\n\nNow that you have the plans to successfully complete the heist, you just need to find the Ramblin Wreck. You think about the different ways you can go about this. You could choose a slower but safer method like walking. Looking around you, you also see a friend with a skateboard, a scooter rental system, and a trolley system near you. You could also call another friend who, unlike you, isn’t broke and owns a car. Additionally, there’s a Stinger station next to you so you could take a bus as well.\n\nYou suddenly spot a sign on a column near you. Praying to the Buzz Bible will allow miracles to happen. You think, intrigued. You suppose that you could also choose to pray to your Buzz Bible.',
        options: [
            {
                text: 'Continue.',
                nextText: 201
            }
        ]
    },
    {
       id: 201,
       text: 'Last you heard, the Ramblin Wreck was somewhere around Tech Square.\n\nWhich option do you choose to find the Ramblin Wreck?',
       options: [
           {
               text: 'Use skateboard and go around campus searching.',
               nextText: 202
           },
           {
            text: 'Take the Tech Trolly.',
            requiredState: currentState => currentState.Phone,
            nextText: 210
           },
           {
            text: 'Take the Tech Trolley.',
            requiredState: currentState => !currentState.Phone,
            nextText: 211
           },
           {
               text: 'walk.',
               nextText: 220
           },
           {
            text: 'Rent a Scooter.',
            requiredState: currentState => currentState.wallet,
            nextText: 230
           },
           {
            text: 'Rent a Scooter.',
            requiredState: currentState => !currentState.wallet,
            nextText: 231
           },
           {
            text: "Call your friend who has a car, because she ain't poor like you.",
            requiredState: currentState => currentState.Phone,
            nextText: 240
           },
           {
               text: "Call your friend who has a car, because she ain't poor like you.",
               requiredState: currentState => !currentState.Phone,
               nextText: 241
           },
           {
               text: 'Pray to the sacred Buzz Bible.',
               requiredState: currentState => currentState.BuzzBible,
               nextText: 250
           },
           {
               text: 'Pray to the sacred Buzz Bible.',
               requiredState: currentState => !currentState.BuzzBible,
               nextText: 251
           }
       ]
    },
    {
        id: 202,
        text: '“Hey Jamahl!” You yell to your friend. He changes his direction and stops next to you.\n\n“Hey, what’s up?”he replies.\n\n“Can I borrow your skateboard? I need to find the Ramblin Wreck.”',
        options: [
            {
                text: 'Continue.',
                nextText: 203
            }
        ]
    },
    {
        id: 203,
        text: 'He thinks over this for a moment and then shrugs.\n\n“Sure. Just bring it back to the College of Computing when you’re done.”\n\n“Thank you!” You say before zipping off to find the Ramblin Wreck.',
        options: [
            {
                text: 'Continue.',
                nextText: 260
            }
        ]
    },
    {
        id: 210,
        text: 'You reach into your pocket and pull out your phone. Thankfully, a Tech Trolley is headed your way! You can take that to Tech Square and easily find the Ramblin Wreck from there.\n\nYou open your Passio.Go app to see where the trolley is. It is only one stop away! You smile, thinking how lucky you are.\n\n-----Forward one hour later------',
        options: [
            {
                text: 'Continue.',
                nextText: 212
            },
        ]
    },
    {
        id: 211, 
        text: 'You don’t have your phone! Oh well, you decide to stay at the station anyway and just get on the next trolley that shows up.\n\n-----Forward one hour later------',
        options: [
            {
                text: 'Continue.',
                nextText: 213
            }
        ]
    },
    {
        id: 212,
        text: 'You are still waiting at the station and waiting for the next trolley to come. Only two are operating and the first one that passed you by was too full for you to board. The second one has been at three stops before yours for at least twenty minutes.\n\nYou get so frustrated and give up.',
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 213,
        text: "You are still waiting at the station and waiting for the next trolley to come. Only two are operating and the first one that passed you by was too full for you to board. The second one is nowhere to be seen, and this point you're not even sure if it exists. \n\nYou get so frustrated and give up.",
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 220,
        text: 'You decide to walk to Tech Square. To do so, you need to pass several lights on the  road. As you pass the Delta Upsilon fraternity and step down from the curb to cross the street, you slip on the loose rock and fall. Your eyes widen in horror as you hear a crunch in your ankle.\n\nYou try to stand up, but thee pain is unbearable and you shout in agony. There’s no way you can complete your mission in this condition and you give up, calling out for help to get home.',
        options: [
            {
                text: 'Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 230,
        text: 'You bring out your wallet and grit your teeth as you spend your meager funds on renting the scooter. But the T will be worth it and all your problems will be fixed. You zip away.',
        options: [
            {
                text: 'Continue.',
                nextText: 260
            },
        ]
    },
    {
        id: 231,
        text: "You don't have your wallet! And you’ve just missed your friend with a skateboard and the trolley. In despair, you give up and go home.",
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 240,
        text: 'You pull out your phone and dial your friend’s number. They pick up.\n\n“Hello?”',
        options: [
            {
                text: "Continue.",
                nextText: 242
            }
        ]
    },
    {
        id: 241,
        text: "You don't have your wallet! And you’ve just missed your friend with a skateboard and the trolley. The scooters are also all rented out by now. In despair, you give up and go home.",
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 242,
        text: "“Hey Nivi! I have a favor to ask of you.”\n\n“Sure! What’s up?”\n\n“I need a ride to Tech Square. You have a car today right?”\n\n“Yeah, I can pick you up in a few minutes. I was just heading home anyway.”\n\n“Thanks!”\n\nNivi comes in a couple of minutes and drops you off at Tech Square.",
        options: [
            {
                text: 'Continue.',
                nextText: 260
            }
        ]
    },
    {
        id: 250,
        text: 'You take out your Buzz Bible and flip to the first page. Immediately a glow surrounds the whole book, blinding you. You look around to see if anyone else noticed, but no one seems to be stopping or looking in your direction.\n\nYou flinch as a figure rises from the mist of the light and your lips move in awe.\n\n“B-Buzz?” you ask in amazement. “You’re glowing! Do you have magic?”',
        options: [
            {
                text: 'Continue',
                nextText: 252
            },
        ]
    },
    {
        id: 251,
        text: "You don't have your Buzz Bible! And you’ve just missed your friend with a skateboard and the trolley. The scooters are also all rented out by now. In despair, you give up and go home.",
        options: [
            {
                text: 'Restart.',
                nextText: -1

            }
        ]
    },
    {
        id: 252,
        text: 'Buzz looks at you with an ethereal glance. “I am not the Buzz you know and are familiar with. I am Buzz of the Past.” Buzz’s voice is operative, with a multitude of voices blending together disconcertingly. “I have been summoned by your desperation to complete this mission. The Ramblin Wreck is at Tech Square near the Barnes and Noble bookstore. But I can help you even more if you do one thing.”\n\n“And-,” you clear your throat so that your voice no longer squeaks. “And what’s that?”',
        options: [
            {
                text: 'Continue',
                nextText: 253
            },
        ]
    },
    {
        id: 253,
        text: '“Answer one question, a riddle of sorts. If you answer correctly, then I will transport you successfully to the tower with no more obstacles in your path.”\n\nYou think for a moment before nodding your head. This way will be faster if you answer correctly. “What is your question?”\n\n“In addition to the "Ramblin Wreck", there are two othe wrecks. What is the name of one of them?”',
        options: [
            {
                text: 'The Alumni Wreck',
                nextText: 254
            },
            {
                text: 'The Stadium Wreck',
                nextText: 255
            },
            {
                text: 'The Burdell Wreck',
                nextText: 255
            },
            {
                text: 'The Georgia Tech Hotel Wreck',
                nextText: 254
            }
        ]
    },
    {
        id: 254,
        text: '“You have answered the question correctly!” Buzz says, light glowing even brighter. “Good luck to you. You will be transported in a second.” With a flash of blinding light you feel your body float above the clouds. You close your eyes in fear, but in a second, you find yourself standing on Tech Tower, within reach of the T. Next to you, you see a bunch of tools for sculpting out the T and keeping you safe while you climb the tower.',
        options: [
            {
                text: 'Continue',
                nextText: 280
            },
        ]
    },
    {
        id: 255,
        text: '“You don’t have the correct answer, so I cannot help you to the full extent. But I wish you luck with finding the Ramblin Wreck at Tech Square and successfully stealing the T.” Buzz vanishes from your eyes and you are magically transported to Tech Square.',
        options: [
            {
                text: 'Continue',
                nextText: 260
            },
        ]
    },
    {
        id: 260,
        text: 'You find the Ramblin Wreck and scramble on. The person in the driver’s seat yells at you, but you ignore them as you rummage through the tools in the back of the car. There is a box labeled “Stealing the T”. You reason that this box is the one you are supposed to look through.\n\nWhen you open the box, there is a message pasted to the inside of the Hood.\n\n“You have been chosen, congrats!\nBut to complete this mission and pass\nChoose only one, don’t be a fool\nCarefully choose the most useful tool”',
        options: [
            {
                text: 'Continue.',
                nextText: 261
            }
        ]
    },
    {
        id: 261,
        text: 'There are three items in the box. The first is a large “T” similar to the object of your heist. You can tell it’s fake as it is wooden. The box also contains climbing gear that will help you scale the tower. The last item is a bag containing a disguise of a janitor.\n\nYou look at the riddle again. The chest says that you can only choose one item.\n Which one do you choose?',
        options: [
            {
                text: 'Take the large "T" and go to Tech Tower.',
                setState: {largeT: true},
                nextText: 262
            },
            {
                text: 'Take climbing Gear.',
                setState: {climbingGear: true},
                nextText: 264
            },
            {
                text: 'Take janitor disguise.',
                setState: {janitorDisguise: true},
                nextText: 268
            }
        ]
    },
    {
        id: 262,
        text: 'You head up to the main entrance and nod at the security guard there. She gives you a suspicious look but you keep a cheery demeanor as you approach.\n\n“Hello there! How is your day going?” She looks confused at your cheery demeanor.\n\n“Good. What are you doing here?” Her tone is tough, containing no amusement.',
        options: [
            {
                text: 'Continue.',
                nextText: 263
            }
        ]
    },
    {
        id: 263,
        text: 'You hold up the“T” that you got from the Ramblin Wreck. “I’m a design student and I’m recreating the block letters  from Tech Tower for my Project. I wanted to compare the size of this T to the actual T so that I can make a replica for my project.” The guard looks at you suspiciously and for a moment you think you’re done for.\n\n“Sure, what do I care?” she finally says. “Just don’t take too long. We were warned that some action might go down tonight so be in and out quickly.” You nod in gratitude and slip inside. Once you enter and reach the top floor, you look around and find some rope to safely secure you as you complete your mission.',
        options: [
            {
                text: 'Continue.',
                nextText: 280
            }
        ]
    },
    {
        id: 264,
        text: 'You go around the perimeter and attempt to avoid the guards as you walk past. You look for a good spot to start your ascent when you hear footsteps approaching. You curse under your breath as you crouch behind a clump of bushes and push down your climbing gear.\n\nThrough the vegetation of the bushes, you see two guards walking by.',
        options: [
            {
                text: 'Continue.',
                nextText: 265
            }
        ]
    },
    {
        id: 265,
        text: '“I can’t believe they called our whole squad this whole way just for the threat of having a student attempt to steal the T again. What’re they, paranoid that they’ll lose a stupid chunk of metal.”\n\n“Watch your mouth! That’s sacrilege and you could be thrown off the squad for saying things like that.”\n\n“Jeez, keep your pants on. I’m only saying this because I have a date tonight and I’d rather be prepping for that than be out here.” Their voices fade as they walk away.',
        options: [
            {
                text: 'Continue.',
                nextText: 266
            }
        ]
    },
    {
        id: 266,
        text: 'You curse again. This part was going to be harder than  you thought, it seemed. You would have to be fast and there would be no room for errors.\n\nYou start climbing, using your gear to grab onto the wall and stepping carefully on the stones with your climbing shoes. They made several clinks, but hopefully no one would hear it over the natural sounds around you.\n\nYou make it up to the top and hoist yourself on to the last ledge. You see the T, shining in all its brilliance and there for the taking. But just as you are about to reach for the T, your harness is yanked and you lose your grip on the wall. You yell as you fall towards the ground.',
        options: [
            {
                text: 'Continue.',
                nextText: 267
            }
        ]
    },
    {
        id: 267,
        text: 'Your head swims and thinks furiously as you spiral towards the hard, unforgiving ground. This is it, you think. This is where it all ends. But as you brace yourself to turn into human pulp, you’re caught by something bouncy.\n\nYou take a deep breath and force your eyes to open. Around you, a dozen security guards are standing with their electric tasers pointed at you. You don’t even care. You’re just happy to be alive. \n\n“You are being charged by the Stealing the T Task Force with the crime of attempting to steal the T from Tech Tower. We have testimony of this act and you have incriminated yourself by attempting.” Your eyes widen as you understand. But at least you’re alive.\n\nYou close your eyes and accept your defeat.',
        options: [
            {
                text: 'So close yet so far, Restart.',
                nextText: -1
            }
        ]
    },
    {
        id: 268,
        text: 'You put on your disguise behind a column, quickly and efficiently so that no one sees you. You look at your reflection in a nearby window and wince. You look like a potato, but at least no one will recognize you.\n\nYou walk towards the back door and the guard posted there looks up and down at you. Then, without a word, he grunts and lets you pass. You smile as you make your way to the top of the tower.\n\nOnce you enter and reach the top floor, you look around and find some rope to safely secure you as you complete your mission.',
        options: [
            {
                text: 'Continue.',
                nextText: 280
            }
        ]
    },
    {
        id: 280,
        text: 'Grinning, you climb and grab ahold of the T, wedging it from it’s position. As soon as you have it in your hands, it starts to glow a brilliant golden light that astounds you and blinds your eyes. Your vision swims and the air around you heats up immensely.',
        options: [
            {
                text: 'Continue.',
                nextText: 281
            }
        ]
    },
    {
        id: 281,
        text: 'You hear cacophony, a multitude of sounds that overwhelms you and causes your body to convulse. Something is going wrong, horribly wrong. Your head snaps back, making your neck ache.\n\nAnd as soon as the pain begins, it stops. Your heart beats fast as you open your eyes.',
        options: [
            {
                text: 'Continue.',
                nextText: 282
            }
        ]
    },
    {
        id: 282,
        text: "You're standing in an enormous office. It has a beautiful window with a view that steal’s your breath away. Nearby there is a desk, full of all the things you have ever wanted. Loads of pictures of your friends and family are there and you have the latest devices possible.\n\nYou turn around and notice that several other people are also in the room. They are talking amongst themselves until they realize that you are looking at them. They start clapping immediately.\n\n“CONGRATULATIONS!” They all scream as they pull on confetti. You are exceedingly surprised and confused but you recognize several of your friends in the audience.\n\n“What’s going on?” you ask. They grin at you. \n\n“What do you mean? You finished top of our class and now you’ve landed your dream job! You start it in a month, but they’ve already given you your office.” You take in everything in astonishment. \n\n“What’s even more, you have no student loans to pay! You got a scholarship from your dream company that covered everything. Now all you have to do is sit back and enjoy life.” Your life is…\n\n“Awesome!” You turn to see your idol looking at you with pride and admiration. You can’t believe it. You...were successful?\n\nIn the corner, you see the ghost of George P. Burdell looking at you with pride. He nods in acknowledgement and vanishes. You grin from ear to ear and your heart roars in joy.\n\nYou did it. \n\nYou  DID IT.\n\nYOU DID IT!!!!!!!!!",
    },
    {
        id: 283,
        text: 'You have chosen to do nothing and have thus been granted reprieve by the Fates. Congrats!'
    }    
]



startGame()
