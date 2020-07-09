import React, { Component } from 'react';

import Section1 from '@/assets/profile_detail/mp3/section1.jpg';
import Section2 from '@/assets/profile_detail/mp3/section2.jpg';
import Section3 from '@/assets/profile_detail/mp3/section3.jpg';
import Section4 from '@/assets/profile_detail/mp3/section4.jpg';

import { cdnUrl } from '@/utils/constants';

class ProfileMP3 extends Component<{}, {}>{
    render() {
        return (
            <div className="profile_detail_wrapper">
                <img src={Section1} alt="加载失败"/>
                <img src={Section2} alt="加载失败"/>
                <img src={Section3} alt="加载失败"/>
                <img src={Section4} alt="加载失败"/>
                <video autoPlay muted loop>
                    <source src={`${cdnUrl}/mp3-video1.mp4`}/>
                </video>
            </div>
        );
    }
}

export default ProfileMP3;
