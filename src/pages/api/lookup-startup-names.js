

const lookupStartupNames = async ({
  startupType,
  location,
  industry,
  description,
  numWords,
  }) => {
    console.log(`OPEN AI KEY:${process.env.OPENAI_KEY}`);
    try {
      const response = await fetch(
        "https://api.openai.com/v1/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_KEY}`,
          },
          body: JSON.stringify({
            prompt: `Give a list of 10 names for ${startupType} company business, which operates in ${industry} and the purpose of the business is ${description} to be situated in ${location}. The startup name should be in a way that is SEO friendly.`,
            max_tokens: 200,
            model: "text-davinci-003",
            temperature: 0.5,
          }),
        }
      );
      const data = await response.json();
  
      return data.choices[0].text;
    } catch (err) {
      console.error(err);
    }
  };
  
  export default async function handler(req, res) {
    const { startupType, location, industry, description, numWords } = req.body;
  
    const generaetedNames = await lookupStartupNames({
      startupType,
      location,
      industry,
      description,
      numWords,
    });
    
    res.status(200).json({
      generaetedNames,
    });
  }