import React, { Component } from 'react';
import { FullPageApi } from './index';
import style from './style.less';

interface FourthPageProps {
    fullpageApi: FullPageApi;
}

class FourthPage extends Component<FourthPageProps, {}> {
    render() {
        return (
            <div className="section pr">
                <div>
                    <h1>FourthPage</h1>
                </div>
            </div>
        );
    }
}

export default FourthPage;
