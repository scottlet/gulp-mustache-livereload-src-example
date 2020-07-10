function CreateLogger() {
    if (typeof console !== 'undefined') {
        return (...msg) => {
            console.log(...msg);
        };
    }

    if ((window || {}).alert) {
        return msg => {
            window.alert(msg); //eslint-disable-line
        };
    }
}

const Logger = CreateLogger();

export { Logger };
