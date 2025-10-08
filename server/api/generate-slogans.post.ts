import Groq from 'groq-sdk';
// Không cần import sloganDataSource ở đây nữa

// Lấy tên ngách một cách an toàn
// (File này có thể tách ra thành `utils/getNicheName.js` nếu muốn)
const nicheNameMap = {
    'real-estate': 'Real Estate',
    'campaign': 'Campaign',
    'restaurant': 'Restaurant',
    'business': 'Business',
}

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const groq = new Groq({ apiKey: config.groqApiKey });

    const body = await readBody(event);
    const keyword = body.keyword?.trim() || 'your brand';
    const nicheKey = body.niche?.trim();
    
    // Lấy tên ngách đầy đủ, hoặc mặc định là 'business'
    const nicheName = nicheKey ? nicheNameMap[nicheKey] || 'business' : 'business';

    try {
        // Prompt đơn giản và trực tiếp
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: `You are a world-class advertising copywriter. Your task is to generate 5 creative, catchy, and high-quality slogans based on a user's keyword and business niche. The output MUST be a valid JSON object with a single key "slogans", which is an array of 5 strings. Do not include any other text or explanations.`
                },
                {
                    role: 'user',
                    content: `Keyword: "${keyword}"\nNiche: "${nicheName}"`
                }
            ],
            model: 'llama-3.1-8b-instant',
            temperature: 0.9,
            max_tokens: 1024,
            response_format: { type: 'json_object' },
        });

        if (chatCompletion.choices[0]?.message?.content) {
            const parsedJson = JSON.parse(chatCompletion.choices[0].message.content);
            const aiSlogans = parsedJson.slogans || [];
            return { slogans: aiSlogans };
        }
        
        // Nếu AI không trả về gì, ném lỗi để nhảy xuống catch
        throw new Error("AI returned empty content");

    } catch (error) {
        console.error('AI call failed, returning hardcoded fallback slogans:', error);
        
        // DỰ PHÒNG: Nếu AI lỗi, trả về 3 câu đơn giản để người dùng không thấy trang trắng
        const keywordCap = keyword.charAt(0).toUpperCase() + keyword.slice(1);
        return { 
            slogans: [
                `${keywordCap}: Quality You Can Trust.`,
                `The Future of ${keywordCap}.`,
                `Experience the ${keywordCap} Difference.`
            ] 
        };
    }
});
