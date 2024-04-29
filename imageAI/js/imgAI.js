const inputRequest = document.querySelector("#requestInput");
const aiButton = document.querySelector("#createButton");
const outputImage = document.querySelector("#createdOutput");

aiButton.onclick = async function (event) {
    const text = inputRequest.value;
    console.log("User typed: ", text);

    const url = "https://gaib2024-oai.openai.azure.com/openai/deployments/Dalle3/images/generations?api-version=2024-02-01"

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': 'fb1de2970b384874b9761e8445348270'
        },
        body: JSON.stringify(
            {
                "temperature": 0.7,
                "prompt": text,
                "size": "1024x1024",
                "n":1,
                "quality": "hd",
                "style": "vivid"
            }
        )
    } )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        outputImage.src = data.data[0].url;
        console.log("OpenAI response: ",data);
    })
}