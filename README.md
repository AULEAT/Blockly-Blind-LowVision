# Accessible Blockly

This repository offers code solutions to make Blockly Accessible using Text to Speech, Screen-Reader, Speech to Text and Speech to Text using NLP approach. The first two are meant for blind/low vision users and last two can be beneficial for both blind/low vision and motorically disabled users. 

## License

See more information about License here: [License](https://github.com/AULEAT/Blockly-Blind-LowVision/blob/master/COPYRIGHT%20AND%20PERMISSION%20NOTICE)


## Text to Speech [Text to Speech](https://github.com/AULEAT/Blockly-Blind-LowVision/blob/master/TextToSpeech.html)

This utilizes the Web Speech API to read block information and Stereo Node Panner to implement Binaural spatialization, i.e denotes click through left side of ear for opening of nested block, and right side of ear to denote closing of nested block. Use the following Keyboard commands to navigate the Blockly environment using Text to Speech:

* To enter the Toolbox, Press ‘T’. To navigate through categories and blocks in the toolbox, use keys ‘W’ and ‘S’ respectively.
* To navigate up and down ‘lines’ of code(vertically), use keys ‘W’ and ‘S’ respectively.
* To navigate in and out on a ‘line’ of code(horizontally), use keys ‘A’ and ‘D’ respectively.
* To select a block from the toolbox, press ‘Enter’ Key.
* To mark a location for inserting a block, press ‘Enter’ Key. If the block to be inserted is from the toolbox, see previous step. If the block is already present on the workspace, go to its block connection and press 'I' key.
* To delete a block, navigate to the block you wish to delete, and press the DELETE Key.
* To get the tooltip(information on what the block does) for a block, select the required block, and press CTRL + T.
* To get the text representation of a block, press CTRL + I. This also returns text representation of any respective nested children blocks.

## Screen Reader [Screen Reader](https://github.com/AULEAT/Blockly-Blind-LowVision/blob/master/ScreenReader.html)

This utilizes Aria Live Region to communicate same information as the Text to Speech solution using screenreader. This has been tested on Mac Voiceover, but not evaluated by a study with blind individuals yet. Make sure your screenreader is on. Use the following Keyboard commands to navigate the Blockly environment using Text to Speech

* To enter the Toolbox, Press ‘T’. To navigate through categories and blocks in the toolbox, use keys ‘W’ and ‘S’ respectively.
* To navigate up and down ‘lines’ of code(vertically), use keys ‘W’ and ‘S’ respectively.
* To navigate in and out on a ‘line’ of code(horizontally), use keys ‘A’ and ‘D’ respectively.
* To select a block from the toolbox, press ‘Enter’ Key.
* To mark a location for inserting a block, press ‘Enter’ Key. If the block to be inserted is from the toolbox, see previous step. If the block is already present on the workspace, go to its block connection and press 'I' key.
* To delete a block, navigate to the block you wish to delete, and press the DELETE Key.
* To get the tooltip(information on what the block does) for a block, select the required block, and press CTRL + T.
* To get the text representation of a block, press CTRL + I. This also returns text representation of any respective nested children blocks.

## Speech to Text [Speech to Text](https://github.com/AULEAT/Blockly-Blind-LowVision/blob/master/SpeechToText.html)

This solution maps voice command to an individual keyboard command described in previous two solutions. Here is a list of the voice commands:

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


## Speech to Text using NLP [Speech to Text using NLP](https://github.com/AULEAT/Blockly-Blind-LowVision/blob/master/nlp.html)

This is an improved solution which allows you to directly select toolbox categories or block elements. 

* The current supported toolbox categories are: 'Logic', 'Loops', 'Math', 'Text', 'Variables'. Just say one of those names to select that particular category.
* The current supported blocks are below. Just say the name of the block you want after choosing a particular category. The block names match what the user sees on the block. This solution uses fuzzy matching to reduce speech transcription errors.

| Category     | Blocks                                                                                 |
| :---         |     :---:                                                                              |          
| Logic        | 'if', 'equal', 'and', 'not', 'true'                                                    | 
| Loops        | 'repeat times', 'repeat while', 'count', 'for each', 'break out'                       | 
| Math         | 'numbers', 'add'                                                                       | 
| Text         | 'print'                                                                                | 
| Variables    | 'create variable'                                                | 


* To navigate up a line, say, 'Go to previous line', 'Go up', or 'top'
* To navigate down a line, say, 'Go to next line', 'Go down', or 'down'
* To navigate inside a line, say, 'Go in', or 'Go forward'
* To navigate outside/backward a line, say, 'Go out', or 'Go back'
* To select a block, say, 'Select', or 'Choose'
* To mark a connection say, 'mark this connection'
* To delete a block, say, 'delete this block'
