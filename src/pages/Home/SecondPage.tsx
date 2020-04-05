import React, { Component } from 'react';
import { FullPageApi } from './index';
import style from './style.less';

interface SecondPageProps {
    fullpageApi: FullPageApi;
}

class SecondPage extends Component<SecondPageProps, {}> {
    render() {
        return (
            <div className="section pr">
                <div>
                    <h1>SecondPage</h1>
                </div>
            </div>
        );
    }
}

export default SecondPage;
