import React, { useState, useContext, useEffect, use } from "react";
import axios from "axios";
import { LanguageContext } from "../context/LanguageContext";

function GreetingCard({ greeting }) {
    const { language } = useContext(LanguageContext);
    const [translatedText, setTranslatedText] = useState(greeting);

    useEffect(() => {
        if (language === 'he') {
            setTranslatedText(greeting);
            return;
        }
        const translate = async () => {
            try {
                const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(greeting)}&langpair=he|${language}`;
                const response = await axios.get(url);
                setTranslatedText(response.data.responseData.translatedText);
            } catch (error) {
                console.error("Error translating text:", error);
            }
        }
        translate();
    }, [language, greeting]);

    return (
        <div style={{ border: '2px solid #ffcc00', padding: '15px', margin: '10px', borderRadius: '10px' }}>
            <p>{translatedText}</p>
        </div>
    );
}
export default GreetingCard;