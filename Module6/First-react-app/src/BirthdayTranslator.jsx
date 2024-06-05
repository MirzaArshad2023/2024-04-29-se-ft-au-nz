import { useState } from "react";

const phrases = new Map([
    ['english', 'Happy Birthday'],
    ['german', 'Alles Gute zum Geburtstag'],
    ['spanish', 'Feliz Cumpleaños']
]);
function BirthdayTranslator() {
    
    const [currentLanguage, setCurrentLanguage] = useState('english');
    //const [phrase, setPhrase] = useState(phrases.get('english'))
    //const [currentPhrase, setCurrentPhrase] = useState({lang: 'english', phrase: 'Happy Birthday'})
    const handleChangeLanguage = (lang) => {
        setCurrentLanguage(lang);
        //setPhrase(phrases.get(lang));
        //setCurrentPhrase({lang: lang, phrase: phrases.get(lang)})
    }
    return (
        <div className="BirthdayTranslator componentBox">
            <h3>{phrases.get(currentLanguage)}! ({currentLanguage})</h3>
            <button onClick={() =>

                handleChangeLanguage('english')}>English</button>

            <button onClick={() =>

                handleChangeLanguage('german')}>German</button>

            <button onClick={() =>

                handleChangeLanguage('spanish')}>Spanish</button>

        </div>
    )
}
// Add this to BirthdayTranslator.jsx and render it in App.jsx
// ++ Add support for another language!

export default BirthdayTranslator