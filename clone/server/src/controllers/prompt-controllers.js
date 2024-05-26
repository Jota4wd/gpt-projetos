const inputPrompt = require("../models/input-prompt");
const openai = require("../config/openai");

module.exports = {
    async sendText(req, res) {
        const openaiAPI = openai.configuration();

        try {
            const response = await openaiAPI.createCompletion(
                openai.textCompletion({ prompt: req.body })
            );

            return res.status(200).json({
                success: true,
                data: response.data.choices[0].text
            });

        } catch (error) {
            console.error("Error during text completion:", error);
            return res.status(400).json({
                success: false,
                error: error.response ? error.response.data :
                    "There was an issue on the server"
            });
        }
    }
};
