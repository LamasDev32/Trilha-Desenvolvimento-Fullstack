const preventScroll = (() => {
    let count = 0;

    return (e) => {
        if(e.key === "ArrowDown"){
            e.preventDefault()
            count++
            console.log(`Rolagem para baixo desabilitada! (${count}/10)`);
        }

        if(count >= 10) {
            console.log("Removendo event listener.");
            document.removeEventListener('keydown', preventScroll);
        }
    }
})();

document.addEventListener("keydown", preventScroll);