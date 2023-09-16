# PrimeCode Academy

This website is created to show all the things I have learned over the years and to help other people to advance in the field of Programming.

You can contribute to the project by:
- Giving ideas for the design of the website;
- Creating courses for teaching other languages;
- Correcting old information in the website;

Example of the schema for a course looks like this:
```
const JAVASCRIPT_LESSONS = [
  { id: 0, title: 'Introduction to JavaScript' },
  { id: 1, title: 'Setting Up Your Development Environment', content: [] },
  ...
]
```
The course is an array of objects.
Every object should have an:
- 'id' for order of the lessons;
- 'title' for showing the name of the lesson;
The field 'content' is not mandatory, because it's used to differentiate the group titles form the titles with content in them.

When creating the 'content' array for every lesson, they shoud look like the following example:
```
content: [
  { id: 0, type: 'title',  data: 'Overview' },
  { id: 1, type: 'text', data : 'This is a ...' },
  { id: 2, type: 'img', data: 'https:...' },
  ...
]
```
Every object should have an:
- 'id' for order of the elements;
- 'type' to define the style of the component (whether is the title of the section, simple text, or the url to an image);
- 'data' for holding the information about the element;

The different types of the 'type' filed are:
- 'title' - holds simple string data;
- 'text' - holds simple string data;
- 'code' - holds multiline string data;
- 'img' - holds url to an image in the form of a string;
- 'list' - holds array of simple strings;
