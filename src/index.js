import React from 'react';
import MSC from './assets/MSC.png';
import HAPAG_LLOYD from './assets/HAPAG_LLOYD.jpeg';
import COSCO from './assets/COSCO.png';
import ZIM from './assets/ZIM.png';
import OOCL from './assets/OOCL.png';
import ONE from './assets/ONE.png';
import MAERSK from './assets/MAERSK.png';
import EVERGREEN from './assets/EVERGREEN.png';
import CMACGM from './assets/CMACGM.png';

function Logos({ size, organization }) {
    if (organization === Logos.organizations.MSC) {
        return <img src={MSC} style={{ width: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px', height: size === 'mini' ? '18px' : size === 'large' ? '50px' : '25px' }} />;
    }

    if (organization === Logos.organizations.HAPAG_LLOYD) {
        return <img src={HAPAG_LLOYD} style={{ width: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px', height: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px' }} />;
    }

    if (organization === Logos.organizations.COSCO) {
        return <img src={COSCO} style={{ width: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px', height: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px' }} />;
    }

    if (organization === Logos.organizations.ZIM) {
        return <img src={ZIM} style={{ width: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px', height: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px' }} />;
    }

    if (organization === Logos.organizations.OOCL) {
        return <img src={OOCL} style={{ width: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px', height: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px' }} />;
    }

    if (organization === Logos.organizations.ONE) {
        return <img src={ONE} style={{ width: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px', height: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px' }} />;
    }

    if (organization === Logos.organizations.MAERSK) {
        return <img src={MAERSK} style={{ width: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px', height: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px' }} />;
    }

    if (organization === Logos.organizations.EVERGREEN) {
        return <img src={EVERGREEN} style={{ width: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px', height: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px' }} />;
    }

    if (organization === Logos.organizations.CMA_CGM) {
        return <img src={CMACGM} style={{ width: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px', height: size === 'mini' ? '20px' : size === 'large' ? '58px' : '29px' }} />;
    }

    return (
        <>
            <div style={{ fontWeight: 800 }}>
                {organization}
            </div>
            <div style={{ fontSize: '9px' }}> 
                Supplier
            </div>
        </>
    );
}

Logos.size = {
    MINI: 'mini',
    NORMAL: 'normal',
    LARGE: 'large'
};

Logos.organizations = {
    MSC: 'MSC',
    HAPAG_LLOYD: 'HAPAG LLOYD',
    COSCO: 'COSCO',
    ZIM: 'ZIM',
    OOCL: 'OOCL',
    ONE: 'ONE',
    MAERSK: 'MAERSK',
    EVERGREEN: 'EVERGREEN',
    CMA_CGM: 'CMACGM',
};

export default Logos;
