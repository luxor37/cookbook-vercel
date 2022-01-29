import { useTranslation } from 'react-i18next'

export default function Lang({ children }) {
    const { i18n } = useTranslation('common');
    var text = i18n.language == 'en' ? 'Translation error' : 'Erreur de traduction';

    if (i18n.language == 'en' && children && children.en) {
        text = children.en
    }
    else if (i18n.language == 'fr' && children && children.fr) {
        text = children.fr
    }
    return (
        <>
            {text}
        </>
    )
}

export function translate(text) {
    const { i18n } = useTranslation('common');

    var textOutput = i18n.language == 'en' ? 'Translation error' : 'Erreur de traduction';

    if (i18n.language == 'en' && text && text.en) {
        textOutput = text.en
    }
    else if (i18n.language == 'fr' && text && text.fr) {
        textOutput = text.fr
    }
    return textOutput;
}