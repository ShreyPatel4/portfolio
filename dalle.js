const axios = require('axios');

exports.handler = async (event) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/images/generations', {
            prompt: "Tech-Infused Visions: Crafting the Perfect Shot with new ideas",
            n: 1,
            size: "1024x1024"
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });

        const imageUrl = response.data.data[0].url;

        return {
            statusCode: 200,
            body: JSON.stringify({ imageUrl }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to generate image' }),
        };
    }
};
