import loading from './loading.gif'
export const GenerateBtn = (e) => {

    function handleClick() {
        let prompt = localStorage.getItem('prompt') || `Generate a cat name which is beautiful . 
            give me the name only. dont send me any other extra texts. give me only and only one 
            word and that is that cats name.`
        console.log(prompt);

        async function generate(param) {
                let display = document.querySelector('.display')
            try {
                const API_URL = "https://api.together.xyz/v1/chat/completions";
                const API_KEY = "056ac2daf3163d77af2e4c8b3e661f43364aa89b59a0101b94555e550aff9cb2";
                display.innerHTML = `  <div class="loading flex">
              <img src="${loading}" alt="Loading Name...">
            </div>`

                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${API_KEY}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        model: "deepseek-ai/DeepSeek-V3",
                        messages: [{ role: "user", content: prompt }]
                    })
                });

                const data = await response.json();
                console.log(data.choices[0].message.content);
                display.innerHTML = data.choices[0].message.content

            } catch (err) {
                display.innerHTML = "Something went wrong!"
                
            }
            // return data.choices[0].message.content

        }
        generate()
    }
    return (
        <div onClick={handleClick} className="generate-btn">
            Generate Name
        </div>
    )
}
