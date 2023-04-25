const My_API_KEY = process.env.My_API_KEY;
// https://api.openai.com/v1/completions   for model: text-davinci-003
// gpt-3.5-turbo
// max_tokens: 7

// For better deterministic model set 
// temperature: 0.8
// top_p: 


async function fetchData() {
    const response = await fetch ("https://api.openai.com/v1/chat/completions",{
        method: "POST",
        headers: {
            Authorization:`Bearer ${My_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-0301", 
            messages: [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": "DIY steps for reverse osmosis?"}],
        })
    })
    const data = await response.json()
    console.log(data)

    return<></>
}

export default fetchData;