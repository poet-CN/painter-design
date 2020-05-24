import React, { Component } from 'react';
import { Link } from 'umi';

import ImgProfile6 from '@/assets/profile_cover/profile6.jpg';
import ImgProfile1 from '@/assets/profile_cover/profile1.jpg';
import ImgGetMore from '@/assets/home/get_more.png';

import style from './style.less';

import { FullPageApi } from './index';

interface ThirdPageProps {
    fullpageApi: FullPageApi;
}

interface ProfileItem {
    src: string;
    index: number;
    name: string;
}

class ThirdPage extends Component<ThirdPageProps, {}> {
    profiles: ProfileItem[] = [
        {
            src: ImgProfile6,
            index: 6,
            name: '作品1'
        }, {
            src: ImgProfile1,
            index: 1,
            name: '作品1'
        }
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
                            {this.profiles.map((item: ProfileItem) => (
                                <li key={item.name}>
                                    <Link to={`/profile/detail/${item.index}`}>
                                        <img src={item.src} alt={item.name}/>
                                    </Link>
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
