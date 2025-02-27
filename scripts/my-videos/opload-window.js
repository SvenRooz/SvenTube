import { toggleUploadWindow } from "../utils/header-user.js";

const MAXUPLOADFILESIZE = 99999999;

/* Generates the HTML for the upload window */
export function generateUploadWindowHTML() {
  document.querySelector('.js-upload-window-container')
    .addEventListener('click', function(e) {
      if (e.target === this) {
        toggleUploadWindow();
      }
    });

  document.querySelector('.js-upload-window-exit-button')
    .addEventListener('click', toggleUploadWindow);
  
  const dropArea = document.querySelector('.js-upload-window-drag-container');
  
  dropArea.addEventListener('drop', (event) => {
    handleFileUpload(event);
  });

  const prevent = (e) => e.preventDefault();
  ['drop', 'dragover'].forEach(e => dropArea.addEventListener(e, prevent));
}


/* Handles the file that has been uploaded */
function handleFileUpload(event) {
  const dt = event.dataTransfer;
  const files = [...dt.files];
  console.log(files);

  handleFileErrors(files);
}


/* Handles errors regarding files. Returns false if no errors occured, otherwise true. */
function handleFileErrors(files) {
  const errorElem = document.querySelector('.js-upload-window-file-error-text');
  let errorMsg = '';

  if (files.length !== 1) {
    errorMsg = 'Make sure to only upload one file'
  } else if (files[0].type !== 'video/mp4') {
    errorMsg = 'Wrong file format, make sure only upload mp4 files'
  } else if (files[0].size > MAXUPLOADFILESIZE) {
    errorMsg = `File too big, max file size is ${MAXUPLOADFILESIZE}`;
  }

  errorElem.innerHTML = errorMsg;

  if (errorMsg) {
    return true;
  }

  return false;
}