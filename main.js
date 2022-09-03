let currency =
{
    gem: 10,
    gem_Link: document.getElementById("gem_Total"),
    gem_PerSecond_Link: document.getElementById("gem_PerSecond"),
    multiplier: 0,
    multiplier_Link: document.getElementById("multiplier")
}

let upgrade = 
[
    {
        button: {
            effectAdd: 1,
            level: 0,
            currently: 0,
            cost: 10,
            element: document.getElementById("button_Value1"),
            buttonElement: document.getElementById("multi-T1")
        }
    },{
        button_Value: {add: 2, multiplier: 0, element: document.getElementById("button_Value2")},
        button_Level: {level: 0, element: document.getElementById("multi-T2-Level")},
        button_Cost: 100,
        button_Link: document.getElementById("multi-T2")
    },{
        button: {
            effectAdd: 2,
            level: 0,
            levelLink: document.getElementById("button_Value2")
            multiplier: 0,
            cost: 10,
            effectElement: document.getElementById("button_Value2"),
            buttonElement: document.getElementById("multi-T2")
        }
    }
]

function buyButton1() {
    currency.gem -= upgrade[0].button_Cost;
    upgrade[0].button_Level.level += 1

    currency.gem_Link.innerHTML = currency.gem;
    upgrade[0].button_Level.element.innerHTML = upgrade[0].button_Level.level;
}

function perSecond() {
    currency
}

upgrade[0].button_Link.addEventListener("click", buyButton1)
setInterval(perSecond(), 1000)
