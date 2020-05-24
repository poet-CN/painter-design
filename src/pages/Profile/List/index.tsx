import React, { Component } from 'react';
import { Link } from 'umi';
import ReturnBtn from '@/components/ReturnBtn';

import ImgProfile1 from '@/assets/profile_cover/profile1.jpg';
import ImgProfile2 from '@/assets/profile_cover/profile2.jpg';
import ImgProfile3 from '@/assets/profile_cover/profile3.jpg';
import ImgProfile4 from '@/assets/profile_cover/profile4.jpg';
import ImgProfile5 from '@/assets/profile_cover/profile5.jpg';
import ImgProfile6 from '@/assets/profile_cover/profile6.jpg';

import style from './style.less';

interface ProfileItem {
    src: string;
    index: number;
    name: string;
}

interface ProfileListProps {
    history: {
        go: (backNum: number) => void;
        push: (index: string) => void;
    };
}

class ProfileList extends Component<ProfileListProps, {}> {
    profiles: ProfileItem[] = [{
        src: ImgProfile6,
        index: 6,
        name: '作品6'
    }, {
        src: ImgProfile1,
        index: 1,
        name: '作品1'
    }, {
        src: ImgProfile2,
        index: 2,
        name: '作品2'
    }, {
        src: ImgProfile3,
        index: 3,
        name: '作品3'
    }, {
        src: ImgProfile4,
        index: 4,
        name: '作品4'
    }, {
        src: ImgProfile5,
        index: 5,
        name: '作品5'
    }];

    render() {
        return (
            <div className={style.page_wrapper}>
                <div className="wrapper pr">
                    <ReturnBtn returnPath="/" history={this.props.history}/>
                    <div>
                        <p className={style.section_title}>
                            <span>Work</span>
                            <span>爱设计</span>
                        </p>
                    </div>
                    <ul className={`${style.profile_wrapper} clear_float`}>
                        {
                            this.profiles.map((item: ProfileItem) => (
                                <li key={item.name}>
                                    <Link to={`/profile/detail/${item.index}`}>
                                        <img src={item.src} alt={item.name}/>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProfileList;
