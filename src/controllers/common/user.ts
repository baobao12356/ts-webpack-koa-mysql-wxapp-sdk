import { BeautyCameraUserInfo } from '../../models/wx-userInfo';

export const login = async (ctx, next) => {
    const wxRes = await BeautyCameraUserInfo.findAll();
    console.log(wxRes);
    await next();
};
