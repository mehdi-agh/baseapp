export const getLanguageName = (code: string) => {
    switch (code) {
        case 'en':
            return 'English';
        case 'ru':
            return 'Русский';
        case 'tr':
            return 'Turkish';
        default:
            return 'English';
    }
};
