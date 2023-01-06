const canvas = document.querySelector('canvas');
const webgl = canvas.getContext('webgl');

if (!webgl) {
    throw new Error('WebGL not supported');
}

alert('WebGL supported');