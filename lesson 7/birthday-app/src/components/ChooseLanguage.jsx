import React,{useContext} from "react";
import { LanguageContext } from "../context/LanguageContext";

function ChooseLanguage(){
    const {language, setLanguage}=useContext(LanguageContext);
    return(
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
            <label>בחר שפה / Choose Language:</label>
            <select value={language} onChange={(e)=>setLanguage(e.target.value)} >
                <option value="en">English</option>
                <option value="he">עברית</option>
                <option value="fr">Français</option>
            </select>
            <p>שפה נבחרת כרגע: {language}</p>
        </div>
    )
}
export default ChooseLanguage;