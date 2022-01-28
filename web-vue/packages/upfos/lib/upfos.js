import Button from '@upfos/button';

const components = [Button];
const install = (app) => {
    components.forEach((component) => {
        //注册组件
        app.component(component.name, component);
    });
};
var index = {
    install,
};

export default index;
