// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai(){ //named iife
    console.log(`DB connected`)
})();
//global scope k pollution se propblem hoti h kai baar ,, us problem se bchne k liye hum iife use krte h or ye functions immediately invoke b hojate hein jaise constructors hote hein but linewise execution way mein.

// iske baad kuch bhi kaam krna ho to semicolon lgana jrrori hojata h kuki node ko smjh ni aata ki pichla context khtm kahan hora h
(
    (name)=>{ //unnamed iife
        console.log(`DB connected Two , ${name}`)
    }
)('subhagya')