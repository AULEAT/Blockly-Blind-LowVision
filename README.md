#Accessible Blockly

This repository offers code solutions to make Blockly Accessible using Text to Speech, Screen-Reader, Speech to Text and Speech to Text using NLP approach. The first two are meant for blind/low vision users and last two can be beneficial for both blind/low vision and motorically disabled users. 

## License

See more information about License here: [license](https://github.com/AULEAT/Blockly-Blind-LowVision/blob/master/COPYRIGHT%20AND%20PERMISSION%20NOTICE)


## Text to Speech

This utilizes the Web Speech API to read block information and Stereo Node Panner to implement Binaural spatialization, i.e denotes click through left side of ear for opening of nested block, and right side of ear to denote closing of nested block. Use the following Keyboard commands to navigate the Blockly environment using Text to Speech:


Markup : *To enter the Toolbox, Press ‘T’. To navigate through categories and blocks in the toolbox, use keys ‘W’ and ‘S’ respectively.
         *To navigate up and down ‘lines’ of code(vertically), use keys ‘W’ and ‘S’ respectively.
         *To navigate in and out on a ‘line’ of code(horizontally), use keys ‘A’ and ‘D’ respectively.
         *To select a block from the toolbox, press ‘Enter’ Key.
         *To mark a location for inserting a block, press ‘Enter’ Key. If the block to be inserted is from the toolbox, see previous step. If the block is already present on the workspace, go to its block connection and press 'I' key.
         *To delete a block, navigate to the block you wish to delete, and press the DELETE Key.
         *To get the tooltip(information on what the block does) for a block, select the required block, and press CTRL + T.
         *To get the text representation of a block, press CTRL + I. This also returns text representation of any respective nested children blocks.

## Screen Reader

This utilizes Aria Live Region to communicate same information as the Text to Speech solution using screenreader. This has been tested on Mac Voiceover, but not evaluated by a study with blind individuals yet. Make sure your screenreader is on. Use the following Keyboard commands to navigate the Blockly environment using Text to Speech

 Markup : *To enter the Toolbox, Press ‘T’. To navigate through categories and blocks in the toolbox, use keys ‘W’ and ‘S’ respectively.
          *To navigate up and down ‘lines’ of code(vertically), use keys ‘W’ and ‘S’ respectively.
          *To navigate in and out on a ‘line’ of code(horizontally), use keys ‘A’ and ‘D’ respectively.
          *To select a block from the toolbox, press ‘Enter’ Key.
          *To mark a location for inserting a block, press ‘Enter’ Key. If the block to be inserted is from the toolbox, see previous step. If the block is already present on the workspace, go to its block connection and press 'I' key.
          *To delete a block, navigate to the block you wish to delete, and press the DELETE Key.
          *To get the tooltip(information on what the block does) for a block, select the required block, and press CTRL + T.
          *To get the text representation of a block, press CTRL + I. This also returns text representation of any respective nested children blocks.

## Speech to Text

This solution maps voice command to an indivudual keyboard command described in previous two solutions. Here is a list of the voice commands:

| Voice command| Function                                                |
| :---         |     :---:                                               |          
| Toolbox      | Enters the toolbox                                      | 
| forward      | cursor moves ahead horizontally                         | 
| back         | cursor moves back horizontally                          | 
| up           | cursor moves up vertically/previous line                | 
| down         | cursor moves down vertically/next line                  | 
| select       | selects a block from toolbox                            | 
| mark         | marks a connection                                      | 
| insert       | inserts block on workspace to a marked connection       |
| tooltip      | speaks what the block does                              |
| delete       | deleted the given block                                 |
| information  | speaks the text representation of a block               |



# Blockly [![Build Status]( https://travis-ci.org/google/blockly.svg?branch=master)](https://travis-ci.org/google/blockly)


Google's Blockly is a web-based, visual programming editor.  Users can drag
blocks together to build programs.  All code is free and open source.

**The project page is https://developers.google.com/blockly/**

![](https://developers.google.com/blockly/images/sample.png)

Blockly has an active [developer forum](https://groups.google.com/forum/#!forum/blockly).  Please drop by and say hello. Show us your prototypes early; collectively we have a lot of experience and can offer hints which will save you time. We actively monitor the forums and typically respond to questions within 2 working days.

Help us focus our development efforts by telling us [what you are doing with
Blockly](https://developers.google.com/blockly/registration).  The questionnaire only takes
a few minutes and will help us better support the Blockly community.

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com)

We support IE11 and test it using [BrowserStack](https://browserstack.com)

Want to contribute? Great! First, read [our guidelines for contributors](https://developers.google.com/blockly/guides/modify/contributing).

## Releases

The next major release will be **December 17th, 2020**.

We release by pushing the latest code to the master branch, followed by updating our [docs](https://developers.google.com/blockly) and [demo pages](https://blockly-demo.appspot.com). We typically release a new version of Blockly once a quarter (every 3 months). If there are breaking bugs, such as a crash when performing a standard action or a rendering issue that makes Blockly unusable, we will cherry-pick fixes to master between releases to fix them. The [releases page](https://github.com/google/blockly/releases) has a list of all releases.

Releases are tagged by the release date (YYYYMMDD) with a leading '2.' and a trailing '.0' in case we ever need a major or minor version (such as [2.20190722.1](https://github.com/google/blockly/tree/2.20190722.1)). If you're using npm, you can install the ``blockly`` package on npm: 
```bash
npm install blockly
```

### New APIs

Once a new API is merged into master it is considered beta until the following release. We generally try to avoid changing an API after it has been merged to master, but sometimes we need to make changes after seeing how an API is used. If an API has been around for at least two releases we'll do our best to avoid breaking it.

Unreleased APIs may change radically. Anything that is in `develop` but not `master` is subject to change without warning.

### Branches

There are two main branches for Blockly.

**[master](https://github.com/google/blockly)** - This is the (mostly) stable current release of Blockly.

**[develop](https://github.com/google/blockly/tree/develop)** - This is where most of our work happens. Pull requests should always be made against develop. This branch will generally be usable, but may be less stable than the master branch. Once something is in develop we expect it to merge to master in the next release.

**other branches:** - Larger changes may have their own branches until they are good enough for people to try out. These will be developed separately until we think they are almost ready for release. These branches typically get merged into develop immediately after a release to allow extra time for testing.

## Issues and Milestones

We typically triage all bugs within 2 working days, which includes adding any appropriate labels and assigning it to a milestone. Please keep in mind, we are a small team so even feature requests that everyone agrees on may not be prioritized.

### Milestones

**Upcoming release** - The upcoming release milestone is for all bugs we plan on fixing before the next release. This typically has the form of `year_quarter_release` (such as `2019_q2_release`). Some bugs will be added to this release when they are triaged, others may be added closer to a release.

**Bug Bash Backlog** - These are bugs that we're still prioritizing. They haven't been added to a specific release yet, but we'll consider them for each release depending on relative priority and available time.

**Icebox** - These are bugs that we do not intend to spend time on. They are either too much work or minor enough that we don't expect them to ever take priority. We are still happy to accept pull requests for these bugs.
