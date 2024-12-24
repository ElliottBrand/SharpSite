class ThemeModeSelectorScripts {
    constructor() {
        // NOTE: This is only a temporary patch. Will need to discover why the theme class is being removed on page changes.
        // If theme class has been removed, as a result of some unknown Blazor rendering stuff, add it back when the mutation 
        // is observed and the class is missing.
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                const bodyElement = document.getElementsByTagName("body")[0];
                if (!bodyElement) return;

                    const classes = bodyElement.classList;
                if (classes.contains("theme--dark") || classes.contains("theme--light"))
                    return;

                // Theme must have been removed.
                var selectedTheme = this.getSelectedTheme();
                if (!selectedTheme)
                    selectedTheme = "theme--dark";

                this.setThemeMode(selectedTheme === "theme--dark");
                
            });
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ["style", "class"] });
    }

    setThemeMode(isDarkMode) {
        try {
            const bodyElement = document.getElementsByTagName('body')[0];
            if (!bodyElement) {
                console.warn("Failed to set admin theme. Body element not found.");
                return;
            }

            // Reset
            bodyElement.classList.remove("theme--dark");
            bodyElement.classList.remove("theme--light");

            const currentTheme = isDarkMode === true ? "theme--dark" : "theme--light";
            bodyElement.classList.add(currentTheme);

            localStorage.setItem("admin-theme", currentTheme);
        } catch (error) {
            console.error(error);
        }
    }

    getSelectedTheme() {
        try {
            return localStorage.getItem("admin-theme");
        } catch (error) {
            console.error(error);
        }
    }
}

export function getThemeModeScripts() {
    return new ThemeModeSelectorScripts();
}