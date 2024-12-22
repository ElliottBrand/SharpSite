class ThemeModeSelectorScripts {
    setThemeMode(isDarkMode) {
        try {
            const container = document.getElementById("sharpsite-admin-layout");
            if (!container) return;

            if (container.classList.contains("theme--dark"))
                container.classList.remove("theme--dark");

            if (container.classList.contains("theme--light"))
                container.classList.remove("theme--light");

            container.classList.add(isDarkMode === true ? "theme--dark" : "theme--light");
        } catch (error) {
            console.error(error);
        }
    }
}

export function getThemeModeScripts() {
    return new ThemeModeSelectorScripts();
}