const inputText = document.querySelector("#questionInput");
const aiButton = document.querySelector("#askButton");
const outputText = document.querySelector("#answerOutput");

aiButton.onclick = async function (event) {
    const text = inputText.value;
    console.log("User typed: ",text);

    const url = "https://gaic23-openai.openai.azure.com/openai/deployments/gpt-35-turbo/chat/completions?api-version=2024-02-15-preview";

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': '442e593e0f4a4f0888523084c6ed91d4'
        },
        body: JSON.stringify(
            {
                "temperature": 0.7,
                "max-tokens": 800,
                "messages":[
                    {
                      "role": "system" ,
                      "content": "You are an AI assistant that helps people find information."
                    },
                    {
                        "role": "user" ,
                        "content": text
                    }
                ]
            }
        )
    } )
    .then (function (response) {
        return response.json();
    })
    .then ( function (data) {
        outputText.value = data.choices[0].message.content;
        console.log("OpenAI response: ", data);
    });
};

