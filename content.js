const interval = setInterval(() => {
    
    let header = document.querySelector("._1QUKR")
    
    if(header) {
        console.log(header)
        clearInterval(interval)

        let btnspeed2 = document.createElement("button")
        btnspeed2.innerHTML = "2x"
        btnspeed2.classList.add("btnStyle")

        let btnspeed15 = document.createElement("button")
        btnspeed15.innerHTML = "  1.5x"
        btnspeed15.classList.add("btnStyle")

        btnspeed2.addEventListener("click", () => {
           let audios = document.querySelectorAll("audio")
           audios.forEach((audio) => {
               audio.playbackRate = 2
           })
        })

        btnspeed15.addEventListener("click", () => {
            let audios = document.querySelectorAll("audio")
            audios.forEach((audio) => {
                audio.playbackRate = 1.5
            })
         })
        
        
        header.appendChild(btnspeed15)
        header.appendChild(btnspeed2)
    }

}, 1000)