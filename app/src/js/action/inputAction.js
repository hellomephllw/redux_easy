'use strict'
const INPUT_CONTENT = 'INPUT_CONTENT';

let inputActionCreator = (text) => (
    {
        type: INPUT_CONTENT,
        text: text
    }
);

export {INPUT_CONTENT, inputActionCreator};