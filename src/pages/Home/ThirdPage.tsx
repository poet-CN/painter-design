import React, { Component } from 'react';
import { Link } from 'umi';

import ImgProfile1 from '@/assets/profile_cover/profile1.jpg';
import ImgProfile2 from '@/assets/profile_cover/profile2.jpg';
import ImgGetMore from '@/assets/home/get_more.png';

import style from './style.less';

import { FullPageApi } from './index';

interface ThirdPageProps {
    fullpageApi: FullPageApi;
}

interface profileItem {
    src: string;
    name: string;
}

class ThirdPage extends Component<ThirdPageProps, {}> {
    profiles = [
        {
        src: ImgProfile1,
        name: '作品1',
    },  {
        src: ImgProfile2,
        name: '作品2',
    },
    ];

    render() {
        return (
            <div className={`${style.page3_wrapper} section pr`}>
                <div className="wrapper">
                    <div>
                        <p className={style.section_title}>
                            <span>Work</span>
                            <span>爱设计</span>
                        </p>
                    </div>
                    <div className={style.profile_wrapper}>
                        <ul>
                            {this.profiles.map((item: profileItem) => (
                                <li key={item.name}>
                                    <img src={item.src} alt={item.name}/>
                                </li>
                            ))}
                        </ul>
                        <div className={style.get_more}>
                            <Link to="/profile/list">
                                <img src={ImgGetMore} alt="读取更多"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThirdPage;
