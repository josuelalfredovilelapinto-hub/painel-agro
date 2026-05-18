exports.handler = async (event, context) => {
  const API_URL = "https://api.weatherlink.com/v1/NoaaExt.xml?user=001D0AE08F6A&pass=Teste0&apiToken=743204D9EA424F04898A6B22CD797141";

  try {
    const response = await fetch(API_URL); // O Netlify já entende o fetch
    const xmlData = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/xml",
        "Access-Control-Allow-Origin": "*"
      },
      body: xmlData
    };
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "Falha ao conectar com a estação" }) 
    };
  }
};