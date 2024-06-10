const log = document.getElementById("log");
        const state = document.getElementById("state");
        const startbtn = document.getElementById("startbtn");
        const stopbtn = document.getElementById("stopbtn");
        startbtn.addEventListener("click",()=>{
            document.addEventListener("keydown",handleDown);
            document.addEventListener("keyup",handleUp);
            startbtn.disabled= true;
            stopbtn.disabled= false;

        })
        stopbtn.addEventListener("click",()=>{
            document.removeEventListener("keydown",handleDown);
            document.removeEventListener("keyup",handleUp);
            log.textContent = "";
            state.textContent = "";
            startbtn.disabled= false;
            stopbtn.disabled= true;
        })
        function handleDown(e){
            log.textContent = `Key ${e.key} is pressed down`;
            state.textContent = "Key is down";
        }
        function handleUp(e){
            log.textContent = `Key ${e.key} is pressed up`;
            state.textContent = "Key is up";
        }