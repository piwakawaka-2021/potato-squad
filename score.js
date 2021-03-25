const vegetables = {
    caulliflower: 0,
    cabbage: 0,
    brocolli: 0,
    carrot: 0,
    potato: 0,
    eggplant: 0
}

const questions = [
    {
        id: 1,
        question: "What is your fave colour?",
        answers: [
            {
                green: [brocolli, cabbage],
                orange: [carrot],
                brown: [potato],
                other: [caulliflower]
            },
            {
                id: 1,
                answer: "Green",
                vegetables: [brocolli, cabbage],
            },
            {
                id: 2,
                answer: "Orange",
                vegetables: [carrot],
            }, {
                id: 3,
                answer: "Purple",
                vegetables: [eggplant],
            }, {
                id: 4,
                answer: "Other?",
                vegetables: [caulliflower, potato],
            },

        ],
    },
    {
        id: 2,
        question: "Do you take pride in what you wear?",
        answers: [
            {
                id: 1,
                answer: "Yes!",
                vegetables: [caulliflower, potato, eggplant],
            },
            {
                id: 2,
                answer: "Nope...",
                vegetables: [carrot, brocolli, cabbage]
            }
        ],
    },
    {
        id: 3,
        question: "What are you doing this weekend?",
        answers: [
            {
                id: 1,
                answer: "Going to bed early",
                vegetables: [cabbage],
            }, {
                id: 2,
                answer: "Watching netflix",
                vegetables: [potato],
            }, {
                id: 3,
                answer: "Getting wild!",
                vegetables: [eggplant, carrot],
            }, {
                id: 4,
                answer: "Board game night",
                vegetables: [caulliflower, brocolli],
            },
        ],
    },
    {
        id: 4,
        question: "If your life was a movie, what would it be?",
        answers: [
            {
                id: 1,
                answer: "Drama",
                vegetables: [cabbage],
            },{
                id: 2,
                answer: "Comedy",
                vegetables: [eggplant],
            }, {
                id: 3,
                answer: "Romance",
                vegetables: [potato],
            }, {
                id: 4,
                answer: "Action",
                vegetables: [brocolli],
            },{
                id: 5,
                answer: "Disaster",
                vegetables: [carrot],
            },{
                id: 6,
                answer: "Musical",
                vegetables: [caulliflower],
            },


        ],
    },
    {
        id: 5,
        question: "Do you enjoy playing sports?",
        answers: [
            {
                id: 1,
                answer: "Yeah!",
                vegetables: [caulliflower, brocolli, eggplant],
            },
            {
                id: 2,
                answer: "Noooo!",
                vegetables: [potato, cabbage, carrot]
            }

        ],
    }
]


// where vegetable is a string
function addPointToVegetable(vegetablesObj, vegetable) {
    if (!vegetablesObj.hasOwnProperty(vegetable)) {
        throw new Error("The vegetable:", vegetable, "can't be found")
    }
    vegetablesObj[vegetable]++
}