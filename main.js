//currencies' object
let currency = {
    gems: 1000,
    gemsPerSecond: 0,
    element: {
        gems: document.getElementById("gem_Total"),
        gemsPerSecond: document.getElementById("gemPerSecond"),
    }
}

//mine's object
let mine = 
[   
    {
        addEffect: 1,
        effect: 0,
        level: 0,
        cost: 10,
        element: {
            button: document.getElementById("mine1_Button"),
            effect: document.getElementById("mine1_Effect"),
            level: document.getElementById("mine1_Level"),
            cost: document.getElementById("mine1_Cost"),
        },
        onBuy: () => {
            if (mine[0].cost <= currency.gems) {
                currency.gems -= mine[0].cost;
                mine[0].effect += mine[0].addEffect;
                currency.gemsPerSecond +=  mine[0].addEffect;
                mine[0].level += 1;

                mine[0].element.effect.innerHTML = mine[0].effect;
                mine[0].element.level.innerHTML = mine[0].level;
                currency.element.gems.innerHTML = currency.gems;
                currency.element.gemsPerSecond.innerHTML = currency.gemsPerSecond;
            } else {
                mine[0].element.cost.className = "text-red"
                alert("Not enough gems");
            }
        },
    },

]

//multiplier's object
let multiplier = 
[   
    {
        addEffect: 2,
        effect: 0,
        level: 0,
        cost: 100,
        element: {
            button: document.getElementById("t1_Button"),
            effect: document.getElementById("t1_Effect"),
            level: document.getElementById("t1_Level"),
            cost: document.getElementById("t1_Cost"),
        },
        onBuy: () => {
            if (multiplier[0].cost <= currency.gems) {
                currency.gems -= multiplier[0].cost;
                multiplier[0].effect += multiplier[0].addEffect;
                multiplier[0].level += 1;

                multiplier[0].element.effect.innerHTML = multiplier[0].effect;
                multiplier[0].element.level.innerHTML = multiplier[0].level;
                currency.element.gems.innerHTML = currency.gems;
                currency.element.gemsPerSecond.innerHTML = currency.gemsPerSecond;
            } else {
                multiplier[0].element.cost.className = "text-red"
                alert("Not enough gems");
            }
        }
    },

]

//update function and main loop
setInterval(() => {
    let total = currency.gemsPerSecond;
    currency.gems += total;
    currency.element.gems.innerHTML = currency.gems;
}, 1000)

//adding event listeners (not good yet)
mine[0].element.button.addEventListener("click", mine[0].onBuy)
multiplier[0].element.button.addEventListener("click", multiplier[0].onBuy)

