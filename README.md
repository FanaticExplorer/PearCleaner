# PearCleaner

PearCleaner is a CSS generator for customizing YouTube Music in [Pear](https://github.com/pear-devs/pear-desktop), an unofficial Electron-based YouTube Music desktop app. It helps you hide unwanted UI elements to create a cleaner, more focused listening experience.

> **Try it now:** https://utils.fanaticexplorer.dev/pear-cleaner

## Available Customizations

### Home Tab
- Hide mood/activity chips

### Navigation & UI
- Hide 'Go to previous/next page' arrows

### Share Window
- Hide social media targets
- Hide 'Start at:' checkbox
- Remove top margin

### Menu & Context Items
- Hide Premium Download option
- Hide Stats for nerds
- Hide Pin to Listen again
- Hide Report
- Hide liked songs (both states)
- Hide Start mix
- Hide Play next
- Hide Add to queue
- Hide Save to playlist
- Hide Remove from queue
- Hide Share
- Hide Dismiss queue

## How to Use

### Method 1: Import as a New Theme (Clean Start)
If you don't have any custom theme installed:
1. Generate and download the CSS file from this tool
2. Open Pear
3. Go to **Options** → **Visual Tweaks** → **Theme**
4. Click **Import custom CSS file** and select your downloaded file
5. Go to **Navigation** → **Restart App** to apply the changes
6. Enjoy your customized interface!

### Method 2: Add to Existing Theme
If you already have a custom theme installed:
1. Generate and copy the CSS from this tool
2. Open your existing theme's CSS file
3. Paste the generated CSS at the **end** of the file
4. Save the changes
5. Go to **Navigation** → **Restart App** to apply the changes
6. Your customizations should now be active!

## Important Note

⚠️ **These CSS selectors may become outdated after YouTube updates.** YouTube frequently changes their DOM structure, which can break these selectors. If your customizations stop working after a major YouTube update, regenerate the CSS or check for updates to this tool.

## Development

This tool is built with vanilla HTML, CSS, and JavaScript. No build process or dependencies required—just open `index.html` in your browser.

## License

This project is licensed under the MIT License—see the [LICENSE](LICENSE) file for details.
