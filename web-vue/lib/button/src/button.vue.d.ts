import { PropType } from 'vue';
declare type ButtonTypes = 'primary' | 'text';
declare type ButtonSize = 'small' | 'medium' | 'large' | 'larger';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<ButtonTypes>;
        default: string;
    };
    icon: StringConstructor;
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    classNames: {
        [x: string]: boolean;
        'u-button--text': boolean;
        'u-button--primary': boolean;
        'is-disabled': boolean;
        'is-plain': boolean;
        'is-circle': boolean;
        'is-round': boolean;
    };
    slots: Readonly<{
        [name: string]: import("vue").Slot;
    }>;
    handleClick: (e: any) => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: ButtonTypes;
    size: ButtonSize;
    disabled: boolean;
    round: boolean;
    plain: boolean;
    circle: boolean;
} & {
    icon?: string;
}>, {
    type: ButtonTypes;
    size: ButtonSize;
    disabled: boolean;
    round: boolean;
    plain: boolean;
    circle: boolean;
}>;
export default _default;
