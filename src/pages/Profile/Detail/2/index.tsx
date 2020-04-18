import React, { Component } from 'react';

import Profile2Section1 from '@/assets/profile_detail/2/section1.jpg';
import Profile2Section2 from '@/assets/profile_detail/2/section2.jpg';
import Profile2Section3 from '@/assets/profile_detail/2/section3.jpg';
import Profile2Section4 from '@/assets/profile_detail/2/section4.jpg';
import Profile2Section5 from '@/assets/profile_detail/2/section5.jpg';
import Profile2Section6 from '@/assets/profile_detail/2/section6.jpg';
import Profile2Section7 from '@/assets/profile_detail/2/section7.jpg';

class ProfileDetail2 extends Component<{}, {}>{
    render() {
        return (
            <div className="profile_detail_wrapper">
                <img src={Profile2Section1} alt="加载失败"/>
                <img src={Profile2Section2} alt="加载失败"/>
                <img src={Profile2Section3} alt="加载失败"/>
                <img src={Profile2Section4} alt="加载失败"/>
                <img src={Profile2Section5} alt="加载失败"/>
                <img src={Profile2Section6} alt="加载失败"/>
                <img src={Profile2Section7} alt="加载失败"/>
            </div>
        );
    }
}

export default ProfileDetail2;
