// 微信小程序 user表
import { sequelize } from '../tools/db';
import { BasicUserInfoModelConfig, BasicUserInfoModel } from './common/userInfo';

// 美颜相机
class BeautyCameraUserInfo extends BasicUserInfoModel {}

BeautyCameraUserInfo.init(BasicUserInfoModelConfig, {
    sequelize,
    tableName: 'beauty_camera_userInfo'
});

BeautyCameraUserInfo.sync();

// 朋友答题
class FriendQuestionsUserInfo extends BasicUserInfoModel {}

FriendQuestionsUserInfo.init(BasicUserInfoModelConfig, {
    sequelize,
    tableName: 'friend_questions_userInfo'
});

FriendQuestionsUserInfo.sync();

export { BeautyCameraUserInfo, FriendQuestionsUserInfo };
