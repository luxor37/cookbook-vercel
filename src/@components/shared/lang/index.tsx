import { useTranslation } from 'react-i18next'

export default function Lang({children}) {
    const { i18n } = useTranslation('common');
    var text = 'Translation Error';
    if(i18n.language == 'en'){
        return (
            <>
                {children.en}
            </>
        )
    }
    else if(i18n.language == 'fr'){
        return (
            <>
                {children.fr}
            </>
        )
    }
}

export function translate(text) {
    const { i18n } = useTranslation('common');
    if(i18n.language == 'en'){
        return text.en
    }
    else if(i18n.language == 'fr'){
        return text.fr
    }
}