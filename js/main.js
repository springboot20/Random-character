window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();

    const generatorBtn = document.querySelector(".g--btn");
    function generateCharacter(firstName, lastName, displayId, postId) {

        const display = document.getElementById(displayId);
        let output = "";
        let fullName = `${firstName}` + `${lastName}`;
        let post = document.querySelector(`.${postId}`)
        post.innerHTML = `${firstName}` + " " + `${lastName}`;

        output += fullName.charAt(Math.floor(Math.random() * fullName.length));
        return display.innerHTML = `
                <div class="txt">
                    ${output}
                </div>
            `;
    }
    generatorBtn.addEventListener('click', () => {
        setTimeout(() => {
            generateCharacter("Opeyemi", "Abbas", "display", "character")
        }, 400);
    })
})
