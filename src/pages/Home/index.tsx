import React, { Component } from 'react';
// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage';

// 每个页面 start
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
// 每个页面 end

import style from './style.less';

// https://github.com/alvarotrigo/fullPage.js#methods
export interface FullPageApi {
    getActiveSection: () => void;
    getActiveSlide: () => void;
    moveSectionUp: () => void;
    moveSectionDown: () => void;
    moveTo: (index: number) => void;
}

// ClassicComponent传入两个类型，一个为props，一个为当前class的state。
class Home extends Component<{}, {}> {
    render() {
        return (
            <div className={style.container}>
                <ReactFullpage
                    licenseKey={'W$8ys$H?h6'}
                    scrollingSpeed={1000}
                    navigation
                    render={({
                        fullpageApi,
                    }: {
                        fullpageApi: FullPageApi;
                    }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <FirstPage fullpageApi={fullpageApi} />
                                <SecondPage fullpageApi={fullpageApi} />
                                <ThirdPage fullpageApi={fullpageApi} />
                                <FourthPage fullpageApi={fullpageApi} />
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        );
    }
}

export default Home;
