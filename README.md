# Notes Application

## Environment 
- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: v14(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/uND1hBSNcYaVJ9l9JeV23w/notes.gif)

## Functionality Requirements

The component must have the following functionalities:

- There is an input box for `Note Title` in which the user can type the title of the note.

- There is an input box for `Note Status` in which the user can type the status. For example, `active`, `complete`, `in progress`, `pending`, or anything the user wants. (Status is case insensitive.)

- Clicking on the button `Add Note` will add the note to the component. After adding, the values in the input boxes are reset.

- Both the title and status are required to add a new note. Nothing should happen if the `Add Note` button is clicked when both the title and status are not set.

- The note name should be added inside the `<tbody>` table using `<td>{name}</td>`.

- The app has 3 buttons that, when clicked, filter the notes from the list below:
  - `All` - This is the default selected button, and it displays all the notes added by the user (`Active`, `Completed`, and any other status added by the user).
  - `Active` - Clicking on this displays only the notes having the status `active` (in the order added by the user).
  - `Completed` - Clicking on this displays only the notes having the status `completed` (in the order added by the user).

- When `All` button is clicked, the notes displayed should be in the following order:
  - All notes that have the status `active` (in the order added by the user).
  - All notes that have the status `completed` (in the order added by the user).
  - All other notes in the order added by the user.

## Testing Requirements

- The title input should have the data-test-id attribute `input-note-title`.
- The status input should have the data-test-id attribute `input-note-status`.
- The `Add Note` button should have the data-test-id attribute `submit-button`.
- The `All` button should have the data-test-id attribute `allButton`.
- The `Active` button should have the data-test-id attribute `activeButton`.
- The `Completed` button should have the data-test-id attribute `completedButton`.
- The table body <tbody> should have the data-test-id attribute `notesList`.

## Project Specifications

**Read Only Files**
- src/app/app.component.spec.ts
- src/app/notes/notes.component.spec.ts

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
