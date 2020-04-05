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

interface HomeState {
    isHome: boolean;
}

// https://github.com/alvarotrigo/fullPage.js#methods
export interface FullPageApi {
    getActiveSection: () => void;
    getActiveSlide: () => void;
    moveSectionUp: () => void;
    moveSectionDown: () => void;
}

// ClassicComponent传入两个类型，一个为props，一个为当前class的state。
class Home extends Component<{}, HomeState> {
    state = {
        isHome: true,
    };

    componentDidMount() {}

    render() {
        return (
            <div className={style.container}>
                <ReactFullpage
                    licenseKey={'12312312312'}
                    scrollingSpeed={1000}
                    render={({
                        fullpageApi,
                    }: {
                        fullpageApi: FullPageApi;
                        state: HomeState;
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
