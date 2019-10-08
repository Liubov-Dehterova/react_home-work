import React from 'react';

class Comments extends React.Component {
    render() {
        return (
            <ul class="list">
                <li class="item">
                    <header class="item__head">
                        <h3 class="item__title">Николай</h3>
                        <div class="item__action">
                            <button class="button button--small">edit</button>
                            <button class="button button--small">delete</button>
                        </div>
                    </header>
                    <p>олололололололо</p>
                </li>
                <li class="item">
                    <header class="item__head">
                        <h3 class="item__title">Юрий</h3>
                        <div class="item__action">
                            <button class="button button--small">edit</button>
                            <button class="button button--small">delete</button>
                        </div>
                    </header>
                    <p>Всем привет</p>
                </li>
            </ul>
        );
    }
}

export default Comments;