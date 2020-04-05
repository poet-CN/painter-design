import React, { Component } from 'react';
import { FullPageApi } from './index';
import style from './style.less';

interface ThirdPageProps {
    fullpageApi: FullPageApi;
}

class ThirdPage extends Component<ThirdPageProps, {}> {
    render() {
        return (
            <div className="section pr">
                <div>
                    <h1>ThirdPage</h1>
                </div>
            </div>
        );
    }
}

export default ThirdPage;
