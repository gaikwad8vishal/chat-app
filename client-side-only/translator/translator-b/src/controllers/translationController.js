export const translateText = async (req, res) => {
  const { text, fromLang, toLang } = req.body;

  if (!text || !fromLang || !toLang) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const encodedText = encodeURIComponent(text);
  const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${fromLang}|${toLang}`;

  try {
    const response = await fetch(url); // using native fetch
    const data = await response.json();

    const translated = data?.responseData?.translatedText || "No translation found.";
    return res.status(200).json({ translated });
  } catch (error) {
    console.error("Translation error:", error.message);
    return res.status(500).json({ message: "Translation failed" });
  }
};
