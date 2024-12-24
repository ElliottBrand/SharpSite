class AdminLayoutScripts {
    constructor() {
        // NOTE: Just patching an issue with the DOM completely reloading on every page change.
        // The observer puts the direction back in when it's removed.
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                const element = document.getElementsByTagName("html")[0];
                if (!element) return;

                if (element.getAttribute("dir"))
                    return;

                // "dir" attribute must have been removed.
                this.setDirectionByLanguage();
            });
        });
        observer.observe(document.getElementsByTagName("html")[0], { attributes: true, attributeFilter: ["dir"] });
    }

    setDirectionByLanguage() {
        try {
            const userLanguage = navigator.language || navigator.userLanguage;
            const direction = this.isRtlLanguage(userLanguage) ? "rtl" : "ltr";

            const element = document.getElementsByTagName("html")[0];
            if (!element) {
                console.warn("html element not found in DOM.");
                return;
            }

            element.setAttribute("dir", direction);
        } catch (error) {
            console.error(error);
        }
    }

    isRtlLanguage(language) {
        // Common RTL languanges.
        const rtlLanguages = ["ar", "he", "fa", "ur"];

        return rtlLanguages.includes(language.split("-")[0]);
    }
}

export function getAdminLayoutScripts() {
    return new AdminLayoutScripts();
}