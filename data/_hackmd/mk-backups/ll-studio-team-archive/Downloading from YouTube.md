# Downloading from YouTube

By far the safest and most reliable way to download from YouTube is to use [youtube-dl](https://youtube-dl.org/), a simple command line tool. 

To use it on Windows:
1. install [choco](https://chocolatey.org/install) if you don't already have it
2. `choco install youtube-dl`
3. then `youtube-dl "https://www.youtube.com/watch?v=dQw4w9WgXcQ"` or other URL

To use it on Mac:
1. install [homebrew](https://brew.sh/) if you don't already have it
2. `brew install youtube-dl`
3. then `youtube-dl https://www.youtube.com/watch?v=dQw4w9WgXcQ"` or other URL

If you want a specific format:
1. `youtube-dl -F [your/URL]` to see all formats so you can select the number of the format you want--let's say "22"
2. `youtube-dl -f 22 [your/URL]` to download

be sure to `cd /Users/me/Desktop/folder-i-want-my-stuff-in` first!

Here's [another resource about downloading video clips](http://resources.learninglab.xyz/simple/projects/SOCIOL1142/Found-and-archival-footage).

You can also use online methods at your own risk.