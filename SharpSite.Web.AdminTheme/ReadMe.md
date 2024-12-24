### Sample Admin Theme
- This is just a sample theme to put together some thoughts on a themed admin area.
- This is using Tailwind, since I prefer working with it, but likely would need converted to Bootstrap, since that's what Jeff Fritz prefers.

### Working with This
- You'll need to run `npm install` within this project to get the dependencies.
- To watch for sass stylesheet changes, you'll need a Visual Studio extension like `Web Compiler 2022+` to compile the scss files, then you can run `npx postcss ./StyleSources/rendered/main.css -o ../SharpSite.Web/wwwroot/styles/admin-styles.css --watch --minify` in your terminal from this directory.