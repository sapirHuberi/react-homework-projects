import React ,{useContext}from "react";
import { LanguageContext } from "../context/LanguageContext";

function BirthDate({ dateOfBirth}) {
    const {language}=useContext(LanguageContext);
    const currentYear=new Date().getFullYear();
    const birthYear=new Date(dateOfBirth).getFullYear();
    const age=currentYear - birthYear;
   const localeMap = {
        he: 'he-IL',
        en: 'en-US',
        fr: 'fr-FR'
    };
    return (
    <div style={{ padding: '20px', borderBottom: '1px solid #ddd' }}>
      <h2>מזל טוב! אתה בן {age}.</h2>
      <p>תאריך הלידה שלך: {dateOfBirth.toLocaleDateString('he-IL')}</p>
    </div>
  );

}

export default BirthDate;