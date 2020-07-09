import React, { Component } from 'react';
import { Link } from 'umi';
import ReturnBtn from '@/components/ReturnBtn';

import GameCityCover from '@/assets/profile_cover/game-city-cover.jpg';
import SpoolsCover from '@/assets/profile_cover/spools-cover.jpg';
import HealthCareCover from '@/assets/profile_cover/health-care-cover.jpg';
import CoatRackCover from '@/assets/profile_cover/coat-rack-cover.jpg';
import ModularFurnitureCover from '@/assets/profile_cover/modular-furniture-cover.jpg';
import MagicMirrorCover from '@/assets/profile_cover/magic-mirror-cover.jpg';
import KeSilkCover from '@/assets/profile_cover/ke-silk-cover.jpg';
import RescueEquipmentCover from '@/assets/profile_cover/rescue-equipment-cover.jpg';
import PreExaminationCover from '@/assets/profile_cover/pre-examination-cover.jpg';
import SmartCarCover from '@/assets/profile_cover/smart-car-cover.jpg';
import MP3Cover from '@/assets/profile_cover/mp3-cover.jpg';

import style from './style.less';

interface ProfileItem {
    src: string;
    path: string;
    name: string;
}

interface ProfileListProps {
    history: {
        go: (backNum: number) => void;
        push: (index: string) => void;
    };
}

class ProfileList extends Component<ProfileListProps, {}> {
    profiles: ProfileItem[] = [ {
        src: HealthCareCover,
        path: 'health-care',
        name: '儿童用心电图机吸球'
    }, {
        src: MagicMirrorCover,
        path: 'magic-mirror',
        name: '"魔镜"智能化妆镜'
    }, {
        src: GameCityCover,
        path: 'game-city',
        name: '风云再起电玩城包装设计'
    }, {
        src: SpoolsCover,
        path: 'spools',
        name: '"破茧成蝶"绕线轴设计'
    }, {
        src: KeSilkCover,
        path: 'ke-silk',
        name: '"缂丝织发"缂丝文创'
    }, {
        src: RescueEquipmentCover,
        path: 'rescue-equipment',
        name: '多功能地震救援装备'
    }, {
        src: PreExaminationCover,
        path: 'pre-examination',
        name: '预检分诊机器人'
    }, {
        src: SmartCarCover,
        path: 'smart-car',
        name: '智能汽车空间布局设计'
    }, {
        src: CoatRackCover,
        path: 'coat-rack',
        name: '翻花绳组合衣帽架'
    }, {
        src: ModularFurnitureCover,
        path: 'modular-furniture',
        name: '几何家居'
    }, {
        src: MP3Cover,
        path: 'mp3',
        name: '复读机音乐播放器'
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
                    <ul className={style.profile_wrapper}>
                        {
                            this.profiles.map((item: ProfileItem) => (
                                <li key={item.name}>
                                    <Link to={`/profile/detail/${item.path}`}>
                                        <img src={item.src} alt={item.name}/>
                                        <div className={style.mask}>
                                            <p>{item.name}</p>
                                        </div>
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
