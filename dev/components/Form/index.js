import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form class="form">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" />
                <label for="text">Comment</label>
                <textarea name="text" id="text"></textarea>
                <button class="button">post</button>
            </form>
        );
    }
}

export default Form;