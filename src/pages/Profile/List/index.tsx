import React, { Component } from 'react';
import { Link } from 'umi';
import ReturnBtn from '@/components/ReturnBtn';

import ImgProfile1 from '@/assets/profile_cover/profile1.jpg';
import ImgProfile2 from '@/assets/profile_cover/profile2.jpg';
import ImgProfile3 from '@/assets/profile_cover/profile3.jpg';
import ImgProfile4 from '@/assets/profile_cover/profile4.jpg';
import ImgProfile5 from '@/assets/profile_cover/profile5.jpg';

import style from './style.less';

interface profileItem {
    src: string;
    name: string;
}

interface ProfileListProps {
    history: {
        go: (backNum: number) => void;
        push: (index: string) => void;
    };
}

class ProfileList extends Component<ProfileListProps, {}> {
    profiles = [{
        src: ImgProfile1,
        name: '作品1',
    },          {
        src: ImgProfile2,
        name: '作品2',
    },          {
        src: ImgProfile3,
        name: '作品3',
    },          {
        src: ImgProfile4,
        name: '作品4',
    },          {
        src: ImgProfile5,
        name: '作品5',
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
                            this.profiles.map((item: profileItem, index: number) => (
                                <li key={item.name}>
                                    <Link to={`/profile/detail/${index + 1}`}>
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
