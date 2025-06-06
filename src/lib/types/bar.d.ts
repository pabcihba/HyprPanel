import { Variable } from 'types/variable';
import Box from 'types/widgets/box';
import Button, { ButtonProps } from 'types/widgets/button';
import Label from 'types/widgets/label';
import { Attribute, Child } from './widget';
import { Widget } from 'astal/gtk3';
import { Binding } from 'astal';
import { Connectable } from 'astal/binding';
import { CustomBarModuleStyle } from 'src/components/bar/custom_modules/types';

export type BarBoxChild = {
    component: JSX.Element;
    isVisible?: boolean;
    isVis?: Variable<boolean>;
    isBox?: boolean;
    boxClass: string;
    tooltip_text?: string | Binding<string>;
} & ({ isBox: true; props: Widget.EventBoxProps } | { isBox?: false; props: Widget.ButtonProps });

export type SelfButton = Button<Child, Attribute>;

export type BoxHook = (self: Box<Gtk.Widget, Gtk.Widget>) => void;
export type LabelHook = (self: Label<Gtk.Widget>) => void;

export type BarModule = {
    icon?: string | Binding<string>;
    textIcon?: string | Binding<string>;
    useTextIcon?: Binding<boolean>;
    label?: string | Binding<string>;
    truncationSize?: Binding<number>;
    labelHook?: LabelHook;
    boundLabel?: string;
    tooltipText?: string | Binding<string>;
    boxClass: string;
    isVis?: Variable<boolean>;
    props?: Widget.ButtonProps;
    showLabel?: boolean;
    showLabelBinding?: Binding;
    showIconBinding?: Binding;
    hook?: BoxHook;
    connection?: Binding<Connectable>;
};

export type ResourceLabelType = 'used/total' | 'used' | 'percentage' | 'free';

export type NetstatLabelType = 'full' | 'in' | 'out';
export type RateUnit = 'GiB' | 'MiB' | 'KiB' | 'auto';
