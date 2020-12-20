import React, { Component } from 'react';
import { Link } from 'umi';

import MagicMirrorCover from '@/assets/profile_cover/magic-mirror-cover.jpg';
import XIngCover from '@/assets/profile_cover/x-ing-cover.png';
import ImgGetMore from '@/assets/home/get_more.png';

import style from './style.less';

import { FullPageApi } from './index';

interface ThirdPageProps {
    fullpageApi: FullPageApi;
}

interface ProfileItem {
    src: string;
    path: string;
    name: string;
}

class ThirdPage extends Component<ThirdPageProps, {}> {
    profiles: ProfileItem[] = [
        {
            src: XIngCover,
            path: 'x-ing',
            name: 'X-ing性启蒙教育服务系统设计'
        }, {
            src: MagicMirrorCover,
            path: 'magic-mirror',
            name: '"魔镜"智能化妆镜'
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
                            {this.profiles.map((item: ProfileItem) => (
                                <li key={item.name}>
                                    <Link to={`/profile/detail/${item.path}`}>
                                        <img src={item.src} alt={item.name}/>
                                        <div className={style.mask}>
                                            <p>{item.name}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className={style.get_more}>
                            <Link to="/profile/list">
                                <img src={ImgGetMore} alt="查看更多"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThirdPage;
