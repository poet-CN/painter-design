import React, { Component } from 'react';

import Profile5Section1 from '@/assets/profile_detail/5/section1.jpg';
import Profile5Section2 from '@/assets/profile_detail/5/section2.jpg';
import Profile5Section3 from '@/assets/profile_detail/5/section3.jpg';
import Profile5Section4 from '@/assets/profile_detail/5/section4.jpg';
import Profile5Section5 from '@/assets/profile_detail/5/section5.jpg';
import Profile5Section6 from '@/assets/profile_detail/5/section6.jpg';
import Profile5Section7 from '@/assets/profile_detail/5/section7.jpg';
import Profile5Section8 from '@/assets/profile_detail/5/section8.jpg';
import Profile5Section9 from '@/assets/profile_detail/5/section9.jpg';

class ProfileDetail5 extends Component<{}, {}>{
    render() {
        return (
            <div className="profile_detail_wrapper">
                <img src={Profile5Section1} alt="加载失败"/>
                <img src={Profile5Section2} alt="加载失败"/>
                <img src={Profile5Section3} alt="加载失败"/>
                <img src={Profile5Section4} alt="加载失败"/>
                <img src={Profile5Section5} alt="加载失败"/>
                <img src={Profile5Section6} alt="加载失败"/>
                <img src={Profile5Section7} alt="加载失败"/>
                <img src={Profile5Section8} alt="加载失败"/>
                <img src={Profile5Section9} alt="加载失败"/>
            </div>
        );
    }
}

export default ProfileDetail5;
