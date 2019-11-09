import { DataTypes, Model } from 'sequelize';

const BasicUserInfoModelConfig = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    openid: {
        type: DataTypes.STRING(64),
        unique: true
    },
    nickName: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    country: DataTypes.STRING,
    province: DataTypes.STRING,
    language: DataTypes.STRING,
    sessionKey: DataTypes.STRING
};

/**
 *
 * 通用userInfo模型方法
 * @class BasicUserInfoModel
 * @extends {Model}
 */
class BasicUserInfoModel extends Model {
    // 查询是否存在 opendid 的小程序用户
    static async getUserByOpenid(openid) {
        const user = await BasicUserInfoModel.findOne({
            where: {
                openid
            }
        });

        return user;
    }

    // 注册小程用户
    static async createUserByOpenid(openid, sessionKey) {
        // 查询用户
        const user = await BasicUserInfoModel.create({
            openid,
            sessionKey
        });

        return user;
    }

    // 更新用户信息
    static async updateUserInfo(openid, userInfo) {
        const { nickName, avatarUrl, gender, country, province, language } = userInfo;
        const user = await BasicUserInfoModel.update(
            {
                nickName,
                avatarUrl,
                gender,
                country,
                province,
                language
            },
            {
                where: {
                    openid
                }
            }
        );

        return user;
    }
}

export { BasicUserInfoModelConfig, BasicUserInfoModel };
