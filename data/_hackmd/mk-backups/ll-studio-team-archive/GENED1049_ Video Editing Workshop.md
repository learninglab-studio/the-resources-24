# GENED1049: Video Editing Workshop


## Editing

### Ins and Outs

To create a clip from footage that you have imported, you will want to create "ins" and "outs." These are essentially markers that you can apply to the original footage in order to bring a shortened clip into your timeline. The "in" will be the marker that indicates when you want the clip to being and the "o" where you'd like the clip to end. In Premiere Pro, you press "i" to create an in and "o" to create an out. Then, you click on the image in the preview window (usually in the top left of the editing workspace) and drag the clip into your timeline. 

### Supercuts with split screens

As Professor Jie Li writes, a supercut "is very short video that combines multiple clips, often rapidly following one another, in sequence in order to draw connections and parallels between them." Using a split screen, which juxtaposes two images simultaneously, you can see interesting comparisons/contrasts, bring the viewer's attention to recurring motifs and other compositional and formal elements.

![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F035CA6BCTY/screen_shot_2022-03-03_at_2.13.26_pm.png?pub_secret=79dbf4e1a8)


### Downloading from YouTube

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

You can also use online methods at your own risk.



### Separating audio from visual tracks
Separating the audio and visual tracks allows a film editor to pair a film clip with audio captured at a different point in time or in a different setting (and vice versa). In Premiere, you can "unlink" the audio from the visual tracks by right clicking the clip in your timeline and selecting "unlink."

![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F035G4NKQBF/screen_shot_2022-03-03_at_2.24.35_pm.png?pub_secret=f7d41d9cad)


### Changing the color and/or speed of clips
You might find that you want to do color correction or to speed up or slow down an existing clip. These effects can foreground details in a scene in a visually compelling manner. In the clip from *In the Mood for Love* below, you can see that the red levels are quite high. Using the color grading workflow in InDesign helps you see these features in a different way than you would if you were watching the film.

![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F03602EF4UC/screen_shot_2022-03-07_at_8.48.04_am.png?pub_secret=05330fe0f8)


## Resources for Adobe Premiere
[Setting up your Premiere project](https://hackmd.io/KyU9PqgJSZOPXd2bt9FPGw?both)

#### Premiere Keyboard Shortcuts
| Result | Mac OS | Windows |
| -------- | -------- | -------- |
| New Project    | Opt+Cmd+N   | Ctrl+Alt+N  |
| Save    | Cmd+S  | Ctrl+S |
| Selection     | V     | V    |
| Blade/Cut    | C     | C    |
| In Point    |   I    |   I     |
| Out Point    |  O     |  O    |
| Play/Pause     | Space     | Space   |
| Stop    | K   | K   |
| Snap to Playhead (on/off)    | S    | S  |


## Some Models
[Supercut of Ozu’s films](https://vimeo.com/55956937)
[Putting Ozu’s Tokyo Story on Zoom](https://www.youtube.com/watch?v=Gv0uVQ4o0_0)
[Every Frame a Painting about Kurosawa](https://www.youtube.com/watch?v=doaQC-S8de8)
