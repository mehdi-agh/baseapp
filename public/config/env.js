window.env = {
    api: {
        authUrl: 'http://localhost:9002/api/v2/barong',
        tradeUrl: 'http://localhost:9002/api/v2/peatio',
        applogicUrl: 'http://localhost:9002/api/v2/applogic',
        rangerUrl: 'ws://localhost:9003/api/v2/ranger',
        finexUrl: 'http://localhost:9002/api/v2/finex',
    },
    minutesUntilAutoLogout: '1500',
    withCredentials: false,
    gaTrackerKey: 'UA-38755643-10',
    rangerReconnectPeriod: '1',
    msAlertDisplayTime: '5000',
    incrementalOrderBook: true,
    finex: true,
    isResizable: false,
    isDraggable: false,
    languages: ['en', 'ru'],
    sessionCheckInterval: '15000',
    balancesFetchInterval: '3000',
    passwordEntropyStep: 14,
    showLanding: true,
    sentryEnabled: false,
    kycSteps: [
        'email',
        'phone',
        'profile',
        'document',
        'address',
    ],
    captchaLogin: false,
    usernameEnabled: false,
};
