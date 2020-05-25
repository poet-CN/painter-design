import React, { Component } from 'react';

import ImgAvatar from '@/assets/home/page2_avatar.jpg';
import ImgName from '@/assets/home/page2_name.png';
import ImgGetMore from '@/assets/home/get_more.png';

import style from './style.less';

import { FullPageApi } from './index';

interface SecondPageProps {
    fullpageApi: FullPageApi;
}

class SecondPage extends Component<SecondPageProps, {}> {
    render() {
        return (
            <div className={`${style.page2_wrapper} section`}>
                <div className="wrapper pr">
                    <div className={style.section_title}>
                        <p>
                            <span>Me</span>
                            <span>爱生活</span>
                        </p>
                    </div>
                    <div className="clear_float pr">
                        <div className={style.left_side}>
                            <img src={ImgAvatar} alt="Avatar"/>
                        </div>
                        <div className={style.right_side}>
                            <img className={style.name} src={ImgName} alt="name"/>
                            <p className={style.desc}>
                                <span>河北工业大学</span>
                                <span>工业设计专业</span>
                                <span>大三在读</span>
                            </p>
                        </div>
                        <div className={style.get_more}>
                            <a href={'https://poet-1253467707.cos.ap-beijing.myqcloud.com/李倩-河北工业大学.pdf'}>
                                <img src={ImgGetMore} alt="获取简历"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondPage;
