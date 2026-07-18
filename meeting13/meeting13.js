const fileInput = document.getElementById('files')
const MAX_FILES = 3;

fileInput.addEventListener('change', () => {
    const files = fileInput.files;

    if (files.length > MAX_FILES) {
        alert(`You can only upload a maximum of ${MAX_FILES} files`);
        
        fileInput.value = '';
}
}); 