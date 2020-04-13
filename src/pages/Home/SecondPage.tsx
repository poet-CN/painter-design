import React, { Component } from 'react';
import { FullPageApi } from './index';
import Name from '@/assets/home/name.png';
import style from './style.less';

interface SecondPageProps {
    fullpageApi: FullPageApi;
}

class SecondPage extends Component<SecondPageProps, {}> {
    render() {
        return (
            <div className={`${style.page2_wrapper} section pr`}>
                <div className="wrapper">
                    <div className={style.section_title}>
                        <p>
                            <span>Me</span>
                            <span>爱生活</span>
                        </p>
                    </div>
                    <div className="clear_float pr">
                        <div className={style.leftSide}>

                        </div>
                        <div className={style.right_side}>
                            <img className={style.name} src={Name} alt="name"/>
                            <p className={style.desc}>
                                <span>河北工业大学</span>
                                <span>工业设计专业</span>
                                <span>大三在读</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondPage;
