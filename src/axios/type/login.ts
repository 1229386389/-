/**
 * 获取qrkey
 */
export interface qrKeyResult {
    code: number;
    data: Data1;
}

export interface Data1 {
    code: number;
    unikey: string;
}
/**
 * 创建qr
 */
export interface createQrKeyResult {
    code: number;
    data: Data2;
}

export interface Data2 {
    qrimg: string;
    qrurl: string;
}
/**
 * 轮询qr
 */
export interface checkQrKeyresult {
    code: number;
    cookie: string;
    message: string;
}
/**
 * 获取用户信息
 */
export interface checkStatusResult {
    data: Data3;
}

export interface Data3 {
    account: Account;
    code:    number;
    profile: Profile;
}

export interface Account {
    anonimousUser:      boolean;
    ban:                number;
    baoyueVersion:      number;
    createTime:         number;
    donateVersion:      number;
    id:                 number;
    paidFee:            boolean;
    status:             number;
    tokenVersion:       number;
    type:               number;
    userName:           string;
    vipType:            number;
    whitelistAuthority: number;
}

export interface Profile {
    accountStatus:       number;
    accountType:         number;
    anchor:              boolean;
    authenticated:       boolean;
    authenticationTypes: number;
    authority:           number;
    authStatus:          number;
    avatarDetail:        null;
    avatarImgId:         number;
    avatarUrl:           string;
    backgroundImgId:     number;
    backgroundUrl:       string;
    birthday:            number;
    city:                number;
    createTime:          number;
    defaultAvatar:       boolean;
    description:         null;
    detailDescription:   null;
    djStatus:            number;
    experts:             null;
    expertTags:          null;
    followed:            boolean;
    gender:              number;
    lastLoginIP:         string;
    lastLoginTime:       number;
    locationStatus:      number;
    mutual:              boolean;
    nickname:            string;
    province:            number;
    remarkName:          null;
    shortUserName:       string;
    signature:           string;
    userId:              number;
    userName:            string;
    userType:            number;
    vipType:             number;
    viptypeVersion:      number;
}
/**
 * 获取我的歌单
 */
export interface getMyListResult {
    code: number;
    more: boolean;
    playlist: Playlist[];
    version: string;
}

export interface Playlist {
    adType: number;
    anonimous: boolean;
    artists: null;
    backgroundCoverId: number;
    backgroundCoverUrl: null;
    cloudTrackCount: number;
    commentThreadId: string;
    copied: boolean;
    coverImgId: number;
    coverImgId_str: null | string;
    coverImgUrl: string;
    createTime: number;
    creator: Creator;
    description: null | string;
    englishTitle: null;
    highQuality: boolean;
    id: number;
    name: string;
    newImported: boolean;
    opRecommend: boolean;
    ordered: boolean;
    playCount: number;
    privacy: number;
    recommendInfo: null;
    sharedUsers: null;
    shareStatus: null;
    specialType: number;
    status: number;
    subscribed: boolean;
    subscribedCount: number;
    subscribers: string[];
    tags: string[];
    titleImage: number;
    titleImageUrl: null;
    totalDuration: number;
    trackCount: number;
    trackNumberUpdateTime: number;
    tracks: null;
    trackUpdateTime: number;
    updateFrequency: null;
    updateTime: number;
    userId: number;
}

export interface Creator {
    accountStatus: number;
    anchor: boolean;
    authenticationTypes: number;
    authority: number;
    authStatus: number;
    avatarDetail: null;
    avatarImgId: number;
    avatarImgId_str: string;
    avatarImgIdStr: string;
    avatarUrl: string;
    backgroundImgId: number;
    backgroundImgIdStr: string;
    backgroundUrl: string;
    birthday: number;
    city: number;
    defaultAvatar: boolean;
    description: string;
    detailDescription: string;
    djStatus: number;
    experts: null;
    expertTags: null;
    followed: boolean;
    gender: number;
    mutual: boolean;
    nickname: string;
    province: number;
    remarkName: null;
    signature: string;
    userId: number;
    userType: number;
    vipType: number;
}
/**
 * ApifoxModel
 */
export interface getListMusicResult {
    code: number;
    privileges: Privilege[];
    songs: Song[];
}

export interface Privilege {
    chargeInfoList: ChargeInfoList[];
    cp: number;
    cs: boolean;
    dl: number;
    dlLevel: string;
    downloadMaxbr: number;
    downloadMaxBrLevel: string;
    fee: number;
    fl: number;
    flag: number;
    flLevel: string;
    freeTrialPrivilege: FreeTrialPrivilege;
    id: number;
    maxbr: number;
    maxBrLevel: string;
    payed: number;
    pl: number;
    playMaxbr: number;
    playMaxBrLevel: string;
    plLevel: string;
    preSell: boolean;
    rscl: null;
    sp: number;
    st: number;
    subp: number;
    toast: boolean;
}

export interface ChargeInfoList {
    chargeMessage: null;
    chargeType: number;
    chargeUrl: null;
    rate: number;
}

export interface FreeTrialPrivilege {
    listenType: null;
    resConsumable: boolean;
    userConsumable: boolean;
}

export interface Song {
    a: null;
    al: Al;
    alia: string[];
    ar: Ar[];
    awardTags: null;
    cd: string;
    cf: string;
    copyright: number;
    cp: number;
    crbt: null;
    djId: number;
    dt: number;
    entertainmentTags: null;
    fee: number;
    ftype: number;
    h: H;
    hr: null | Hr;
    id: number;
    l: L;
    m: M;
    mark: number;
    mst: number;
    mv: number;
    name: string;
    no: number;
    noCopyrightRcmd: null;
    originCoverType: number;
    originSongSimpleData: null;
    pop: number;
    pst: number;
    publishTime: number;
    resourceState: boolean;
    rt: string;
    rtUrl: null;
    rtUrls: string[];
    rtype: number;
    rurl: null;
    s_id: number;
    single: number;
    songJumpInfo: null;
    sq: null | Sq;
    st: number;
    t: number;
    tagPicList: null;
    tns: string[];
    v: number;
    version: number;
}

export interface Al {
    id: number;
    name: string;
    pic: number;
    pic_str: string;
    picUrl: string;
    tns: string[];
}

export interface Ar {
    alias: string[];
    id: number;
    name: string;
    tns: string[];
}

export interface H {
    br: number;
    fid: number;
    size: number;
    sr: number;
    vd: number;
}

export interface Hr {
    br: number;
    fid: number;
    size: number;
    sr: number;
    vd: number;
}

export interface L {
    br: number;
    fid: number;
    size: number;
    sr: number;
    vd: number;
}

export interface M {
    br: number;
    fid: number;
    size: number;
    sr: number;
    vd: number;
}

export interface Sq {
    br: number;
    fid: number;
    size: number;
    sr: number;
    vd: number;
}